import { lazy, Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteIdentity } from "./components/portfolio/SiteIdentity";

const Portfolio = lazy(() => import("./components/portfolio/Portfolio").then(module => ({ default: module.Portfolio })));
const InsightsIndex = lazy(() => import("./components/insights/Insights").then(module => ({ default: module.InsightsIndex })));
const InsightArticle = lazy(() => import("./components/insights/Insights").then(module => ({ default: module.InsightArticle })));
const InitiativePage = lazy(() => import("./components/initiatives/Initiatives").then(module => ({ default: module.InitiativePage })));

function JournalShell({ children }) {
  return <><a className="skip-to-content" href="#main-content">Skip to content</a><header className="journal-navigation page-padding"><a className="gap-2" href="/"><SiteIdentity /></a><a href="/#contact">Let’s talk <ArrowUpRight size={14} /></a></header>{children}<footer className="journal-footer page-padding"><span>© {new Date().getFullYear()} Jude Rafael Alayacyac</span><a href="/">Back to portfolio</a></footer></>;
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  let page;
  if (path === "/" || path === "/design") page = <Portfolio />;
  else if (path === "/insights") page = <JournalShell><InsightsIndex /></JournalShell>;
  else if (path.startsWith("/insights/")) {
    let slug;
    try { slug = decodeURIComponent(path.slice("/insights/".length)); } catch { slug = ""; }
    page = <JournalShell><InsightArticle slug={slug} /></JournalShell>;
  } else if (path.startsWith("/initiatives/")) {
    let slug;
    try { slug = decodeURIComponent(path.slice("/initiatives/".length)); } catch { slug = ""; }
    page = <JournalShell><InitiativePage slug={slug} /></JournalShell>;
  } else page = <JournalShell><main className="page-not-found page-padding" id="main-content"><h1>Page not found.</h1><a className="text-link" href="/">Back to portfolio <ArrowUpRight size={16} /></a></main></JournalShell>;
  return <Suspense fallback={<p className="page-padding" role="status">Loading…</p>}>{page}</Suspense>;
}
