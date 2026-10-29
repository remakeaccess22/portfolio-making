---
name: Jude Rafael Alayacyac Portfolio
description: Minimal founder portfolio with an aligned work gallery.
---

# Design system

## Approved direction

The homepage follows the user's references 2–3: a quiet white gallery, concise captions, and compact supporting records. This replaces the earlier editorial résumé layout. The user approved implementation after aligning Selected Work and refining the section rules.

## Identity, color and typography

Use the supplied JD logo unchanged as a logo-only header link and favicon. Full name and medium-weight blue Founder & Entrepreneur identity sit beside the Selected work heading. Do not add an adjacent city label or substitute Product Designer as the identity.

Homepage tokens: paper #ffffff, ink #171a17, muted #626561, line #e1e3de, surface #f2f3ef. Action/focus blue remains #0758b5. Authentic artwork retains its own colors. No shadows, decorative grids or gradients.

Headings use self-hosted Inter Variable; body uses locally installed SF Pro Display, Apple system fonts, then Inter/system fallbacks. No Apple font binaries are bundled. The homepage display is regular weight, clamp(3rem, 5.2vw, 4.75rem), line-height 1.02, tracking -.035em. Project titles are 1rem medium; roles and controls .8125rem; descriptions .875rem with 1.65 line-height, increasing to .9375rem on phones. Founder identity remains weight 500.

## Homepage composition

The container caps at 88rem including clamp(1.25rem, 4vw, 4rem) gutters. Sticky navigation has all original section destinations; phone navigation expands into two columns with Escape/focus-return support.

Selected work opens in a two-column introduction with a smaller identity/description beside the heading. FarmIQ, Axon Tickets and ResGuard form three equal, aligned gallery columns. CSS subgrid shares image, heading, description, and action tracks so project links align despite different text lengths. Tablet uses two columns; phone uses natural stacked flow. Preserve the entire supplied 16:9 artwork with object-fit contain and 16px corners. MooManage remains a text-only row.

Keep supplied project descriptions and contributions. FarmIQ, Axon Tickets and ResGuard each use a View case study link. These quiet text links occupy the existing action track, use .8125rem text and a 2.75rem minimum target height, and underline on hover. MooManage remains a text-only homepage entry without a reading page or project link. Contributions appear in the reading pages; the native My contribution disclosure remains a fallback for future records without a project route. Full-size artwork links retain useful accessible names. No website selectors are added.

Project credits stay consistent across the homepage, case-study metadata and next-project links: FarmIQ — Product Lead; Axon Tickets — Product Research & Design; ResGuard — Product Strategy Lead; MooManage — UI/UX Designer. They summarize the supplied responsibilities. Ventures retains the separate company leadership titles. All case-study role labels derive from the shared project records.

Ventures uses a narrow label column and wider ruled records. Preserve names, founder titles, dates, descriptions, and ordering; Pacepoint remains last. No venture links. A top line appears above the first company, Axon Entertainment; the Ventures label itself has no top line.

Professional experience follows Ventures. GalleryExperience presents two initially collapsed native groups: Work & internship and Organizations. Employers and role counts stay visible in summaries. Expanding reveals every full organization name, role, location, period and supplied description, with semantic emphasis for Lupang Hinirang. The content group has a top line above Work & internship; the Professional experience heading has no top line.

Leadership retains the authentic Summit photo and five event links in the supplied order. Neither its section heading nor event-list container has a top line; internal row separators remain. Initiative detail pages preserve all supplied photographs, narrative and credit distinctions.

About pairs biography and education. Contact is a shallow white section with email, copy feedback, Instagram and LinkedIn. The quiet Writing soon link remains while there are no published articles. Do not restore Process or GitHub promotion.

## Supporting reading pages

### Selected Work case studies

FarmIQ, Axon Tickets and ResGuard use CaseStudyShell. These pages extend the compact homepage's white ground, typography and authentic artwork. The user requested a website-oriented reading structure after finding the earlier narrow rail and repeated specification labels too document-like. Preserve the latest supplied narrative wording and distinguish current evidence from future evaluation.

The shared case header contains only the JD logo and contact link, at a 4.75rem minimum height. Back to selected work sits inside the article heading directly above its simple H1. Titles are FarmIQ, Axon Tickets and ResGuard; remove the “Simplifying…” descriptors from visible content and document metadata. Role, industry and current stage form three quiet metadata columns below the title. On phones these become two columns with stage spanning both. Use the shared project credits: Product Lead, Product Research & Design and Product Strategy Lead. The latest public ResGuard stage is In development.

The page caps at 80rem including clamp(1.25rem, 4vw, 4rem) gutters. Titles are regular Inter, clamp(2rem, 4.2vw, 3.25rem), line-height1.08 and tracking -.03em; phone titles use clamp(2rem, 8.2vw, 2.5rem). Body uses the established SF/system stack at1rem/1.7 with a68ch paragraph cap. Context leads are1.125rem/1.6. Section headings are regular Inter, clamp(1.375rem, 2vw, 1.5rem), line-height1.25 and tracking -.02em. Captions/controls retain the existing scale and44px minimum link targets. Supplied covers retain their full16:9 composition, object-fit contain and16px corners, with full-size links.

