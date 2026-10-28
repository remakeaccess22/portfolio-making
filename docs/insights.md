# Publishing Insights

Insights is a source-based personal blog. Published articles have their own URLs, topic filters, dates, and estimated reading times. There is no CMS account or browser editor to maintain. Writing an article does not change the live website until the project is built and deployed.

No articles have been invented for the initial portfolio. The archive shows an honest empty state until you publish your own writing.

## Create a draft

From the portfolio folder:

```sh
npm run new:insight -- "Your article title"
```

The command creates a Markdown file in `src/content/insights/drafts/`, without overwriting existing drafts or published filenames. Open that file in your editor. A private instructional template is also available at `src/content/insights/drafts/writing-template.md`.

Draft files are excluded from the public import glob, so their text does not enter the client JavaScript bundle. They remain ordinary source files: anyone who can read the Git repository can still read committed drafts. Keep confidential writing outside the repository.

## Frontmatter

Each article begins with:

```yaml
---
title: "Your article title"
slug: your-article-title
excerpt: "A short, specific introduction to the article."
date: 2026-10-18
category: product-building
status: draft
---
```

Use one field per line. Plain values and JSON double-quoted strings are supported. Multiline YAML values are not supported. Required fields are `title`, `slug`, `excerpt`, `date`, `category`, and `status`. The slug uses lowercase letters, numbers, and hyphens. Dates use a real calendar date in `YYYY-MM-DD` format.

The six category values are:

- `entrepreneurship`
- `technology`
- `product-building`
- `design`
- `agriculture`
- `startup-lessons`

Use the title field for the page heading and `##` for sections in the body. Standard Markdown supports paragraphs, links, lists, quotes, images, and fenced code blocks. Raw HTML is not rendered. For a local image, put it in `public/insights/` and reference it as `![Descriptive alternative text](/insights/image-name.jpg)`.

## Publish

1. Finish your article and replace the placeholder excerpt. Verify names, dates, claims, image permissions, and source links.
2. Change `status: draft` to `status: published`.
3. Move the file from `src/content/insights/drafts/` to `src/content/insights/published/`. Only files in the published folder enter the site.
4. Run `npm run dev` and open `/insights/` and `/insights/your-article-title/`. Check the article at desktop and mobile widths.
5. Run `npm run build`, commit the changes, and deploy through the portfolio’s existing Git/Vercel workflow when you are ready to make them public.

Articles appear newest first. Reading time is estimated from the Markdown body at 220 words per minute. `date` is a display and sorting value; future dates do not schedule publication. Moving a file into the published folder makes it eligible for the next deployment immediately.

Every production build validates published articles before Vite runs. Duplicate slugs, missing metadata, invalid dates, empty article bodies, unknown categories, or draft status inside the published folder stop the build with a clear error. To run this check on its own, use `node scripts/validate-insights.mjs`. The browser and validator share the same content parser.

A typo or unpublished URL shows an article-not-found page and sets `noindex, nofollow` metadata. Archive and article pages update their browser title and description. These are client-rendered metadata; social scrapers that do not execute JavaScript receive the portfolio’s default metadata. Because this is a static single-page application, an unknown article may still return HTTP 200 rather than an HTTP 404.

## Revise or unpublish

Edit a published Markdown file, check the preview, then rebuild and deploy to update it. Keep its slug stable so existing links continue to work. To unpublish, move it back to the drafts folder, set `status: draft`, rebuild, and deploy. Old article URLs will show the not-found screen.

## Integration

`src/components/insights/Insights.jsx` exports `InsightsPreview` for the portfolio section, `InsightsIndex` for `/insights/`, and `InsightArticle` for `/insights/:slug/`. The route components each include their own `main` and single page `h1`; the homepage preview is a `section` with `id="insights"`. Site navigation and footer belong to the parent application.

The parent application must handle these routes and the hosting service must serve the application shell for direct article URLs. This version does not provide per-article server-rendered social cards or an automatic RSS feed.
