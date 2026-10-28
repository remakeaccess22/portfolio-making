import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getInitiative, initiativeHref, initiatives } from "../../data/initiatives";
import { SectionHeading } from "../portfolio/SectionHeading";
import "./Initiatives.css";

const backLinkClass = "initiative-back inline-flex min-h-11 items-center gap-2 text-sm leading-[1.5] text-action hover:underline";
const storyHeadingClass = "m-0 mb-3 text-[1.3rem] font-medium leading-[1.35] tracking-[-.02em]";

function useInitiativeMetadata(initiative) {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups = [];
    document.title = initiative ? `${initiative.name} — Jude Rafael` : "Initiative not found — Jude Rafael";
    const metadata = {
      description: initiative?.description ?? "This initiative could not be found. Explore Jude Rafael’s leadership and initiatives.",
      robots: initiative ? "index, follow" : "noindex, nofollow",
    };
    for (const [name, content] of Object.entries(metadata)) {
      let element = document.head.querySelector(`meta[name="${name}"]`);
      const existed = Boolean(element);
      const previousContent = element?.getAttribute("content");
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
      cleanups.push(() => {
        if (!existed) element.remove();
        else if (previousContent === null) element.removeAttribute("content");
        else element.setAttribute("content", previousContent);
      });
    }
    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [initiative]);
}

function visibleCreditGroups(groups, limit) {
  let remaining = limit;
  return groups.flatMap((group) => {
    const logos = (group.logos ?? []).filter((logo) => logo.name && logo.src);
    const visible = logos.slice(0, remaining);
    remaining -= visible.length;
    return visible.length ? [{ ...group, logos: visible }] : [];
  });
}

function CreditLogo({ logo }) {
  const crop = logo.crop;
  const hasCrop = crop && [crop.x, crop.y, crop.width, crop.height, crop.sourceWidth, crop.sourceHeight].every(Number.isFinite) && crop.width > 0 && crop.height > 0 && crop.sourceWidth > 0 && crop.sourceHeight > 0;
  if (!hasCrop) return <img src={logo.src} alt={logo.name} loading="lazy" style={logo.width ? { width: logo.width, maxWidth: "100%", maxHeight: "none" } : undefined} />;
  return <span className="initiative-logo-crop" style={{ width: logo.width ?? "7rem", aspectRatio: `${crop.width} / ${crop.height}` }}>
    <img src={logo.src} alt={logo.name} loading="lazy" width={crop.sourceWidth} height={crop.sourceHeight} style={{ width: `${crop.sourceWidth / crop.width * 100}%`, left: `${-crop.x / crop.width * 100}%`, top: `${-crop.y / crop.height * 100}%` }} />
  </span>;
}

export function SponsorLogos({ groups = [], compact = false, limit = Infinity, href }) {
  const total = groups.reduce((count, group) => count + (group.logos ?? []).filter((logo) => logo.name && logo.src).length, 0);
  const visibleGroups = visibleCreditGroups(groups, limit);
  if (!visibleGroups.length) return null;
  return <div className={`initiative-credits${compact ? " initiative-credits-compact" : ""}`}>
    {visibleGroups.map((group) => <div className="initiative-credit-group" key={group.label}>
      <span className="initiative-credit-label">{group.label}</span>
      <ul aria-label={group.label}>
        {group.logos.map((logo) => <li key={`${group.label}-${logo.name}`}>
          {logo.url ? <a href={logo.url} target="_blank" rel="noreferrer" aria-label={`${logo.name} — ${group.label.toLowerCase()}`}><CreditLogo logo={logo} /></a> : compact && href ? <a href={href} aria-label={`${logo.name} — read full event details`}><CreditLogo logo={logo} /></a> : <CreditLogo logo={logo} />}
        </li>)}
      </ul>
    </div>)}
    {total > limit && href && <a className="initiative-more-credits" href={href}>View all event credits <ArrowUpRight size={13} aria-hidden="true" /></a>}
  </div>;
}

