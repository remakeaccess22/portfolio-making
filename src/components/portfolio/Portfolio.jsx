import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Copy, Menu, X } from "lucide-react";
import { profile, projects, ventures } from "../../data/portfolio";
import { insights } from "../../data/insights";
import { InitiativesSection } from "../initiatives/Initiatives";
import { usePortfolioMotion } from "./usePortfolioMotion";
import { SectionHeading } from "./SectionHeading";
import { ExperienceSection } from "./ExperienceSection";
import { SiteIdentity } from "./SiteIdentity";

const navigation = [["work", "Work"], ["ventures", "Ventures"], ["experience", "Experience"], ["leadership", "Leadership"], ["about", "About"]];
const visualProjects = projects.filter(project => project.image);
const textProjects = projects.filter(project => !project.image);
const navLinkClass = "relative inline-flex min-h-11 items-center gap-[.3rem] after:absolute after:inset-x-0 after:bottom-[.35rem] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[180ms] after:ease-[var(--ease-out)] after:content-[''] hover:after:scale-x-100 aria-[current=location]:after:scale-x-100 max-md:after:hidden";
const aboutHeadingClass = "m-0 mb-4 text-[clamp(1.5rem,2.4vw,1.85rem)] font-medium leading-[1.2] tracking-[-.02em]";
const socialLinkClass = "inline-flex min-h-11 items-center gap-[.4rem] text-[.9rem] text-action hover:underline";

