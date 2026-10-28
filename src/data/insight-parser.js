export const insightTopics = [
  { id: "entrepreneurship", label: "Entrepreneurship", description: "Building businesses and making decisions as a founder." },
  { id: "technology", label: "Technology", description: "Choosing tools and understanding the systems behind products." },
  { id: "product-building", label: "Product building", description: "From an identified problem to a useful working product." },
  { id: "design", label: "Design", description: "Brand direction, interfaces, and the choices that shape experiences." },
  { id: "agriculture", label: "Agriculture", description: "The relationship between farm operations and digital products." },
  { id: "startup-lessons", label: "Startup lessons", description: "Reflections on developing ventures and learning along the way." },
];

const knownTopics = new Set(insightTopics.map((topic) => topic.id));

export function parseArticle(source, file) {
  const fail = (message) => { throw new Error(`[Insights: ${file}] ${message}`); };
  const normalized = source.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)([\s\S]*)$/);
  if (!match) fail("Add a frontmatter block between two --- lines at the beginning of the file.");

  const metadata = {};
  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const field = line.match(/^([a-z]+):\s*(.*?)\s*$/);
    if (!field) fail(`Invalid frontmatter line: ${line}. Use one key: value per line.`);
    const [, key, rawValue] = field;
    if (Object.hasOwn(metadata, key)) fail(`Duplicate frontmatter field: ${key}.`);
    if (rawValue.startsWith('"')) {
      try { metadata[key] = JSON.parse(rawValue); }
      catch { fail(`Invalid quoted value for ${key}. Use plain text or a JSON double-quoted string.`); }
    } else if (rawValue.startsWith("'") && rawValue.endsWith("'")) {
      metadata[key] = rawValue.slice(1, -1).replace(/''/g, "'");
    } else {
      metadata[key] = rawValue;
    }
  }

  for (const key of ["title", "slug", "excerpt", "date", "category", "status"]) {
    if (typeof metadata[key] !== "string" || !metadata[key].trim()) fail(`Missing or empty ${key}.`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.slug)) fail("slug must contain lowercase letters, numbers, and single hyphens.");
  if (metadata.status !== "published") fail("Only status: published belongs in the published folder. Move drafts to insights/drafts/.");
  if (!knownTopics.has(metadata.category)) fail(`Unknown category. Choose: ${[...knownTopics].join(", ")}.`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)) fail("date must use YYYY-MM-DD.");
  const date = new Date(`${metadata.date}T00:00:00Z`);
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== metadata.date) fail("date must be a valid calendar date.");
  const body = match[2].trim();
  if (!body || !body.replace(/<!--[\s\S]*?-->/g, "").trim()) fail("An article needs a body before it can be published.");

  const wordCount = body.replace(/<!--[\s\S]*?-->/g, "").replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1").split(/\s+/).filter(Boolean).length;
  return {
    ...metadata,
    body,
    topic: insightTopics.find((topic) => topic.id === metadata.category),
    readingMinutes: Math.max(1, Math.ceil(wordCount / 220)),
    href: `/insights/${metadata.slug}/`,
  };
}

export function parseInsightSources(sources) {
  const articles = Object.entries(sources).map(([file, source]) => parseArticle(source, file));
  const slugs = new Set();
  for (const article of articles) {
    if (slugs.has(article.slug)) throw new Error(`[Insights] Duplicate article slug: ${article.slug}.`);
    slugs.add(article.slug);
  }
  return articles.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}
