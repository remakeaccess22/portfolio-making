import { caseStudies, caseStudyOrder } from "./case-studies";
import { initiatives, initiativeHref } from "./initiatives";
import { insights } from "./insights";
import { profile } from "./portfolio";

export const siteUrl = "https://judealayacyac.vercel.app";
const defaultImage = { src: "/images/brand/jd-logo.png", width: 852, height: 852, alt: "Jude Rafael Alayacyac’s JD monogram" };
const caseDescriptions = {
  farmiq: "How Jude Rafael Alayacyac shaped FarmIQ’s product strategy, requirements, and UX direction using feedback from five farms to simplify livestock recording.",
  "axon-tickets": "Jude Rafael Alayacyac’s research and UX design for Axon Tickets, informed by real events to improve registration, participant records, and check-in.",
  resguard: "How Jude Rafael Alayacyac defined ResGuard’s product strategy, research, requirements, and development priorities for receipt and expense management.",
};
const caseTitles = {
  farmiq: "FarmIQ Case Study — Product Strategy & UX",
  "axon-tickets": "Axon Tickets Case Study — Product Research & Design",
  resguard: "ResGuard Case Study — Product Strategy",
};

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

function excerpt(text, limit = 165) {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).replace(/\s+\S*$/, "")}…`;
}

function page(path, title, description, options = {}) {
  return {
    path,
    title,
    description,
    canonical: `${siteUrl}${path}`,
    image: defaultImage,
    exists: true,
    noindex: false,
    type: "website",
    ...options,
  };
}

export function getPageMetadata(pathname) {
  const path = normalizePath(pathname);
  if (path === "/") return page("/", `${profile.name} — Founder & Entrepreneur`, "Explore Jude Rafael Alayacyac’s work in product strategy, UX, and entrepreneurship, including FarmIQ, Axon Tickets, and ResGuard. Based in Davao City, Philippines.");
  if (path === "/design" || path === "/design/editorial") return page("/", `Design preview — ${profile.name}`, "Local portfolio design preview.", { noindex: true });
  for (const slug of caseStudyOrder) {
    if (path !== `/work/${slug}`) continue;
    const study = caseStudies[slug];
    return page(`/work/${slug}/`, `${caseTitles[slug]} | ${profile.name}`, caseDescriptions[slug], { image: { ...study.cover, alt: `${study.title} — product case study` }, study });
  }
  const initiative = initiatives.find(item => path === normalizePath(initiativeHref(item.slug)));
  if (initiative) return page(initiativeHref(initiative.slug), `${initiative.name} — ${profile.name}`, excerpt(initiative.description), { image: initiative.photo ?? defaultImage, initiative });
  if (path === "/insights") return page("/insights/", `Insights — ${profile.name}`, "First-hand perspectives on entrepreneurship, product building, design, technology, and agriculture from Jude Rafael Alayacyac.", { noindex: insights.length === 0 });
  const article = insights.find(item => path === normalizePath(item.href));
  if (article) return page(article.href, `${article.title} — ${profile.name}`, article.excerpt, { article, type: "article" });
  return page("/404/", `Page not found — ${profile.name}`, "This page could not be found. Explore Jude Rafael Alayacyac’s portfolio, projects, and initiatives.", { exists: false, noindex: true, canonical: null });
}

export function getPublishedPages() {
  return [getPageMetadata("/"), ...caseStudyOrder.map(slug => getPageMetadata(`/work/${slug}/`)), ...initiatives.map(item => getPageMetadata(initiativeHref(item.slug))), getPageMetadata("/insights/"), ...insights.map(item => getPageMetadata(item.href))];
}

export function getStructuredData(metadata) {
  if (metadata.noindex) return null;
  const person = {
    "@type": "Person", "@id": `${siteUrl}/#person`, name: profile.name, url: `${siteUrl}/`,
    jobTitle: "Founder & Entrepreneur", description: "Founder and entrepreneur working across product strategy, UX direction, agriculture, events, publishing, and design.",
    sameAs: [profile.linkedin, profile.instagram],
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.institution },
  };
  const website = { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: profile.name, publisher: { "@id": person["@id"] } };
  const webpage = { "@type": "WebPage", "@id": metadata.canonical, url: metadata.canonical, name: metadata.title, description: metadata.description, isPartOf: { "@id": website["@id"] }, about: { "@id": person["@id"] } };
  const graph = [person, website, webpage];
  if (metadata.article) {
    const article = metadata.article;
    graph.push({ "@type": "BlogPosting", headline: article.title, description: article.excerpt, datePublished: article.date, author: { "@id": person["@id"] }, mainEntityOfPage: { "@id": metadata.canonical } });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function getHeadTags(metadata) {
  const image = new URL(metadata.image.src, siteUrl).href;
  const structuredData = getStructuredData(metadata);
  return [
    { tag: "title", text: metadata.title },
    { tag: "meta", name: "description", content: metadata.description },
    { tag: "meta", name: "robots", content: metadata.noindex ? "noindex, follow" : "index, follow, max-image-preview:large" },
    ...(metadata.canonical ? [{ tag: "link", rel: "canonical", href: metadata.canonical }] : []),
    { tag: "meta", property: "og:type", content: metadata.type },
    { tag: "meta", property: "og:site_name", content: profile.name },
    { tag: "meta", property: "og:locale", content: "en_US" },
    { tag: "meta", property: "og:title", content: metadata.title },
    { tag: "meta", property: "og:description", content: metadata.description },
    ...(metadata.canonical ? [{ tag: "meta", property: "og:url", content: metadata.canonical }] : []),
    { tag: "meta", property: "og:image", content: image },
    { tag: "meta", property: "og:image:alt", content: metadata.image.alt },
    { tag: "meta", property: "og:image:width", content: String(metadata.image.width) },
    { tag: "meta", property: "og:image:height", content: String(metadata.image.height) },
    { tag: "meta", name: "twitter:card", content: metadata.image.width > metadata.image.height ? "summary_large_image" : "summary" },
    { tag: "meta", name: "twitter:title", content: metadata.title },
    { tag: "meta", name: "twitter:description", content: metadata.description },
    { tag: "meta", name: "twitter:image", content: image },
    { tag: "meta", name: "twitter:image:alt", content: metadata.image.alt },
    ...(structuredData ? [{ tag: "script", type: "application/ld+json", text: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }] : []),
  ];
}
