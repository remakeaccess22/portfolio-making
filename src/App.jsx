import { lazy, Suspense } from "react";
import { PageLoadBoundary, PageSkeleton } from "./components/loading/PageLoading";
import { ArrowUpRight } from "lucide-react";
import { getPageMetadata } from "./data/seo";
import { usePageMetadata } from "./components/seo/usePageMetadata";
import { SiteIdentity } from "./components/portfolio/SiteIdentity";

const InsightsIndex = lazy(() => import("./components/insights/Insights").then(module => ({ default: module.InsightsIndex })));
const InsightArticle = lazy(() => import("./components/insights/Insights").then(module => ({ default: module.InsightArticle })));
const InitiativePage = lazy(() => import("./components/initiatives/Initiatives").then(module => ({ default: module.InitiativePage })));
const EditorialPortfolio = lazy(() => import("./components/portfolio/EditorialPortfolio").then(module => ({ default: module.EditorialPortfolio })));
const CaseStudy = lazy(() => import("./components/portfolio/CaseStudy").then(module => ({ default: module.CaseStudy })));
const BusinessExpertise = lazy(() => import("./components/portfolio/BusinessExpertise").then(module => ({ default: module.BusinessExpertise })));
const DesignShowcase = lazy(() => import("./components/design/DesignShowcase").then(module => ({ default: module.DesignShowcase })));

function JournalShell({ children }) {
  return <><a className="skip-to-content" href="#main-content">Skip to content</a><header className="journal-navigation page-padding"><a className="gap-2" href="/"><SiteIdentity /></a><a href="/#contact">Let’s talk <ArrowUpRight size={14} /></a></header>{children}<footer className="journal-footer page-padding"><span>© {new Date().getFullYear()} Jude Rafael Alayacyac</span><a href="/">Back to portfolio</a></footer></>;
}

export default function App({ pathname = window.location.pathname }) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const metadata = getPageMetadata(path);
  usePageMetadata(path);
  let page;
  if (!metadata.exists && !(import.meta.env.DEV && path.startsWith("/design"))) page = <JournalShell><main className="page-not-found page-padding" id="main-content"><h1>Page not found.</h1><a className="text-link" href="/">Back to portfolio <ArrowUpRight size={16} /></a></main></JournalShell>;
  else if (path === "/design/editorial") page = <EditorialPortfolio preview />;
  else if (path === "/" || path === "/design") page = <EditorialPortfolio />;
  else if (path.startsWith("/work/")) {
    let slug;
    try { slug = decodeURIComponent(path.slice("/work/".length)); } catch { slug = ""; }
    page = <CaseStudy slug={slug} />;
  }
  else if (path === "/expertise/business") page = <BusinessExpertise />;
  else if (path === "/expertise/design") page = <DesignShowcase />;
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
  return <PageLoadBoundary><Suspense fallback={<PageSkeleton metadata={metadata} path={path} />}>{page}</Suspense></PageLoadBoundary>;
}
