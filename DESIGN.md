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

Selected work opens in a two-column introduction with a smaller identity/description beside the heading. FarmIQ, Axon Tickets and ResGuard form three equal, aligned gallery columns. CSS subgrid shares image, heading, description, and contribution tracks so contribution triggers align despite different text lengths. Tablet uses two columns; phone uses natural stacked flow. Preserve the entire supplied 16:9 artwork with object-fit contain and 16px corners. MooManage remains a text-only row.

Keep exact project descriptions and contributions. My contribution is a native details disclosure, initially collapsed. Full-size artwork links retain useful accessible names. No project CTAs or website selectors are added.

Ventures uses a narrow label column and wider ruled records. Preserve names, founder titles, dates, descriptions, and ordering; Pacepoint remains last. No venture links. A top line appears above the first company, Axon Entertainment; the Ventures label itself has no top line.

Professional experience follows Ventures. GalleryExperience presents two initially collapsed native groups: Work & internship and Organizations. Employers and role counts stay visible in summaries. Expanding reveals every full organization name, role, location, period and supplied description, with semantic emphasis for Lupang Hinirang. The content group has a top line above Work & internship; the Professional experience heading has no top line.

Leadership retains the authentic Summit photo and five event links in the supplied order. Neither its section heading nor event-list container has a top line; internal row separators remain. Initiative detail pages preserve all supplied photographs, narrative and credit distinctions.

About pairs biography and education. Contact is a shallow white section with email, copy feedback, Instagram and LinkedIn. The quiet Writing soon link remains while there are no published articles. Do not restore Process or GitHub promotion.

## Supporting reading pages

Keep the existing JournalShell, initiative articles and Insights reading layout. Initiative articles use one reading column, 1 min read metadata, title, introduction, byline without divider, full-frame photo with 16px corners, narrative sections, accurate credits, sources and return links. All five initiative headers omit category/date metadata at the user's request. Do not infer dates or credit relationships. Supporting tokens remain in src/styles/portfolio.css; initiative/Insights CSS remains authoritative for reading surfaces.

## Motion and access

Reuse the existing Lenis/GSAP hook: quiet hero entrance and deliberate imagery reveals, pointer section navigation, native touch, immediate keyboard/history restoration, and observed reduced-motion preference. No custom cursor, pins or scroll locks. Default content stays readable at rest.

Keep visible focus, skip navigation, real hash destinations and native disclosure behavior. Copy email uses a live status message and failure fallback. Content uses intrinsic sizing, no fixed-height text clipping. All images have descriptive alternative text.

## Implementation

EditorialPortfolio.jsx and EditorialPortfolio.css now implement the main homepage. GalleryExperience.jsx owns compact grouped experience. Portfolio.jsx and other dormant legacy components are not active patterns. Data remains in src/data/portfolio.js and initiatives.js.

The root homepage uses the normal portfolio document title and index/follow metadata. The /design/editorial/ alias retains preview title and noindex/nofollow metadata. Vercel's SPA fallback supports direct initiative and Insights URLs.