export function InitiativesSection() {
  const featured = getInitiative("startup-and-technology-summit-2026");
  return <section id="leadership" className="initiatives-section page-padding pt-[clamp(3rem,5vw,4rem)]" aria-labelledby="leadership-heading">
    <SectionHeading id="leadership-heading" title="Leadership & initiatives" description="Organizing events and sharing what I’m learning." />
    <div className="leadership-layout grid grid-cols-1 items-start gap-6 md:grid-cols-[.85fr_1.25fr] md:gap-8">
      <figure className="initiative-feature m-0 min-w-0 max-md:max-w-[34rem]">
        <a className="block overflow-hidden rounded-2xl" href={initiativeHref(featured.slug)} aria-label={`Read about ${featured.name}`}><img className="block h-auto w-full" src={featured.photo.src} alt={featured.photo.alt} width={featured.photo.width} height={featured.photo.height} loading="lazy" decoding="async" /></a>
        <figcaption className="mt-[.7rem] text-[.85rem] leading-[1.7] text-muted">Startup and Technology Summit 2026<br /><a className="inline-flex min-h-11 items-center gap-[.3rem] py-[.35rem] text-action hover:underline" href={initiativeHref(featured.slug)}>Read the story <ArrowUpRight size={14} aria-hidden="true" /></a></figcaption>
      </figure>
      <div className="initiatives-list border-t border-line">{initiatives.map(initiative => <article className="initiative-entry border-b border-line" key={initiative.slug}>
        <a className="initiative-entry-link group flex items-start justify-between gap-5 py-4" href={initiativeHref(initiative.slug)}>
          <div><h3 className="m-0 text-base font-medium leading-[1.45] tracking-[-.015em] underline-offset-[.2em] group-hover:underline">{initiative.listingName ?? initiative.name}</h3><p className="initiative-entry-role mt-[.3rem] mb-0 text-[.85rem] leading-[1.6] text-muted">{initiative.listingRole ?? initiative.role}</p></div>
          <ArrowUpRight className="initiative-entry-arrow mt-[.2rem] text-muted transition-transform duration-[180ms] ease-[var(--ease-out)] group-hover:translate-x-[.12rem] group-hover:-translate-y-[.12rem] group-hover:text-ink" size={18} aria-hidden="true" />
        </a>
      </article>)}</div>
    </div>
  </section>;
}

