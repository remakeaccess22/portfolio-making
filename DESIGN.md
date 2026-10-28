---
name: Jude Rafael Alayacyac Portfolio
description: Clear, compact presentation of a founder's work and contribution.
colors:
  ink: "#242529"
  muted: "#62646c"
  paper: "#fdfdfd"
  surface: "#f5f5f7"
  line: "#e3e4e8"
  red: "#a53240"
  action: "#0758b5"
  focus: "#0758b5"
typography:
  display:
    fontFamily: "InterVariable, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.15vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.025em"
  headline:
    fontFamily: "InterVariable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.85rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-.02em"
  title:
    fontFamily: "InterVariable, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-.02em"
  body:
    fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, InterVariable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, InterVariable, system-ui, sans-serif"
    fontSize: ".875rem"
    fontWeight: 400
    lineHeight: 1.5
  article-body:
    fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, InterVariable, system-ui, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 400
    lineHeight: 1.85
rounded:
  media: ".75rem"
  project-media: "1rem"
  control: ".5rem"
  focus: ".2rem"
spacing:
  small: ".5rem"
  row: "1rem"
  inset: "1.25rem"
  group: "1.5rem"
  column: "2rem"
  mobile-column: "2.25rem"
  wide: "2.5rem"
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(3rem, 5vw, 4rem)"
components:
  text-link:
    textColor: "{colors.action}"
    typography: "{typography.label}"
  copy-email:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    size: "2.75rem"
  copy-email-hover:
    backgroundColor: "#ebecf0"
    textColor: "{colors.ink}"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
  project-media:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.project-media}"
    width: "100%"
  contribution:
    textColor: "{colors.ink}"
    padding: ".55rem 0"
  initiative-entry:
    textColor: "{colors.ink}"
    padding: "1rem 0"
---

# Design System: Jude Rafael Alayacyac Portfolio

## Overview

**Creative North Star: "Work first"**

A light, compact portfolio lets authentic work carry the visual weight. Inter Variable headings, SF Pro Display supporting text, precise gray rules, restrained red identity details, and blue actions make the page clear without turning the interface into a spectacle. The character is professional, simple, and direct, with the user's approved Apple influence expressed through restraint and readable controls.

The homepage now implements the system with React and Tailwind CSS v4 utilities. `src/index.css` maps palette/font variables into Tailwind and sets `md` to 761px; the existing `lg` switch is 1024px. `Portfolio.jsx`, `SectionHeading.jsx`, and `Initiatives.jsx` own the homepage and initiative-article utility composition. Font faces and global browser/accessibility behavior remain in `portfolio.css`; Insights page styles and authentic sponsor-logo crop geometry stay in the components layer.

This system is extracted from the completed October 26, 2026 build. The approved homepage composition lives in `.impeccable/surfaces/portfolio.md`; the durable rules here also apply to initiative and article reading pages. Factual founder identity, accessible browsing, authentic imagery, and accurate attribution constrain future additions.

**Key Characteristics:**

- Light reading surface with charcoal text and quiet gray structure.
- Medium-weight Inter Variable headings paired with SF Pro Display supporting text, matching the inspected Atlas reference.
- Authentic media in gently rounded frames; flat text controls and ruled rows.
- Content visible at rest, native cursor, and immediate keyboard and reduced-motion fallbacks.

## Colors

The palette is nearly neutral, with a restrained identity red and distinct blue actions. Frontmatter preserves the source custom-property names; values there are normative. Sidecar tonal ramps are synthesized panel previews, not additional shipping colors.

### Primary

- **Identity red** (`red`): small punctuation in the site name. It is not the founder role, heading, or body color.
- **Action blue** (`action`): the medium-weight Founder & Entrepreneur role, links that leave a content block, contact actions, and return navigation. `focus` uses the same blue for a visible keyboard outline.

### Neutral

- **Charcoal** (`ink`): headings, primary copy, and selected controls.
- **Reading gray** (`muted`): roles, dates, captions, secondary copy, and resting navigation.
- **Near-white paper** (`paper`): the page and sticky navigation surface.
- **Soft gray surface** (`surface`): media backing, code blocks, and the copy-email control.
- **Quiet rule** (`line`): image borders and separators between records, facts, and reading sections.

