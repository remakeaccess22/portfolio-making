import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist");
const escapeHtml = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
try {
  const { render, getHeadTags, getPageMetadata, getPublishedPages, siteUrl } = await import(pathToFileURL(resolve(root, ".ssr/entry-server.js")));
  const template = await readFile(resolve(output, "index.html"), "utf8");
  const manifest = JSON.parse(await readFile(resolve(output, ".vite/manifest.json"), "utf8"));
  const pages = getPublishedPages();

  function collectCss(key, found = new Set(), seen = new Set()) {
    if (seen.has(key)) return found;
    seen.add(key);
    const entry = manifest[key];
    if (!entry) throw new Error(`Missing build manifest entry: ${key}`);
    for (const dependency of entry.imports ?? []) collectCss(dependency, found, seen);
    for (const css of entry.css ?? []) found.add(css);
    return found;
  }

  for (const metadata of [...pages, getPageMetadata("/404/")]) {
    const markup = await render(metadata.path);
    if (!markup.includes("<h1") || markup.includes('id="root"></div>') || markup.includes("<!--$!-->")) throw new Error(`Incomplete render: ${metadata.path}`);
    const head = getHeadTags(metadata).map(({ tag, text, ...attrs }) => {
      const attributes = Object.entries(attrs).map(([key, value]) => `${key}="${escapeHtml(value)}"`).join(" ");
      if (tag === "title" || tag === "script") return `<${tag} data-page-seo ${attributes}>${tag === "script" ? text : escapeHtml(text)}</${tag}>`;
      return `<${tag} data-page-seo ${attributes}>`;
    }).join("\n  ");
    const pageModule = !metadata.exists ? "src/App.jsx" : metadata.study ? "src/components/portfolio/CaseStudy.jsx" : metadata.initiative ? "src/components/initiatives/Initiatives.jsx" : metadata.path.startsWith("/insights/") ? "src/components/insights/Insights.jsx" : "src/components/portfolio/EditorialPortfolio.jsx";
    const css = collectCss("index.html");
    if (manifest[pageModule]) collectCss(pageModule, css);
    // The generic 404 uses only the global stylesheet included by main.jsx.
    const styles = [...css].filter(file => !template.includes(`href="/${file}"`)).map(file => `<link rel="stylesheet" href="/${file}">`).join("\n  ");
    const html = template.replace(/<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/, () => `<!--seo-head-start-->\n  ${head}\n  <!--seo-head-end-->`).replace("</head>", () => `  ${styles}\n</head>`).replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`);
    const path = metadata.exists ? resolve(output, `.${metadata.path}`, "index.html") : resolve(output, "404.html");
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, html);
  }
  const urls = pages.filter(page => !page.noindex).map(page => `  <url><loc>${escapeHtml(page.canonical)}</loc></url>`).join("\n");
  await writeFile(resolve(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeFile(resolve(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  // The manifest is a build input, not a public website resource.
  await rm(resolve(output, ".vite"), { recursive: true });
  console.log(`Pre-rendered ${pages.length} pages and a custom 404; generated sitemap and robots.txt.`);
} finally {
  await rm(resolve(root, ".ssr"), { recursive: true, force: true });
}
