# Jude Rafael Alayacyac — Portfolio

A React, Tailwind CSS v4, and Vite portfolio for Jude Rafael, Founder & Entrepreneur.

Live site: https://judealayacyac.vercel.app/

## Develop

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build validates published Insights before generating `dist/`. Vercel deploys the `main` branch of `remakeaccess22/portfolio-making`. `vercel.json` supports direct initiative and Insights URLs.

## Content and components

- `src/data/portfolio.js`: profile, ventures, selected work, and professional experience.
- `src/data/initiatives.js`: the five initiative stories, photographs, roles, and partner credits.
- `src/components/portfolio/`: EditorialPortfolio homepage and styles, GalleryExperience disclosures, shared identity, and Lenis/GSAP motion.
- `src/components/initiatives/`: initiative listing and article pages.
- `src/components/insights/`: article archive and reading pages.
- `src/styles/portfolio.css`: font faces, base tokens, focus, and reduced-motion behavior.
- `public/images/brand/`, `public/images/work/`, `public/images/events/`: supplied branding, project artwork, event photography, and partner logos.
- `DESIGN.md` and `PRODUCT.md`: design rules and product context.

The homepage uses an aligned gallery, two expandable experience groups, a shallow light contact section, a logo-only header, a blue founder role, 16px project corners, native contribution dropdowns, and a quiet Writing soon link while the article archive is empty. Supporting pages use the same typography and accessible navigation.

## Writing Insights

```sh
npm run new:insight -- "Your article title"
```

Drafts are created in `src/content/insights/drafts/`, which is ignored by Git and excluded from the public bundle. When ready, set `status: published`, move the Markdown file into `src/content/insights/published/`, and rebuild. Follow [the writing guide](docs/insights.md) for metadata and supported categories. Dates organize articles; they do not schedule publication.

## Fonts and media

Inter Variable is self-hosted under the SIL Open Font License; its license is included in `src/assets/fonts/Inter-LICENSE.txt` and served at `/fonts/Inter-LICENSE.txt`. Supporting text uses locally installed SF Pro Display or system/Inter fallbacks. Apple font binaries and unused local font experiments are not added to this release.

Project artwork, event photographs, and identity/partner marks were supplied for the portfolio. Use accurate role and credit labels when maintaining them.

## Hosting limits

This is a static client-rendered application. Article metadata updates in the browser; per-article server-rendered social previews, RSS, and a browser CMS are not implemented. Unknown article URLs display a not-found view and noindex metadata, while static SPA hosting may return HTTP 200.