**The Accent Has a Job Rule.** Blue carries the founder role and actions; the small name punctuation retains red. Authentic screenshots and event artwork retain their own colors.

## Typography

**Display Font:** InterVariable, self-hosted, with system-ui and sans-serif fallbacks.
**Body Font:** SF Pro Display through installed local faces or Apple’s native system font, with self-hosted InterVariable on other systems.

**Character:** The inspected Atlas page uses Inter Variable for its headings and SF Pro Display for its supporting text. Inter 4.1 variable WOFF2 faces supply upright and true italic weights 100–900 with automatic optical sizing. SF Pro Display uses locally installed regular (400), medium (500), semibold (600), and bold (700) faces and matching italics; Apple font binaries are not bundled. If those faces or Apple’s native system font are unavailable, InterVariable provides the supporting-text fallback. The active interface uses regular copy and medium headings; there is no separate serif or italic display treatment. Font swapping is enabled and synthetic weights are disabled.

### Hierarchy

- **Display:** the personal name uses the frontmatter display role. At the phone breakpoint it becomes `clamp(2rem, 8.8vw, 2.75rem)` with a `12ch` maximum width.
- **Headline:** section headings use the frontmatter headline role. Selected work deliberately has a smaller heading (`1.25rem`, `-.02em`) to keep the introduction compact.
- **Title:** project names use the title role. Venture names are slightly smaller (`1.05rem`, line-height `1.5`); initiative list titles use `1rem` with line-height `1.45`.
- **Body:** the frontmatter body role is the root default. Project descriptions use `.96rem` with line-height `1.65`; About and Contact use `.96rem` with line-height `1.7`. The introduction uses `1.08rem` with line-height `1.65` and a `49rem` maximum width, reducing to `1rem` on phones.
- **Label:** text links use the frontmatter label role. Screenshot captions and footer text use `.8125rem`; roles and other metadata generally use `.85rem`–`.9rem`, in sentence case.
- **Reading:** initiative introductions use `1rem` / `1.65`, with narrative paragraphs at `1.0625rem` / `1.8` on desktop and `1rem` / `1.8` on phones. Insights prose uses the article-body role in a `43rem` column. Initiative detail titles use `clamp(1.75rem, 3vw, 2.125rem)`; archive titles use `clamp(2.25rem, 5vw, 3rem)`.

**The Heading First Rule.** Name the person, project, or initiative before showing supporting role labels in homepage lists. Initiative articles follow the user’s Bryl reference: compact category/event-date/reading-time metadata above the title, then the introduction and author line.

## Layout

The shared centered container is capped at `73rem`, with the fluid gutter in frontmatter. Desktop navigation occupies `4rem`; at `760px` and below it becomes `3.75rem` with an expandable two-column link menu. The homepage introduction uses top spacing `clamp(2rem, 3.3vw, 3rem)` and bottom spacing `1.65rem`, reducing to `2rem` / `1.5rem` on phones.

Three illustrated projects use equal columns and a `1.75rem` gap above `1023px`, two columns from `761px` through `1023px`, then one column with the mobile-column gap at `760px`. Media uses the supplied `16 / 9` aspect ratio; `object-fit: contain` preserves the entire artwork. Illustrated cards share content-sized image, title/role, description, and contribution tracks within each desktop/tablet row. Dropdown triggers therefore align even when descriptions wrap differently or another dropdown is open; no fixed text height or clipping is used. Cards stack naturally on phones. MooManage follows in a compact ruled text row, with no image placeholder; its title/role and description stack on phones. Venture rows use `minmax(0,1fr) auto`, pairing company/role/short description with a date range, while Leadership pairs a real photograph and the initiative list at `.85fr 1.25fr`. About and Contact use `1.2fr 1fr` with an `8%` gap. These layouts stack at the same phone breakpoint. Rules and predictable spacing organize content without enclosing every row in a card.

Supporting pages retain the shared gutter: initiative pages cap at `44rem` including gutters (624px of article content on desktop), the Insights archive at `62rem`, Insights article headings at `48rem`, and Insights prose at `43rem`. Initiative stories use one reading column with metadata, title, lead, author, optional real photograph, sequential narrative sections, accurate credits, sources, and return navigation. The former split-column story and facts grid are removed; dates remain in the header and venues/roles remain in the narrative. A further `440px` breakpoint adjusts Insights topic-guide columns. The recorded dimensions are implementation rules, not a claim that every width has been tested.