Below the artwork, a compact sticky jump bar provides Overview, Contribution, Decisions, Findings, Next steps and Learning. Its white surface and bottom rule keep it legible over the scroll. Desktop height is57px (44px targets plus12px padding and1px rule). At44rem and below, it becomes a3×2 grid,101px tall. Native hash destinations and2rem section scroll margins work with the existing5rem root scroll padding. Current location underlines, keyboard focus stays visible, and the observer prefers the visible chapter containing the focused heading. Case studies reuse usePortfolioMotion for Lenis wheel smoothing and GSAP-eased pointer chapter navigation (550–900ms according to distance). The sticky jump bar supplies its measured height plus20px as the navigation offset. Keyboard activation, hash/history restoration and reduced-motion preferences stay immediate; wheel/touch input can interrupt scrolling. Native hash links remain the fallback and modified clicks retain browser behavior.

The first reading band pairs problem and contribution in two columns. Decisions use three flat text columns: the user-supplied numbered title, a medium-weight choice, and muted rationale. Decision/Reasoning prefixes remain accessible to screen readers but are visually omitted to reduce repeated report labels. A single group rule replaces the earlier per-row table treatment. Decision headings are1.0625rem/1.5 at500 weight; text remains16px. Findings use a two-column composition: evidence and its validation note beside a semantic list of three titled finding groups. Future evaluation areas use a three-column semantic ordered list without table rules. No cards, invented metrics, artificial outcomes or stock product imagery.

The closing Key Learning label is1rem medium. Its supplied takeaway is a regular Inter pullquote at clamp(1.5rem, 2.5vw, 1.75rem)/1.35, with a16px reflection alongside it. Major reading bands are separated by3.5rem, decreasing to2.5rem on phones. At64rem and below, decision and next-step columns stack. At44rem and below, the opening pair, evidence and learning also stack in natural DOM order; body remains16px. Preserve native lists, complete text, focusable section targets and reduced-motion behavior.

A single linked next-project region cycles FarmIQ → Axon Tickets → ResGuard → FarmIQ. It uses the next project's title, concise role and authentic artwork. Its accessible navigation label is Next project; no visible eyebrow precedes the title. The arrow shifts slightly and title underlines on hover, subject to existing reduced-motion and keyboard rules. MooManage remains a plain homepage entry with no case-study page.

### Initiatives and Insights

Keep the existing JournalShell, initiative articles and Insights reading layout. Initiative articles use one reading column, 1 min read metadata, title, introduction, byline without divider, full-frame photo with 16px corners, narrative sections, accurate credits, sources and return links. All five initiative headers omit category/date metadata at the user's request. Do not infer dates or credit relationships. Supporting tokens remain in src/styles/portfolio.css; initiative/Insights CSS remains authoritative for reading surfaces.

## Motion and access

Reuse the existing Lenis/GSAP hook: quiet hero entrance and deliberate imagery reveals, pointer section navigation, native touch, immediate keyboard/history restoration, and observed reduced-motion preference. No custom cursor, pins or scroll locks. Default content stays readable at rest.

Keep visible focus, skip navigation, real hash destinations and native disclosure behavior. Copy email uses a live status message and failure fallback. Content uses intrinsic sizing, no fixed-height text clipping. All images have descriptive alternative text.

## Implementation

EditorialPortfolio.jsx and EditorialPortfolio.css now implement the main homepage. GalleryExperience.jsx owns compact grouped experience. CaseStudy.jsx and CaseStudy.css own the shared project reading surface, with conditional narrative content in src/data/case-studies.js and supplied project records in src/data/portfolio.js. Portfolio.jsx and other dormant legacy components are not active patterns. Initiative data remains in src/data/initiatives.js.

The root homepage uses the normal portfolio document title and index/follow metadata. The /design/editorial/ alias retains preview title and noindex/nofollow metadata. Approved /work/* pages use index/follow metadata and project-specific titles. Unknown slugs retain noindex/nofollow and show a return link. On October 29, 2026, the user approved publishing the current case studies. Earlier Expertise outline routes remain local reference material and are excluded from the production release. Published routes now have generated HTML files and route-specific CSS. Vercel serves those files directly, with a custom 404 for unknown paths; the SPA catch-all has been removed.

## Search and sharing metadata

The October 30, 2026 SEO update preserves the approved visual layout. src/data/seo.js is authoritative for page titles, descriptions, canonical URLs, robots directives, Open Graph/Twitter tags and factual Person/WebSite/WebPage structured data. The build renders the same React components to HTML and the browser hydrates them. Styles for each route are linked in the generated head so the page is readable before JavaScript. Empty Insights is noindex until an article is published. A generated sitemap lists only published indexable pages. Unknown paths have no canonical and use a custom noindex 404. Canonical URLs retain trailing slashes; old design aliases redirect to the homepage. See docs/seo.md for owner verification and content upkeep.
