import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/portfolio";
import { ExpertiseHeader } from "./ExpertiseHeader";
import { SelectedWork } from "./SelectedWork";
import "./EditorialPortfolio.css";

export function BusinessExpertise() {
  return <div className="editorial-portfolio business-expertise">
    <a className="skip-to-content" href="#main-content">Skip to content</a>
    <ExpertiseHeader area="business" />
    <main id="main-content">
      <header className="business-introduction editorial-container">
        <h1>Business.</h1>
        <p>Product strategy, research, and the decisions behind FarmIQ, Axon Tickets, and ResGuard.</p>
      </header>
      <SelectedWork />
    </main>
    <footer className="editorial-footer editorial-container"><span>© {new Date().getFullYear()} {profile.name}</span><a href="/">Back to portfolio <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
  </div>;
}
