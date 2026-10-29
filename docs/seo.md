# Portfolio SEO

Canonical website: https://judealayacyac.vercel.app/

## Generated at every build

`npm run build` validates published articles, builds the browser app, renders the same React pages into static HTML, generates search/social metadata and structured data, and verifies the output. No production server or new dependency is required for rendering.

- The homepage, three work case studies, five initiatives, and Insights have complete HTML and route-specific styles before JavaScript runs.
- React hydrates that HTML to activate menus, disclosures, filters, and smooth navigation.
- `src/data/seo.js` supplies unique titles, descriptions, canonical URLs, sharing tags, and Person/WebSite/WebPage JSON-LD. It derives routes and artwork from the existing published content data.
- `/sitemap.xml` lists only indexable published pages. `/robots.txt` allows crawling and declares that sitemap.
- Empty Insights remains accessible through Writing soon but is noindex and excluded from the sitemap. Publishing a validated article automatically includes the index and article on the next build.
- `dist/404.html` is the custom missing-page response. Vercel serves it with HTTP 404; the old catch-all homepage rewrite is removed. Canonical URLs use trailing slashes. Old design aliases redirect to the homepage.
- Expertise outlines, local previews, article drafts, and unused design experiments are not published by this SEO release.
- `scripts/validate-seo.mjs` checks generated content, metadata uniqueness, canonical consistency, JSON-LD, sharing images, CSS, internal destinations, and sitemap coverage. A failed check blocks the build.

## Search Console owner step

1. Open https://search.google.com/search-console/ using the Google account that should own this website.
2. Add a URL-prefix property for `https://judealayacyac.vercel.app/` (a Domain property cannot verify ownership of Vercel's shared `vercel.app` domain).
3. Complete one of Google's offered verification methods. If using an HTML verification file, place the exact provided file in `public/` and deploy; if using an HTML meta tag, add Google's exact verification tag to `index.html` and deploy. Do not place private tokens or account credentials in the repository.
4. Submit `https://judealayacyac.vercel.app/sitemap.xml` in Sitemaps.
5. Inspect the homepage and three case-study URLs, check their rendered HTML and canonical selection, then request indexing where appropriate.
6. Monitor Page indexing and Performance for discovered/indexed URLs, queries, impressions, and clicks. This implementation does not establish account ownership, submit the sitemap, or guarantee ranking/indexing.

## Content upkeep

Keep descriptions accurate, publish original evidence rather than invented outcomes, and link the portfolio from your own LinkedIn and appropriate venture/speaker profiles. Add articles when there is a useful first-hand story to share. No keyword stuffing or visual redesign is needed.
