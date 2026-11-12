import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Menu, X } from "lucide-react";
import { profile, ventures } from "../../data/portfolio";
import { insights } from "../../data/insights";
import { InitiativesSection } from "../initiatives/Initiatives";
import { ExpertiseMenu } from "./ExpertiseMenu";
import { GalleryExperience } from "./GalleryExperience";
import { SiteIdentity } from "./SiteIdentity";
import { usePortfolioMotion } from "./usePortfolioMotion";
import "./EditorialPortfolio.css";

const navigation = [["ventures", "Ventures"], ["experience", "Experience"], ["leadership", "Leadership"], ["about", "About"]];
export function EditorialPortfolio() {
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
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
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
      setCopied(true);
      setCopyFailed(false);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2600);
    } catch { setCopyFailed(true); }
  }

  return <div className="editorial-portfolio" ref={root} id="top">
    <a className="skip-to-content" href="#main" onClick={event => followSection(event, "main")}>Skip to content</a>
    <header className="editorial-header" data-site-header>
      <div className="editorial-header-inner editorial-container" data-header-bar>
        <a className="editorial-identity" href="#top" onClick={event => followSection(event, "top")}><SiteIdentity /></a>
        <button ref={menuButton} className="editorial-menu-button" aria-expanded={menuOpen} aria-controls="editorial-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}</button>
        <nav id="editorial-navigation" className={`editorial-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <ExpertiseMenu onNavigate={() => setMenuOpen(false)} />
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={event => followSection(event, id)} aria-current={activeSection === id ? "location" : undefined}>{label}</a>)}
          <a className="editorial-nav-contact" href="#contact" onClick={event => followSection(event, "contact")}>Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section id="work" className="editorial-hero personal-introduction editorial-container" aria-labelledby="hero-heading">
        <h1 id="hero-heading"><span data-hero-line><span>Jude Rafael</span></span>{" "}<span data-hero-line><span>S. Alayacyac</span></span></h1>
        <div className="editorial-hero-aside" data-hero-meta>
          <p className="editorial-introduction">Building ventures across agriculture, entertainment, publishing, and design. Working on the products, brands, and relationships that help them take shape.</p>
          <div className="personal-expertise-links"><a href="/expertise/design/">Design <ArrowUpRight size={15} aria-hidden="true" /></a><a href="/expertise/business/">Business <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="ventures" className="editorial-record-section editorial-container" aria-labelledby="ventures-heading">
        <div className="editorial-section-intro"><h2 id="ventures-heading">Ventures</h2><p>Businesses I’m building with others.</p></div>
        <div className="editorial-ventures">{ventures.map(venture => <article className="editorial-venture" key={venture.id}>
          <div><h3>{venture.name}</h3><p className="editorial-record-role">{venture.role}</p><p className="editorial-record-description">{venture.description}</p></div>
          <p className="editorial-record-period">{venture.startYear} – {venture.endYear ?? "Present"}</p>
        </article>)}</div>
      </section>

      <div className="editorial-container"><GalleryExperience /></div>
      <InitiativesSection />

      <section id="about" className="editorial-about editorial-container" aria-labelledby="about-heading">
        <h2 id="about-heading">About</h2>
        <div className="editorial-about-copy"><p>I’m Jude Rafael Alayacyac, a founder and entrepreneur based in Davao City. My work spans product strategy, brand direction, marketing, and event organization.</p><p>I learn by building, asking questions, and working closely with the people a product is meant to serve.</p></div>
        <div className="editorial-education"><h3>{profile.education.institution}</h3><p><strong>{profile.education.distinction}</strong><br />{profile.education.degree}</p><p>Graduated <time dateTime={profile.education.graduated}>{profile.education.graduatedLabel}</time></p></div>
      </section>

      <section id="contact" className="editorial-contact" aria-labelledby="contact-heading"><div className="editorial-container">
        <div className="editorial-contact-top"><h2 id="contact-heading">Let’s talk.</h2><div><p>About a venture, an idea,<br />or a way to work together.</p></div></div>
        <div className="editorial-contact-bottom"><div><div className="editorial-email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"}>{copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}</button></div><p className="editorial-copy-status" role="status">{copied ? "Email address copied." : copyFailed ? "Select the address above or open it in your mail app." : ""}</p></div><div className="editorial-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href={profile.instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a></div></div>
      </div></section>
    </main>

    <footer className="editorial-footer editorial-container"><span>© {new Date().getFullYear()} {profile.name}</span><div><a href="/insights/">{insights.length ? "Insights" : "Writing soon"}</a><a href="#top" onClick={event => followSection(event, "top")}>Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>
  </div>;
}