## Elevation & Depth

The active interface is flat and has no box-shadow vocabulary. Depth comes from the near-white page, soft-gray media/control backing, thin borders, and real imagery. The sticky header uses a solid paper surface with a bottom rule; it does not rely on blur or a floating shadow. Shadows inside authentic screenshots remain part of those source images.

**The Flat Surface Rule.** Use rules and tonal backing to organize records; do not add decorative elevation to the active controls or lists.

## Shapes

Selected Work frames, the featured Summit photograph, initiative article photographs, and event artwork use 16px corners, including when keyboard-focused. Other legacy media retain the media radius (12px). All image frames clip overflow. Project artwork uses a one-pixel inset pure-black outline at 10% opacity, avoiding a pale fringe around its curves. The copy control uses the control radius; the remaining content actions are flat links. Other links, selectors, and disclosure rows remain flat. Borders are one pixel, using the line token. The keyboard outline uses the focus radius, a `.125rem` stroke, and `.25rem` offset.

## Components

### Buttons and links

Text actions use action blue with an inline SVG arrow, a minimum height of `2.75rem`, and underline on hover. Arrow motion is slight (`.1rem` diagonally); there is no large primary call-to-action panel. The square copy-email control switches its icon and accessible label after a successful copy; a live status region confirms success or gives a fallback. Buttons have a restrained active scale (`.98`).

### Navigation

The sticky header pairs the compact name with Work, Ventures, Experience, Leadership, About, and Contact. Navigation text becomes ink on hover/current section and gains a thin underline; Contact stays action blue. The phone menu has an accessible expanded state, closes after selection, and closes on Escape while restoring focus to its trigger. Links keep real hash destinations. Section navigation accounts for the closed header plus `20px`, updates history, and moves focus to the destination heading. A skip link appears on focus.

### Project media and contribution

User-supplied FarmIQ, Axon Tickets, and ResGuard artwork links to each full-size image, followed by its project title, role, exact user-supplied description, and a native My contribution disclosure, collapsed by default, with the supplied paragraph available on click or keyboard activation. MooManage has only its title, UI/UX Designer role, and supplied description. No website-view selectors, old capture captions, project CTAs appear in Selected Work. Artwork is encoded as lossless WebP at the original 3840×2160 dimensions. Attribution remains specific to Jude's supplied role.

### Ruled records and reading pages

Venture rows show company name, supplied founder title, a concise venture description, and date range, without an external link or arrow. Ongoing roles sort by descending start year; preserve input order for same-year ties and place Pacepoint last. Dates sit to the right on desktop and after the description on phones. Restore the subtitle Businesses I’m building with others. Initiative entries link the whole title/role row and feature the authentic Summit/Startup Spotlight photograph. The list order is Summit, Run for Love, Architecting Scale, Mindanao Dairy Congress, UMSDC Project Showcase; homepage roles are the user’s concise labels, while detailed organizing and marketing responsibilities remain in the stories. Complete event facts, sourced photographs, artwork, credit groups, and references live on detail pages. Organizer, partner, sponsor, and institutional relationships remain separately labeled. Article lists, facts, and prose use the same rules and text hierarchy; filters appear only when published content warrants them. No input field or chip system is currently implemented.

### Motion and access

The native cursor is the active behavior. `LabeledCursor.jsx` and its styles are dormant legacy modules, not an enabled option. Lenis smooths pointer wheel scrolling with `lerp: .12` and shares GSAP's ticker; touch stays native. GSAP uses `power3.out` for the brief name entrance (`.55s`), supporting text (`.35s`), and marked off-screen image reveals (`.55s`); rows and ordinary body copy remain still. CSS hover effects use `180ms` with the source ease-out curve. Pointer section navigation uses `power2.inOut` for `.55s`–`.9s` depending on distance and can be interrupted by wheel, touch, or pointer input.

Keyboard navigation destroys Lenis, reverts presentation effects, and disables CSS transitions/animations. Reduced-motion preferences follow the same immediate native path and are observed for changes. Pointer input can resume motion without replaying the name entrance. Hash/history restoration is immediate; there are no pinned sections, scroll locks, global anchor interception, or forced touch inertia. Browser checks and the source-only reduced-motion limitation are recorded in `.impeccable/review/verification.md`.