export function InitiativePage({ slug }) {
  const initiative = getInitiative(slug);
  useInitiativeMetadata(initiative);
  if (!initiative) return <main id="main-content" className="initiative-page initiative-not-found page-padding max-w-[44rem] pt-6 pb-16">
    <a className={backLinkClass} href="/#leadership"><ArrowLeft size={15} aria-hidden="true" /> Leadership & initiatives</a>
    <h1 className="mt-8 mb-4 text-[clamp(1.75rem,3vw,2.125rem)] font-medium leading-[1.25] tracking-[-.025em]">Initiative not found.</h1>
    <p className="mb-4 leading-[1.75] text-muted">This event page could not be found.</p>
    <a className="text-link" href="/#leadership">Explore the initiatives <ArrowUpRight size={15} aria-hidden="true" /></a>
  </main>;

  const hasCredits = initiative.credits.some((group) => (group.logos ?? []).some((logo) => logo.name && logo.src));
  const wordCount = [initiative.description, ...initiative.sections.flatMap(section => section.paragraphs)].join(" ").trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));
  return <main id="main-content" className="initiative-page page-padding max-w-[44rem] pt-4 pb-12 md:pt-8 md:pb-16">
    <article aria-labelledby="initiative-title">
      <a className={backLinkClass} href="/#leadership"><ArrowLeft size={15} aria-hidden="true" /> All initiatives</a>
      <header className="initiative-page-heading mt-6">
        <p className="initiative-page-category m-0 flex flex-wrap gap-x-2 gap-y-1 text-[.8125rem] leading-[1.6] text-muted">{!initiative.minimalHeader && <><span>{initiative.category}</span>{initiative.dateLabel && <><span aria-hidden="true">·</span><span>{initiative.dateLabel}</span></>}<span aria-hidden="true">·</span></>}<span>{readingMinutes} min read</span></p>
        <h1 id="initiative-title" className="mt-3 mb-0 text-[clamp(1.75rem,3vw,2.125rem)] font-medium leading-[1.25] tracking-[-.025em] text-balance">{initiative.name}</h1>
        {initiative.subtitle && <p className="initiative-page-subtitle mt-3 mb-0 text-base leading-[1.65] text-muted">{initiative.subtitle}</p>}
        <p className="initiative-page-description mt-3 mb-0 text-base leading-[1.65] text-muted">{initiative.description}</p>
        <p className={`initiative-author mt-5 mb-0 text-sm leading-[1.6] ${initiative.minimalHeader ? "" : "border-t border-line pt-4"}`}><span className="text-muted">By </span>Jude Rafael Alayacyac</p>
      </header>
      {initiative.photo && <figure className="initiative-event-photo mt-7 mb-0"><img className="block h-auto w-full rounded-2xl" src={initiative.photo.src} alt={initiative.photo.alt} width={initiative.photo.width} height={initiative.photo.height} decoding="async" />{initiative.photo.caption && <figcaption className="mt-2 text-[.8125rem] leading-[1.65] text-muted">{initiative.photo.caption}</figcaption>}</figure>}
      <div className="initiative-story mt-9 space-y-8">
        {initiative.sections.map((section) => <section className="initiative-story-section" key={section.heading} aria-labelledby={`${initiative.slug}-${section.heading.replaceAll(" ", "-").toLowerCase()}`}>
          <h2 className={storyHeadingClass} id={`${initiative.slug}-${section.heading.replaceAll(" ", "-").toLowerCase()}`}>{section.heading}</h2>
          {(section.label || section.role) && <p className="initiative-story-label mt-0 mb-3 text-sm leading-[1.6]">{section.label && <span className="text-muted">{section.label}{section.role && " · "}</span>}{section.role && <strong className="font-semibold">{section.role}</strong>}</p>}
          <div className="space-y-4 text-base leading-[1.8] [text-wrap:pretty] md:text-[1.0625rem]">{section.paragraphs.map((paragraph) => <p className="m-0" key={paragraph}>{paragraph}</p>)}</div>
        </section>)}
      </div>
      {(hasCredits || initiative.creditArtwork) && <section className="initiative-page-credits mt-9 border-t border-line pt-6" aria-labelledby="initiative-credits-heading"><h2 className={storyHeadingClass} id="initiative-credits-heading">Event credits</h2><SponsorLogos groups={initiative.credits} />{initiative.creditArtwork && <figure className="initiative-credit-artwork mt-6 mb-0"><img className="block h-auto w-full rounded-2xl" src={initiative.creditArtwork.src} alt={initiative.creditArtwork.alt} width={initiative.creditArtwork.width} height={initiative.creditArtwork.height} loading="lazy" decoding="async" /><figcaption className="mt-2 flex flex-wrap items-start justify-between gap-x-6 gap-y-1 text-[.8125rem] leading-[1.65] text-muted">{initiative.creditArtwork.caption && <span>{initiative.creditArtwork.caption}</span>}<a className="inline-flex min-h-11 items-center gap-1 text-action hover:underline" href={initiative.creditArtwork.url ?? initiative.creditArtwork.src} target="_blank" rel="noreferrer">View full event artwork <ArrowUpRight size={13} aria-hidden="true" /></a></figcaption></figure>}</section>}
      {initiative.sources.length > 0 && <section className="initiative-sources mt-9 border-t border-line pt-6" aria-labelledby="initiative-sources-heading"><h2 className={storyHeadingClass} id="initiative-sources-heading">Further reading</h2><ul className="m-0 list-none p-0">{initiative.sources.map((source) => <li key={source.url}><a className="inline-flex min-h-11 items-center gap-2 py-2 text-sm leading-[1.6] text-action hover:underline" href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><ArrowUpRight className="shrink-0" size={13} aria-hidden="true" /></a></li>)}</ul></section>}
      <nav aria-label="Article navigation" className="initiative-page-end mt-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-4"><a className={backLinkClass} href="/#leadership"><ArrowLeft size={15} aria-hidden="true" /> All initiatives</a><a className="inline-flex min-h-11 items-center gap-1 text-sm text-action hover:underline" href="/#contact">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
    </article>
  </main>;
}
