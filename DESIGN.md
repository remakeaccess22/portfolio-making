---
name: Jude Rafael Alayacyac Portfolio
description: Minimal personal portfolio with Design and Business expertise galleries.
---

# Design system

## Approved direction

The portfolio retains the user's references 2–3: a quiet white ground, aligned galleries, concise captions and compact supporting records. The latest homepage leads with Jude's name and introduction; the approved Selected Work gallery now lives in Business Expertise. This is an extension of the existing visual system, not a new identity. Earlier gallery-led homepage composition is historical context.

## Identity, color and typography

Use the supplied JD logo unchanged as a logo-only header link and favicon. The homepage hero displays Jude Rafael S. Alayacyac over two lines with the original introduction beside it. The visible Founder & Entrepreneur hero label is removed. Preserve founder positioning in the factual content; do not add an adjacent city label or substitute Product Designer as the identity.

Homepage tokens: paper #ffffff, ink #171a17, muted #626561, line #e1e3de, surface #f2f3ef. Action/focus blue remains #0758b5. Authentic artwork retains its own colors. No shadows, decorative grids or gradients.

Headings use self-hosted Inter Variable; body uses locally installed SF Pro Display, Apple system fonts, then Inter/system fallbacks. No Apple font binaries are bundled. The name-led homepage display is regular weight, clamp(2.75rem, 5.2vw, 4.75rem), line-height 1.02, tracking -.035em; phones use clamp(2.25rem, 9.5vw, 4rem) and line-height 1.1. Project titles are 1rem medium; roles and controls .8125rem; descriptions .875rem with 1.65 line-height, increasing to .9375rem on phones. Existing responsibility and venture labels retain their established weights.

## Homepage composition

The container caps at 88rem including clamp(1.25rem, 4vw, 4rem) gutters. Sticky navigation contains Expertise, Ventures, Experience, Leadership, About and Let’s talk. Phone navigation expands into two columns with Escape/focus-return support; its Expertise group spans both columns.

The hero uses a 1.5:1 name/introduction grid with quiet Design and Business text links below the original introduction. Below 47.5rem, name and introduction stack while the name remains two lines. Ventures follows directly, then Professional experience, Leadership, About and Contact. Selected Work is reached through Expertise → Business or the quiet Business hero link.

### Business Expertise gallery

At /expertise/business/, a compact Business. heading and short product-strategy introduction precede Selected work. FarmIQ, Axon Tickets and ResGuard form three equal, aligned gallery columns. CSS subgrid shares image, heading, description, and action tracks so project links align despite different text lengths. Tablet uses two columns; phone uses natural stacked flow. Preserve the entire supplied 16:9 artwork with object-fit contain and 16px corners. MooManage remains a text-only row.

Keep supplied project descriptions and contributions. FarmIQ, Axon Tickets and ResGuard each use a View case study link. These quiet text links occupy the existing action track, use .8125rem text and a 2.75rem minimum target height, and underline on hover. MooManage remains a text-only Business gallery entry without a reading page or project link. Contributions appear in the reading pages; the native My contribution disclosure remains a fallback for future records without a project route. Full-size artwork links retain useful accessible names. No website selectors are added.

Project credits stay consistent across the Business gallery, case-study metadata and next-project links: FarmIQ — Product Lead; Axon Tickets — Product Research & Design; ResGuard — Product Strategy Lead; MooManage — UI/UX Designer. They summarize the supplied responsibilities. Ventures retains the separate company leadership titles. All case-study role labels derive from the shared project records.

### Homepage supporting sections

Ventures uses a narrow label column and wider ruled records. Preserve names, founder titles, dates, descriptions, and ordering; Pacepoint remains last. No venture links. A top line appears above the first company, Axon Entertainment; the Ventures label itself has no top line.

Professional experience follows Ventures. GalleryExperience presents two initially collapsed native groups: Work & internship and Organizations. Employers and role counts stay visible in summaries. Expanding reveals every full organization name, role, location, period and supplied description, with semantic emphasis for Lupang Hinirang. The content group has a top line above Work & internship; the Professional experience heading has no top line.