## Do's and Don'ts

### Do:

- **Do** use authentic imagery with useful alternative text, dated capture captions, and recorded provenance.
- **Do** preserve actual contribution and credit distinctions when adding content.
- **Do** place headings before their supporting metadata and keep body text visible at rest.
- **Do** keep visible keyboard focus, accessible control names, native touch behavior, and reduced-motion fallbacks.
- **Do** use flat ruled rows and rounded media frames before adding new surface treatments.

### Don't:

- **Don't** replace the active Inter/SF hierarchy with oversized editorial mastheads or serif italic display accents.
- **Don't** turn real source artwork into a generic brand palette or substitute generated product screens for evidence.
- **Don't** fabricate metrics, testimonials, published articles, mobile screens, or credit relationships.
- **Don't** treat dormant cursor, conceptual-visual, or Insights-preview modules as active component patterns.
- **Don't** add motion that hides ordinary copy at rest or overrides keyboard, touch, or reduced-motion access.

Not canonized: dormant legacy styles/modules and the unused darker-red declaration are not rules for future surfaces. No remaining reviewed fix was reported; unavailable automated detector output and source-only reduced-motion review are verification limits, not design tokens.


### Professional experience

Professional experience sits between Ventures and Leadership, with an Experience navigation link. Two groups distinguish Work & internship from Organizations. Group headings are H3, organization names H4, then role, location, and concise contribution text; a date range trails on desktop and follows the description on phones. Same-year roles show one year. The most recent ending year leads each group. No employment type or exact month is inferred.

The React component uses Tailwind and the shared SectionHeading. Group labels occupy a 10rem desktop column with a 2rem gap; rows use minmax(0,1fr) auto. At 760px and below, labels and rows stack. Body text is .925rem with 1.65 line-height and a 70ch maximum; there are no fixed text heights or collapsed achievements. Supplied company names, periods, and contributions remain visible at rest. The narrow/desktop checks and captures are recorded in `.impeccable/review/professional-experience.md`.

Experience locations share the role line on desktop, separated by a quiet dot, and use a separate line on phones to keep city/country names together. Full organization names wrap naturally; the user’s italic Lupang Hinirang title uses semantic emphasis and the existing italic font face. Locations and updated achievements are sourced in design/content-sources.md.


### Supplied JD identity

The header uses the user’s original JD logo at 44px square as a logo-only link. The visible name and punctuation are removed at the user’s request. SiteIdentity.jsx shares this markup between the homepage and JournalShell. The mark’s alternative text, Jude Rafael, provides the link’s accessible name. The original 852×852 PNG is served unchanged at /images/brand/jd-logo.png and supplies the favicon and touch icon. The homepage Leadership image caption now contains only the Summit name and story link; its extra Startup Spotlight/FarmIQ presentation line is removed.

The Summit article uses minimalHeader to retain reading time while hiding its category/date line and byline divider. Its photo caption omits the date. Story headings precede semibold role labels and first-person narrative. The other initiative headers retain their existing metadata. Summit credits use the supplied full DOST and RSTW PNGs, with natural aspect ratios and widths of 8rem and 14rem; cropped credits for other events remain unchanged.

Run for Love also uses minimalHeader, with supplied hero photography, bold Marketing Head/Event Organizer labels, and eight authentic sponsor/partner PNGs in a wrapping logo list. Its former full sponsor-board display is replaced by the supplied marks; the original acknowledgement source remains linked.

Architecting Scale also uses minimalHeader, with the supplied Marketing Lead/Event Organizer sections and the exact Architecting Scale photo caption. Its four user-supplied partner PNGs replace all cropped marks and the standalone Pacepoint organizer mark in the credits. The original event photograph and source link remain intact.

Mindanao Dairy Congress also uses minimalHeader, with the supplied two role sections and full-frame event photography. The HEIC source is decoded to a native-resolution JPEG for browser compatibility; the photo is displayed without cropping at its original 4:3 aspect ratio.

UMSDC Project Showcase now also uses minimalHeader, the supplied two founder/speaking and advocacy sections, and its authentic full-frame event photo. No date is added where none was supplied. All five current initiative pages use the concise reading-time-only header and divider-free byline.
