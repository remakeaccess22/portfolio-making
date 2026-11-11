import { Component } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteIdentity } from "../portfolio/SiteIdentity";
import "./Loading.css";

function Lines({ count = 3 }) {
  return <div className="loading-lines">{Array.from({ length: count }, (_, index) => <span className="loading-bar" key={index} />)}</div>;
}

function LoadingHeader() {
  return <header className="loading-header loading-container"><a href="/" aria-label="Jude Rafael — home"><SiteIdentity /></a><a href="/#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a></header>;
}

export function PageSkeleton({ metadata, path }) {
  const home = path === "/" || path.startsWith("/design");
  const design = metadata.designShowcase;
  const study = metadata.study;
  const title = design ? "Design expertise." : study?.title ?? metadata.initiative?.name ?? (path.startsWith("/insights") ? "Insights" : "Portfolio");
  const type = design ? "design" : home ? "home" : study ? "case" : "article";
  return <div className={`page-loading page-loading-${type}`}>
    <LoadingHeader />
    <p className="sr-only" role="status">{home ? "Loading portfolio…" : `Loading ${title}…`}</p>
    <main className="loading-container" aria-busy="true">
      {!home && !design && <a className="loading-back" href={study ? "/#work" : "/"}><ArrowLeft size={15} aria-hidden="true" /> {study ? "Back to selected work" : "Back to portfolio"}</a>}
      {design ? <>
        <div className="loading-design-intro"><h1>{title}</h1><div aria-hidden="true"><span className="loading-bar loading-role" /></div></div>
        <div className="loading-design-row" aria-hidden="true"><div className="loading-design-copy"><span className="loading-bar loading-name" /><Lines count={4} /></div><div className="loading-design-project"><div className="loading-block" style={{ aspectRatio: "2400 / 647" }} /><div className="loading-design-applications">{[0, 1, 2].map(index => <div className="loading-block" key={index} />)}</div></div></div>
      </> : home ? <>
        <div className="loading-home-intro"><h1>Selected<br />work.</h1><div aria-hidden="true"><span className="loading-bar loading-name" /><Lines /></div></div>
        <div className="loading-gallery" aria-hidden="true">{[0, 1, 2].map(index => <div key={index}><div className="loading-block loading-cover" /><span className="loading-bar loading-name" /><span className="loading-bar loading-role" /><Lines /></div>)}</div>
        <div className="loading-records" aria-hidden="true"><span className="loading-bar loading-name" /><Lines count={4} /></div>
      </> : <>
        <h1 className="loading-title">{title}</h1>
        <div aria-hidden="true">
          {study ? <div className="loading-facts">{[0, 1, 2].map(index => <Lines key={index} count={2} />)}</div> : <div className="loading-summary"><Lines count={4} /><span className="loading-bar loading-role" /></div>}
          <div className="loading-block loading-cover" style={{ aspectRatio: metadata.initiative?.photo ? `${metadata.initiative.photo.width} / ${metadata.initiative.photo.height}` : "16 / 9" }} />
          <div className="loading-reading"><Lines count={4} />{study && <Lines count={4} />}</div>
        </div>
      </>}
    </main>
  </div>;
}

export class PageLoadBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <div className="page-loading page-loading-article"><LoadingHeader /><main className="loading-container loading-failure"><h1>Unable to load this page.</h1><p role="alert">The connection may have been interrupted. Please try again.</p><div><button type="button" onClick={() => window.location.reload()}>Reload page</button><a href="/">Back to portfolio <ArrowUpRight size={15} aria-hidden="true" /></a></div></main></div>;
  }
}
