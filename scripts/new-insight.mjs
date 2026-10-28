#!/usr/bin/env node
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new:insight -- "Your article title"');
  process.exit(1);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "src/content/insights");
const draftsRoot = path.join(contentRoot, "drafts");
const publishedRoot = path.join(contentRoot, "published");
await mkdir(draftsRoot, { recursive: true });
await mkdir(publishedRoot, { recursive: true });

const baseSlug = title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "untitled-article";
const taken = new Set((await Promise.all([readdir(draftsRoot), readdir(publishedRoot)])).flat().filter((file) => file.endsWith(".md")).map((file) => file.slice(0, -3)));
let slug = baseSlug;
let suffix = 2;
while (taken.has(slug)) slug = `${baseSlug}-${suffix++}`;

const now = new Date();
const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
const content = `---
title: ${JSON.stringify(title)}
slug: ${slug}
excerpt: "Write a short, specific introduction to the article."
date: ${date}
category: product-building
status: draft
---

<!-- Write your article below. Use ## for section headings. -->
<!-- Categories: entrepreneurship, technology, product-building, design, agriculture, startup-lessons -->
<!-- This draft is excluded from the public site. See docs/insights.md when ready to publish. -->
`;

const destination = path.join(draftsRoot, `${slug}.md`);
try {
  await writeFile(destination, content, { flag: "wx" });
  console.log(`Created draft: ${path.relative(root, destination)}`);
  console.log("Edit the article, then follow docs/insights.md to publish.");
} catch (error) {
  if (error.code === "EEXIST") {
    console.error("A draft with that filename was created concurrently. Run the command again to choose the next available slug.");
    process.exit(1);
  }
  throw error;
}
