#!/usr/bin/env node
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseInsightSources } from "../src/data/insight-parser.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publishedRoot = path.join(projectRoot, "src/content/insights/published");

try {
  const files = (await readdir(publishedRoot, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name)
    .sort();
  const sources = Object.fromEntries(await Promise.all(files.map(async (file) => [
    `src/content/insights/published/${file}`,
    await readFile(path.join(publishedRoot, file), "utf8"),
  ])));
  const articles = parseInsightSources(sources);
  console.log(`Validated ${articles.length} published ${articles.length === 1 ? "insight" : "insights"}.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
