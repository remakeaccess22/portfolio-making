import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { designCollections, designShowcaseNote } from "../../data/design-showcase";
import { profile } from "../../data/portfolio";
import { LoadingImage } from "../loading/LoadingImage";
import { SiteIdentity } from "../portfolio/SiteIdentity";
import "../portfolio/EditorialPortfolio.css";
import "./DesignShowcase.css";

function DesignHeader() {
  return <header className="editorial-header" data-site-header>
    <div className="editorial-header-inner editorial-container">
      <a className="editorial-identity" href="/"><SiteIdentity /></a>
      <nav className="design-navigation" aria-label="Main navigation">
        <a href="/#work">Work</a>
        <a href="/expertise/design/" aria-current="page">Design Expertise</a>
        <a href="/#contact">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      </nav>
    </div>
  </header>;
}

function Artwork({ art, onOpen, eager = false }) {
  return <button type="button" className="design-artwork" onClick={() => onOpen(art)} aria-label={`Open full screen: ${art.alt}`}>
    <LoadingImage src={art.src} alt={art.alt} width={art.width} height={art.height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
  </button>;
}

function ArtworkViewer({ art, onClose }) {
  const dialog = useRef(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!art) return;
    const element = dialog.current;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    element.showModal();
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      if (element.open) element.close();
    };
  }, [art]);

  function close() { dialog.current.close(); }

  function containTab(event) {
    if (event.key !== "Tab") return;
    const controls = [...dialog.current.querySelectorAll("button:not(:disabled), [tabindex='0']")];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  return <dialog ref={dialog} className="design-viewer" aria-labelledby="artwork-title" onKeyDown={containTab} onClose={() => { if (!dialog.current.open) onClose(); }} data-lenis-prevent>
    <h2 id="artwork-title" className="sr-only">{art?.alt ?? "Artwork"}</h2>
    <div className="design-viewer-top"><button type="button" onClick={close} aria-label="Close full screen view"><X size={22} aria-hidden="true" /></button></div>
    <div className="design-viewer-stage" tabIndex="0" aria-label="Artwork. Scroll to explore when zoomed.">
      {art && <div className="design-viewer-canvas" style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}><LoadingImage src={art.src} alt={art.alt} width={art.width} height={art.height} decoding="async" /></div>}
    </div>
    <div className="design-viewer-controls" role="group" aria-label="Image zoom">
      <button type="button" onClick={() => setZoom(value => Math.max(1, value - .5))} disabled={zoom === 1} aria-label="Zoom out"><ZoomOut size={18} aria-hidden="true" /></button>
      <output aria-live="polite">{Math.round(zoom * 100)}%</output>
      <button type="button" onClick={() => setZoom(value => Math.min(3, value + .5))} disabled={zoom === 3} aria-label="Zoom in"><ZoomIn size={18} aria-hidden="true" /></button>
      <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Reset zoom"><RotateCcw size={17} aria-hidden="true" /></button>
    </div>
  </dialog>;
}

export function DesignShowcase() {
  const [selected, setSelected] = useState(null);
  return <div className="editorial-portfolio design-showcase">
    <a className="skip-to-content" href="#main-content">Skip to content</a>
    <DesignHeader />
    <main id="main-content" className="editorial-container">
      <header className="design-introduction">
        <h1>Design expertise.</h1>
        <p>Select any image for a closer look.</p>
      </header>
      <div className="design-collections">{designCollections.map((project, index) => <section className="design-collection" id={project.slug} aria-labelledby={`design-${project.slug}`} tabIndex={-1} key={project.slug}>
        <div className="design-collection-copy"><h2 id={`design-${project.slug}`}>{project.title}</h2><p className="sr-only">{project.role}</p><p className="design-contribution">{project.description}</p></div>
        <div className="design-media"><Artwork art={project.identity} onOpen={setSelected} eager={index === 0} /><div className="design-applications">{project.applications.map(art => <Artwork key={art.src} art={art} onOpen={setSelected} />)}</div></div>
      </section>)}</div>
      <p className="design-collection-note">{designShowcaseNote}</p>
    </main>
    <footer className="editorial-footer editorial-container"><span>© {new Date().getFullYear()} {profile.name}</span><a href="/">Back to portfolio <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
    <ArtworkViewer key={selected?.src ?? "closed"} art={selected} onClose={() => setSelected(null)} />
  </div>;
}
