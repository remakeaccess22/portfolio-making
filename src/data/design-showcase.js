const figmaFile = "https://www.figma.com/design/RowquSDc4TqmvLn1bUPWqY/Personal-Projects";

function collection(slug, title, role, discipline, description, node, captions) {
  const source = `/images/design/${slug}`;
  return {
    slug, title, role, discipline, description,
    href: `/expertise/design/#${slug}`,
    figma: `${figmaFile}?node-id=${node}`,
    preview: { src: `${source}-board-1400.webp`, srcSet: `${source}-board-700.webp 700w, ${source}-board-1400.webp 1400w`, width: 1400, height: slug === "run-for-love" ? 854 : 853, alt: `${title} identity and three design applications` },
    identity: { src: `${source}-0.webp`, width: 2400, height: 647, alt: `${title} visual identity` },
    applications: captions.map((caption, index) => ({ src: `${source}-${index + 1}.webp`, width: 1080, height: 1080, caption, alt: `${title} — ${caption.toLowerCase()}` })),
  };
}

export const designCollections = [
  collection("run-for-love", "Run for Love", "Creative Direction", "Event identity & campaigns", "I led the creative direction for Run for Love 2026, bringing a consistent visual presence to event materials, race merchandise, and promotional campaigns.", "154-16", ["Race apparel & bibs", "Finisher’s medal", "Campaign poster"]),
  collection("axon-entertainment", "Axon Entertainment", "Brand Direction & Design", "Brand identity & digital design", "I led and designed Axon Entertainment’s brand identity, extending its purple visual language across digital touchpoints, merchandise, and the Axon Tickets website.", "155-653", ["App icon mockup", "Merchandise mockup", "Axon Tickets website"]),
  collection("made-lucid-studio", "Made Lucid Studio", "Brand Direction & Design", "Brand identity & art direction", "I led and designed Made Lucid Studio’s visual identity, applying its typography, symbol, and color palette across packaging, merchandise, and campaign imagery.", "155-700", ["Packaging mockup", "Merchandise mockup", "Campaign design"]),
  collection("farmiq", "FarmIQ", "Brand Direction & Design", "Brand identity & product applications", "I led and designed FarmIQ’s visual identity, carrying its agricultural character into packaging concepts, an app icon, and campaign materials.", "155-762", ["Livestock packaging concept", "App icon mockup", "Campaign design"]),
  collection("nexus-publications", "Nexus Publications", "Brand Direction & Design", "Brand identity & editorial design", "I led and designed Nexus Publications’ visual identity, connecting its journal family through publication covers, website presentation, and campaign materials.", "193-929", ["Journal cover designs", "Publication website", "Campaign design"]),
];

export const designShowcaseNote = "This collection includes concept mockups and produced work.";
