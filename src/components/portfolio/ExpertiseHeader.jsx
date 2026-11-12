import { ArrowUpRight } from "lucide-react";
import { SiteIdentity } from "./SiteIdentity";
import { ExpertiseMenu } from "./ExpertiseMenu";

export function ExpertiseHeader({ area }) {
  return <header className="editorial-header" data-site-header>
    <div className="editorial-header-inner editorial-container">
      <a className="editorial-identity" href="/"><SiteIdentity /></a>
      <nav className="expertise-navigation" aria-label="Main navigation">
        <a href="/">Home</a>
        <ExpertiseMenu area={area} />
        <a href="/#contact">Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
      </nav>
    </div>
  </header>;
}