Leadership retains the authentic Summit photo and five event links in the supplied order. Neither its section heading nor event-list container has a top line; internal row separators remain. Initiative detail pages preserve all supplied photographs, narrative and credit distinctions.

About pairs biography and education. Contact is a shallow white section with email, copy feedback, Instagram and LinkedIn. The quiet Writing soon link remains while there are no published articles. Do not restore Process or GitHub promotion.

## Supporting reading pages

### Selected Work case studies

FarmIQ, Axon Tickets and ResGuard use CaseStudyShell. These pages extend the portfolio's white ground, compact typography and authentic artwork. The user requested a website-oriented reading structure after finding the earlier narrow rail and repeated specification labels too document-like. Preserve the latest supplied narrative wording and distinguish current evidence from future evaluation.

The shared case header contains only the JD logo and contact link, at a 4.75rem minimum height. Back to selected work sits inside the article heading directly above its simple H1 and links to /expertise/business/#work, as does the footer return link. Titles are FarmIQ, Axon Tickets and ResGuard; remove the “Simplifying…” descriptors from visible content and document metadata. Role, industry and current stage form three quiet metadata columns below the title. On phones these become two columns with stage spanning both. Use the shared project credits: Product Lead, Product Research & Design and Product Strategy Lead. The latest public ResGuard stage is In development.

The page caps at 80rem including clamp(1.25rem, 4vw, 4rem) gutters. Titles are regular Inter, clamp(2rem, 4.2vw, 3.25rem), line-height1.08 and tracking -.03em; phone titles use clamp(2rem, 8.2vw, 2.5rem). Body uses the established SF/system stack at1rem/1.7 with a68ch paragraph cap. Context leads are1.125rem/1.6. Section headings are regular Inter, clamp(1.375rem, 2vw, 1.5rem), line-height1.25 and tracking -.02em. Captions/controls retain the existing scale and44px minimum link targets. Supplied covers retain their full16:9 composition, object-fit contain and16px corners, with full-size links.

Below the artwork, a compact sticky jump bar provides Overview, Contribution, Decisions, Findings, Next steps and Learning. Its white surface and bottom rule keep it legible over the scroll. Desktop height is57px (44px targets plus12px padding and1px rule). At44rem and below, it becomes a3×2 grid,101px tall. Native hash destinations and2rem section scroll margins work with the existing5rem root scroll padding. Current location underlines, keyboard focus stays visible, and the observer prefers the visible chapter containing the focused heading. Case studies reuse usePortfolioMotion for Lenis wheel smoothing and GSAP-eased pointer chapter navigation (550–900ms according to distance). The sticky jump bar supplies its measured height plus20px as the navigation offset. Keyboard activation, hash/history restoration and reduced-motion preferences stay immediate; wheel/touch input can interrupt scrolling. Native hash links remain the fallback and modified clicks retain browser behavior.

The first reading band pairs problem and contribution in two columns. Decisions use three flat text columns: the user-supplied numbered title, a medium-weight choice, and muted rationale. Decision/Reasoning prefixes remain accessible to screen readers but are visually omitted to reduce repeated report labels. A single group rule replaces the earlier per-row table treatment. Decision headings are1.0625rem/1.5 at500 weight; text remains16px. Findings use a two-column composition: evidence and its validation note beside a semantic list of three titled finding groups. Future evaluation areas use a three-column semantic ordered list without table rules. No cards, invented metrics, artificial outcomes or stock product imagery.

The closing Key Learning label is1rem medium. Its supplied takeaway is a regular Inter pullquote at clamp(1.5rem, 2.5vw, 1.75rem)/1.35, with a16px reflection alongside it. Major reading bands are separated by3.5rem, decreasing to2.5rem on phones. At64rem and below, decision and next-step columns stack. At44rem and below, the opening pair, evidence and learning also stack in natural DOM order; body remains16px. Preserve native lists, complete text, focusable section targets and reduced-motion behavior.