function Project({ project, index }) {
  const image = project.image;
  return <article className={image ? "selected-project min-w-0 md:row-span-4 md:grid md:grid-rows-subgrid md:items-start md:max-lg:[&:nth-child(n+3)]:mt-9" : "selected-project selected-project--text grid min-w-0 grid-cols-1 items-start gap-3 md:grid-cols-[1fr_2fr] md:gap-6"} aria-labelledby={`project-${project.id}`}>
    {image && <a className="project-image flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-surface outline outline-1 -outline-offset-1 outline-black/10 focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus" href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.title} project image`} data-reveal>
      <img className="block h-full w-full object-contain" src={image.src} alt={image.alt} width={image.width} height={image.height} loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" />
    </a>}
    <header className={`project-heading ${image ? "mt-[.85rem]" : "m-0"}`}><h3 id={`project-${project.id}`} className="m-0 text-[1.15rem] font-medium leading-[1.4] tracking-[-.02em]">{project.title}</h3><p className="project-role m-0 mt-[.2rem] text-[.9rem] leading-[1.5] text-muted">{project.role}</p></header>
    <p className={`project-description text-[.96rem] leading-[1.65] text-ink ${image ? "mt-[.8rem] mb-[.65rem] md:mt-4" : "m-0"}`}>{project.description}</p>
    {project.contribution && <details className="project-contribution group mt-4 border-t border-line md:mt-[.35rem]"><summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-[.55rem] text-sm leading-[1.5] [&::-webkit-details-marker]:hidden">My contribution <ChevronDown className="text-muted transition-transform duration-[180ms] ease-[var(--ease-out)] group-open:rotate-180" size={16} aria-hidden="true" /></summary><p className="mt-[.2rem] mb-4 text-[.925rem] leading-[1.7] text-muted">{project.contribution}</p></details>}
  </article>;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const root = useRef(null);
  const menuButton = useRef(null);
  const copyTimer = useRef(null);
  const { navigateTo } = usePortfolioMotion(root);

  useEffect(() => {
    const onKey = event => {
      if (event.key === "Escape" && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    let frame;
    const update = () => {
      frame = undefined;
      let current = "";
      for (const [id] of navigation) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= window.innerHeight * .3) current = id;
      }
      setActiveSection(current);
    };
    const schedule = () => { if (frame === undefined) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  function followSection(event, id) {
    if (event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setMenuOpen(false);
    navigateTo(id);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true); setCopyFailed(false);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2600);
    } catch { setCopyFailed(true); }
  }

  return <div ref={root} id="top">
    <a className="skip-to-content" href="#main" onClick={event => followSection(event, "main")}>Skip to content</a>
    <header className="site-header sticky top-0 z-40 border-b border-line bg-paper" data-site-header>
      <div className="header-inner page-padding flex h-15 items-center justify-between gap-8 md:h-16" data-header-bar>
        <a className="site-name inline-flex min-h-11 items-center gap-2 text-[1.05rem] font-medium tracking-[-.025em] whitespace-nowrap" href="#top" onClick={event => followSection(event, "top")}><SiteIdentity /></a>
        <button ref={menuButton} className="menu-button -mr-[.4rem] flex size-11 items-center justify-center border-0 bg-transparent p-0 md:hidden" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button>
        <nav id="main-navigation" className={`main-navigation absolute inset-x-0 top-full grid-cols-2 items-center gap-x-4 gap-y-1 border-b border-line bg-paper px-5 pt-3 pb-4 text-sm leading-[1.6] text-muted md:static md:flex md:gap-[1.6rem] md:border-0 md:p-0 ${menuOpen ? "is-open grid" : "hidden"}`} aria-label="Main navigation">
          {navigation.map(([id, label]) => <a className={`${navLinkClass} hover:text-ink aria-[current=location]:text-ink max-md:aria-[current=location]:font-medium`} key={id} href={`#${id}`} onClick={event => followSection(event, id)} aria-current={activeSection === id ? "location" : undefined}>{label}</a>)}
          <a className={`nav-contact ${navLinkClass} text-action`} href="#contact" onClick={event => followSection(event, "contact")}>Contact <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
    <main id="main">
      <section className="hero page-padding pt-8 pb-6 md:pt-[clamp(2rem,3.3vw,3rem)] md:pb-[1.65rem]" aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="hero-line m-0 max-w-[12ch] overflow-hidden pb-[.1em] text-[clamp(2rem,8.8vw,2.75rem)] font-medium leading-[1.1] tracking-[-.025em] md:max-w-none md:text-[clamp(2.25rem,4.15vw,3.5rem)]" data-hero-line><span className="block">{profile.name}</span></h1>
        <p className="hero-role mt-[.65rem] mb-0 text-[.85rem] font-medium text-action md:text-[.9rem]" data-hero-meta>Founder & Entrepreneur</p>
        <p className="hero-introduction mt-[.85rem] mb-0 max-w-[49rem] text-base leading-[1.65] text-muted md:text-[1.08rem]" data-hero-meta>Building ventures across agriculture, entertainment, publishing, and design. Working on the products, brands, and relationships that help them take shape.</p>
      </section>

      <section id="work" className="work-section page-padding" aria-labelledby="work-heading">
        <SectionHeading id="work-heading" title="Selected work" compact />
        <div className="selected-projects grid grid-cols-1 gap-x-7 gap-y-9 md:grid-cols-2 md:gap-y-0 lg:grid-cols-3">{visualProjects.map((project, index) => <Project key={project.id} project={project} index={index} />)}</div>
        {textProjects.length > 0 && <div className="other-projects mt-9 border-t border-line pt-5">{textProjects.map(project => <Project key={project.id} project={project} />)}</div>}
      </section>

      <section id="ventures" className="ventures-section page-padding pt-[clamp(3rem,5vw,4rem)]" aria-labelledby="ventures-heading">
        <SectionHeading id="ventures-heading" title="Ventures" description="Businesses I’m building with others." />
        <div className="venture-list border-t border-line">{ventures.map(venture => <article className="venture-row grid grid-cols-1 items-start gap-x-6 gap-y-1 border-b border-line py-4 md:grid-cols-[minmax(0,1fr)_auto] md:py-[1.1rem]" key={venture.id}>
          <div className="venture-name"><h3 className="m-0 text-base font-medium leading-[1.5] tracking-[-.015em] md:text-[1.05rem]">{venture.name}</h3><p className="m-0 mt-[.2rem] text-[.85rem] leading-[1.5] text-muted">{venture.role}</p><p className="venture-description m-0 mt-[.35rem] text-[.9rem] leading-[1.6] text-muted">{venture.description}</p></div>
          <p className="venture-period m-0 text-sm leading-[1.5] whitespace-nowrap text-muted tabular-nums md:pt-[.15rem]">{venture.startYear} – {venture.endYear ?? "Present"}</p>
        </article>)}</div>
      </section>

      <ExperienceSection />

      <InitiativesSection />

      <div className="about-contact page-padding mt-[clamp(3rem,5vw,4rem)] grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:gap-[8%]">
        <section id="about" className="about-section border-t border-line pt-6" aria-labelledby="about-heading">
          <h2 id="about-heading" className={aboutHeadingClass}>About</h2>
          <p className="m-0 mb-[.85rem] text-[.96rem] leading-[1.7] text-muted">I’m Jude Rafael Alayacyac, a founder and entrepreneur based in Davao City. My work spans product strategy, brand direction, marketing, and event organization.</p>
          <p className="m-0 mb-[.85rem] text-[.96rem] leading-[1.7] text-muted">I learn by building, asking questions, and working closely with the people a product is meant to serve.</p>
          <div className="education-note mt-6"><h3 className="m-0 mb-[.3rem] text-[.95rem] font-medium">{profile.education.institution}</h3><p className="m-0 mt-[.2rem] text-sm leading-[1.65] text-muted"><strong className="font-medium text-ink">{profile.education.distinction}</strong> · {profile.education.degree}</p><p className="m-0 mt-[.2rem] text-sm leading-[1.65] text-muted">Graduated <time dateTime={profile.education.graduated}>{profile.education.graduatedLabel}</time></p></div>
        </section>
        <section id="contact" className="contact-section border-t border-line pt-6" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={aboutHeadingClass}>Let’s talk</h2>
          <p className="m-0 mb-[.85rem] text-[.96rem] leading-[1.7] text-muted">About a venture, an idea, or a way to work together.</p>
          <div className="contact-email-row mt-4 flex items-center gap-[.6rem]"><a className="contact-email text-[clamp(.95rem,1.5vw,1.1rem)] tracking-[-.015em] [overflow-wrap:anywhere] hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" onClick={copyEmail} className="copy-email flex size-11 shrink-0 items-center justify-center rounded-lg border-0 bg-surface text-muted hover:bg-[#ebecf0] hover:text-ink" aria-label={copied ? "Email copied" : "Copy email address"}>{copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}</button></div>
          <p className="copy-feedback my-1 min-h-6 text-[.8125rem] leading-[1.7] text-muted" role="status">{copied ? "Email address copied." : copyFailed ? "Select the address above or open it in your mail app." : ""}</p>
          <div className="contact-socials flex flex-wrap items-center gap-[1.4rem]"><a className={socialLinkClass} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a><a className={socialLinkClass} href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        </section>
      </div>
    </main>
    <footer className="site-footer page-padding mt-8 flex flex-col items-start justify-between gap-[.2rem] py-4 text-[.8125rem] text-muted md:mt-12 md:flex-row md:items-center md:gap-4 md:py-6"><span>© {new Date().getFullYear()} Jude Rafael Alayacyac</span><div className="flex w-full items-center justify-between gap-6 md:w-auto md:justify-start"><a className="inline-flex min-h-11 items-center gap-[.35rem] hover:text-ink hover:underline" href="/insights/">{insights.length ? "Insights" : "Writing soon"}</a><a className="inline-flex min-h-11 items-center gap-[.35rem] hover:text-ink hover:underline" href="#top" onClick={event => followSection(event, "top")}>Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
  </div>;
}
