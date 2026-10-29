import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist");
const origin = "https://judealayacyac.vercel.app";
const decode = text => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">");
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))].map(match => Object.fromEntries([...match[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)])));
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => entry.isDirectory() ? htmlFiles(resolve(directory, entry.name)) : entry.name.endsWith(".html") ? [resolve(directory, entry.name)] : []));
  return groups.flat();
}

const files = await htmlFiles(output);
const pages = new Map();
const titles = new Set();
const descriptions = new Set();
for (const file of files) {
  const html = await readFile(file, "utf8");
  const path = relative(output, file) === "404.html" ? "/404.html" : `/${relative(output, file).replace(/index\.html$/, "")}`;
  const head = html.split("</head>")[0];
  const title = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/g)];
  const meta = tags(head, "meta");
  const description = meta.filter(tag => tag.name === "description");
  const robots = meta.filter(tag => tag.name === "robots");
  const canonical = tags(head, "link").filter(tag => tag.rel === "canonical");
  assert.equal(title.length, 1, `${path}: one initial HTML title`);
  assert.equal(description.length, 1, `${path}: one description`);
  assert.equal(robots.length, 1, `${path}: one robots directive`);
  assert(!titles.has(title[0][1]), `${path}: unique title`);
  assert(!descriptions.has(description[0].content), `${path}: unique description`);
  titles.add(title[0][1]); descriptions.add(description[0].content);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${path}: rendered single H1`);
  assert(!html.includes('<div id="root"></div>'), `${path}: complete HTML body`);
  assert(!html.includes("<!--$!-->"), `${path}: no aborted suspense`);
  assert(!html.includes("/src/"), `${path}: no development asset URLs`);
  const noindex = robots[0].content.includes("noindex");
  if (path === "/404.html") {
    assert(noindex, "Missing pages must be noindex");
    assert.equal(canonical.length, 0, "Missing pages must not canonicalize to the homepage");
  } else {
    assert.equal(canonical.length, 1, `${path}: one canonical`);
    assert.equal(canonical[0].href, `${origin}${path}`, `${path}: canonical matches served path`);
  }
  for (const property of ["og:title", "og:description", "og:image", "og:image:alt"]) assert.equal(meta.filter(tag => tag.property === property).length, 1, `${path}: ${property}`);
  const image = meta.find(tag => tag.property === "og:image").content;
  assert.equal(new URL(image).origin, origin, `${path}: absolute production sharing image`);
  await access(resolve(output, `.${new URL(image).pathname}`));
  for (const script of [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]) {
    const data = JSON.parse(script[1]);
    assert.equal(data["@context"], "https://schema.org");
    assert(data["@graph"].some(item => item["@type"] === "Person" && item.name === "Jude Rafael Alayacyac"));
  }
  if (!noindex) assert(head.includes('type="application/ld+json"'), `${path}: structured data`);
  for (const stylesheet of tags(head, "link").filter(tag => tag.rel === "stylesheet")) await access(resolve(output, `.${stylesheet.href}`));
  if (path.startsWith("/work/")) assert(tags(head, "link").some(tag => tag.rel === "stylesheet" && tag.href.includes("CaseStudy-")), `${path}: case styles work without JavaScript`);
  if (path === "/") assert(tags(head, "link").some(tag => tag.rel === "stylesheet" && tag.href.includes("EditorialPortfolio-")), "Homepage styles work without JavaScript");
  pages.set(path, { html, noindex, canonical: canonical[0]?.href });
}

const sitemap = await readFile(resolve(output, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url));
assert.equal(new Set(urls).size, urls.length, "No duplicate sitemap URLs");
assert.deepEqual(new Set(urls), new Set([...pages.values()].filter(page => !page.noindex).map(page => page.canonical)), "Sitemap contains exactly the indexable pages");
assert(!sitemap.includes("/expertise/") && !sitemap.includes("/design/"), "Draft outlines and previews stay out of the sitemap");
const robots = await readFile(resolve(output, "robots.txt"), "utf8");
assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`) && robots.includes("Allow: /"), "Crawling allowed and sitemap declared");
for (const [path, { html }] of pages) {
  for (const anchor of tags(html, "a")) {
    if (!anchor.href || /^(mailto:|tel:)/.test(anchor.href)) continue;
    const url = new URL(anchor.href, `${origin}${path}`);
    if (url.origin !== origin) continue;
    const target = pages.get(url.pathname);
    if (target) {
      if (url.hash) assert(target.html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${path}: existing anchor ${anchor.href}`);
    } else await access(resolve(output, `.${url.pathname}`));
  }
}
const config = JSON.parse(await readFile(resolve(root, "vercel.json"), "utf8"));
assert(!config.rewrites?.some(rule => rule.source === "/(.*)"), "No homepage wildcard hiding 404 responses");
assert(config.trailingSlash, "Canonical trailing-slash routing");
console.log(`SEO checks passed: ${pages.size} complete HTML pages, ${urls.length} sitemap URLs, metadata, social images, JSON-LD, styles, internal links, and routing configuration.`);