A single linked next-project region cycles FarmIQ → Axon Tickets → ResGuard → FarmIQ. It uses the next project's title, concise role and authentic artwork. Its accessible navigation label is Next project; no visible eyebrow precedes the title. The arrow shifts slightly and title underlines on hover, subject to existing reduced-motion and keyboard rules. MooManage remains a plain Business gallery entry with no case-study page.

### Initiatives and Insights

Keep the existing JournalShell, initiative articles and Insights reading layout. Initiative articles use one reading column, 1 min read metadata, title, introduction, byline without divider, full-frame photo with 16px corners, narrative sections, accurate credits, sources and return links. All five initiative headers omit category/date metadata at the user's request. Do not infer dates or credit relationships. Supporting tokens remain in src/styles/portfolio.css; initiative/Insights CSS remains authoritative for reading surfaces.

## Motion and access

Reuse the existing Lenis/GSAP hook: quiet hero entrance and deliberate imagery reveals, pointer section navigation, native touch, immediate keyboard/history restoration, and observed reduced-motion preference. No custom cursor, pins or scroll locks. Default content stays readable at rest.

Keep visible focus, skip navigation, real hash destinations and native disclosure behavior. Copy email uses a live status message and failure fallback. Content uses intrinsic sizing, no fixed-height text clipping. All images have descriptive alternative text.

## Implementation

EditorialPortfolio.jsx and EditorialPortfolio.css implement the name-led homepage. ExpertiseMenu.jsx and ExpertiseMenu.css own the shared disclosure; ExpertiseHeader.jsx supplies the two expertise pages' header. BusinessExpertise.jsx composes the Business introduction and extracted SelectedWork.jsx gallery. GalleryExperience.jsx owns compact grouped experience. CaseStudy.jsx and CaseStudy.css own the shared project reading surface, with conditional narrative content in src/data/case-studies.js and supplied project records in src/data/portfolio.js. Portfolio.jsx and other dormant legacy components are not active patterns. Initiative data remains in src/data/initiatives.js.

The root homepage uses the normal portfolio document title and index/follow metadata. The /design/editorial/ alias retains preview title and noindex/nofollow metadata. Approved /work/* pages use index/follow metadata and project-specific titles. Unknown slugs retain noindex/nofollow and show a return link. On October 29, 2026, the user approved publishing the current case studies. Dormant individual Expertise outlines remain DEV-only reference material. The two overview paths now resolve to DesignShowcase and BusinessExpertise in the local implementation; both are included in generated HTML and sitemap coverage for the authorized release. Published routes now have generated HTML files and route-specific CSS. Vercel serves those files directly, with a custom 404 for unknown paths; the SPA catch-all has been removed.

## Search and sharing metadata

The October 30, 2026 SEO update preserves the approved visual layout. src/data/seo.js is authoritative for page titles, descriptions, canonical URLs, robots directives, Open Graph/Twitter tags and factual Person/WebSite/WebPage structured data. The build renders the same React components to HTML and the browser hydrates them. Styles for each route are linked in the generated head so the page is readable before JavaScript. Empty Insights is noindex until an article is published. A generated sitemap lists only published indexable pages. Unknown paths have no canonical and use a custom noindex 404. Canonical URLs retain trailing slashes; old design aliases redirect to the homepage. See docs/seo.md for owner verification and content upkeep.

## Loading states

PageLoading supplies route-shaped Suspense skeletons for the personal homepage, Business work gallery, Design gallery, case studies, initiatives and writing pages. They use the existing white ground, pale neutral placeholders and16px artwork corners. Show real destination titles and working home/back/contact links where already known. Homepage skeleton geometry follows the two-line name and supporting records; Business follows the gallery’s three/two/one-column layout, while Design and reading pages follow their own layouts. A single polite screen-reader status accompanies an aria-busy content region; decorative bars are hidden from assistive technology. A failed page module shows reload/back recovery.

LoadingImage wraps major project and initiative imagery, preserving the supplied dimensions and aspect ratio. An unobtrusive shimmer sits behind the real image until it loads and decodes. Images are visible in pre-rendered/no-JavaScript HTML; cached images are shown immediately and no full-page loader masks ready content. Pending downloads fade in over180ms; failed images stop shimmering and retain their reserved space with an Image unavailable label. Reduced-motion and keyboard rules disable loading animation. Stable root scrollbar space avoids a horizontal nudge between short skeletons and long pages. No artificial minimum delay or whole-page entrance is introduced.

## Components

### Design Expertise — November 12, 2026

DesignShowcase extends the approved gallery on the single /expertise/design/ page. It reuses the JD identity and sticky header, existing Inter/SF typography, homepage color variables, blue focus treatment and flat surfaces. Brand colors belong to the authentic artwork. No new global tokens or visual identity are introduced. The latest revision replaces the oversized text-free presentation with compact project rows and visible contribution context; there are still no child collection pages.

The main container caps at 72rem. Desktop rows pair copy on the left with a gallery capped at 42rem (672px) on the right. Each gallery keeps the identity above three separate square thumbnails. Preserve full panels using intrinsic dimensions, contain sizing and established rounded frames (16px). Brand titles are 1.125rem medium; the existing contribution paragraphs are .875rem/1.7, capped at 38ch on desktop. Project gaps are 3rem, decreasing to 2.25rem on phones; rows have no fixed height.

At 860px and below, copy moves above the gallery. From 601–860px the title and paragraph sit beside each other; at 600px and below they stack. Application thumbnails remain three across at every width, with 8px gaps on phones. The page heading uses clamp(2rem, 3vw, 2.5rem), becoming 2rem on phones, with a quiet enlargement hint. The brand anchor index is removed. Keep contribution paragraphs verbatim; responsibility credits remain screen-reader-only, without a duplicate visible role line. There are no per-image captions or View designs links. One concepts/produced-work note follows the final brand. The shared ExpertiseHeader contains Home, Expertise and Let’s talk; the current Design or Business destination carries aria-current="page" within the disclosure.

Each of the 20 image buttons opens a native full-screen dialog on a dark ink ground. Contain the image at 100% initially; zoom in half-step increments to 300%, allow scrolling at larger sizes and provide reset. Close and zoom controls have 44px targets, visible focus and accessible names. X/Escape closes the viewer, restores the trigger's focus and releases the background scroll lock; Tab and Shift+Tab loop within the viewer. Reuse skip navigation, descriptive alternatives and existing reduced-motion/keyboard rules. Artwork hover changes opacity over180ms. Route-shaped skeletons and LoadingImage preserve image space and immediate pre-rendered content. Source and responsive rules remain in src/components/design/DesignShowcase.jsx and its CSS; artwork records are in src/data/design-showcase.js and source-node provenance in docs/design-showcase-assets.json. The user approved this compact version for the live portfolio on November 12, 2026.


### Expertise navigation — November 12, 2026

The latest user-authorized refinement introduces one shared Expertise disclosure with native Design and Business links. Its quiet text trigger inherits navigation typography and has a 44px minimum target. The desktop panel uses the incumbent white surface, thin neutral border, gently curved corners (12px) and no shadow. Link targets remain at least 44px high, with a pale neutral hover surface and action-blue current-page text. Below 47.5rem, the homepage's expanded navigation keeps the two expertise links inline in two columns. The expertise pages retain their compact shared header at phone sizes.

Expose expanded/control state, retain ordinary link and Tab behavior, open/focus the first link with ArrowDown, and close/return focus with Escape. Dismiss on outside pointer or focus leaving the group; selecting an expertise link also closes the homepage phone navigation. Keep visible focus. The chevron rotates over 180ms and the panel appears over 160ms with a subtle 4px offset; both respect reduced-motion preferences. The hero's two direct links use 44px targets and the existing quiet arrow treatment.

This is an extension of the established system. Preserve all incumbent colors, fonts, factual content, gallery artwork and 16px artwork corners. No sidecar regeneration or visual-world replacement is part of this refinement. The user approved publishing this homepage/navigation arrangement after reviewing the local implementation on November 12, 2026.
