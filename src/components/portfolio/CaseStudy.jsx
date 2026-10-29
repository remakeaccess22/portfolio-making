import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies, caseStudyOrder } from "../../data/case-studies";
import { profile } from "../../data/portfolio";
import { SiteIdentity } from "./SiteIdentity";
import { usePortfolioMotion } from "./usePortfolioMotion";
import "./CaseStudy.css";

function getChapters(study) {
  return [
    { id: "overview", label: "Overview" },
    { id: "contribution", label: "Contribution" },
    ...(study.decisions ? [{ id: "decisions", label: "Decisions" }] : []),
    ...(study.evaluation ? [{ id: "evaluation", label: "Findings" }] : []),
    ...(study.nextTests ? [{ id: "next", label: "Next steps" }] : []),
    ...(study.reflection ? [{ id: "reflection", label: "Learning" }] : []),
  ];
}

function CaseStudyShell({ children }) {
  return <div className="case-study-shell">
    <a className="skip-to-content" href="#main-content">Skip to content</a>
    <header className="case-study-site-header case-study-container">
      <a href="/" aria-label="Jude Rafael — home"><SiteIdentity /></a>
      <a href="/#contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></a>
    </header>
    {children}
    <footer className="case-study-site-footer case-study-container"><span>© {new Date().getFullYear()} {profile.name}</span><a href="/#work">Back to portfolio <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
  </div>;
}

function CaseStudyContents({ chapters, story, navigateTo }) {
  const [active, setActive] = useState(chapters[0].id);
  useEffect(() => {
    const elements = [...story.current.querySelectorAll("section[data-chapter]")];
    const visible = new Set();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      }
      const focusedChapter = elements.find(element => element.contains(document.activeElement) && visible.has(element.id));
      const current = focusedChapter ?? elements.find(element => visible.has(element.id));
      if (current) setActive(current.id);
    }, { rootMargin: "-10% 0px -55% 0px" });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [story]);

  const navigate = (event, id) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (navigateTo(id, { immediate: event.detail === 0, onComplete: () => setActive(id) })) event.preventDefault();
  };

  return <nav className="case-study-contents" data-site-header aria-label="Case study sections">
    {chapters.map(chapter => <a key={chapter.id} href={`#${chapter.id}`} aria-current={active === chapter.id ? "location" : undefined} onClick={event => navigate(event, chapter.id)}>{chapter.label}</a>)}
  </nav>;
}

function CaseStudySection({ id, title, className = "", children }) {
  return <section className={`case-study-section ${className}`} id={id} data-chapter tabIndex={-1} aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2>{children}</section>;
}

function InlineText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part);
}

function NextProject({ study }) {
  const nextSlug = caseStudyOrder[(caseStudyOrder.indexOf(study.slug) + 1) % caseStudyOrder.length];
  const next = caseStudies[nextSlug];
  return <nav className="case-study-next-project" aria-label="Next project">
    <a href={`/work/${next.slug}/`}>
      <div className="case-study-next-copy"><h2>{next.title} <ArrowRight size={28} aria-hidden="true" /></h2><p>{next.role}</p></div>
      {next.cover ? <img src={next.cover.src} alt="" width={next.cover.width} height={next.cover.height} loading="lazy" decoding="async" /> : null}
    </a>
  </nav>;
}

function CaseStudyArticle({ study }) {
  const story = useRef(null);
  const { navigateTo } = usePortfolioMotion(story);
  const chapters = getChapters(study);
  return <CaseStudyShell>
    <main id="main-content" className="case-study-page case-study-container">
      <article aria-labelledby="case-study-title">
        <header className="case-study-heading">
          <a className="case-study-back" href="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to selected work</a>
          <h1 className="case-study-title" id="case-study-title">{study.title}</h1>
          <dl className="case-study-facts">
            <div><dt>My role</dt><dd>{study.role}</dd></div>
            <div><dt>Industry</dt><dd>{study.focus}</dd></div>
            <div><dt>Current stage</dt><dd>{study.stage}</dd></div>
          </dl>
        </header>

        {study.cover ? <figure className="case-study-cover">
          <a href={study.cover.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${study.title} image in a new tab`}><img src={study.cover.src} alt={study.cover.alt} width={study.cover.width} height={study.cover.height} fetchPriority="high" decoding="async" /></a>
          <figcaption><span>{study.cover.caption}</span><a href={study.cover.src} target="_blank" rel="noreferrer">Full-size image <ArrowUpRight size={13} aria-hidden="true" /></a></figcaption>
        </figure> : null}

        <div className="case-study-story" ref={story}>
          <CaseStudyContents chapters={chapters} story={story} navigateTo={navigateTo} />
          <div className="case-study-reading">
            <div className="case-study-overview">
              <CaseStudySection id="overview" title="The Problem">
                <p className="case-study-introduction"><InlineText text={study.introduction} /></p>
                {study.problem.map(paragraph => <p key={paragraph}><InlineText text={paragraph} /></p>)}
              </CaseStudySection>
              <CaseStudySection id="contribution" title="My Contribution">
                {study.contribution.map(paragraph => <p key={paragraph}><InlineText text={paragraph} /></p>)}
              </CaseStudySection>
            </div>

            <CaseStudySection id="decisions" title={study.decisionsTitle}>
              <div className="case-study-decisions">{study.decisions.map(decision => <section key={decision.title}>
                <h3>{decision.title}</h3>
                <p className="case-study-choice"><span className="sr-only">Decision: </span>{decision.choice}</p>
                <p className="case-study-reasoning"><span className="sr-only">Reasoning: </span>{decision.reasoning}</p>
              </section>)}</div>
            </CaseStudySection>

            <CaseStudySection id="evaluation" title={study.evaluationTitle}>
              <div className="case-study-evidence">
                <div>{study.evaluation.map(paragraph => <p key={paragraph}><InlineText text={paragraph} /></p>)}<p className="case-study-validation"><InlineText text={study.evaluationNote} /></p></div>
                <ul className="case-study-findings">{study.findings.map(finding => <li key={finding.label}><h3>{finding.label}</h3><p><InlineText text={finding.text} /></p></li>)}</ul>
              </div>
            </CaseStudySection>

            <CaseStudySection id="next" title="Next Steps">
              <p>{study.nextIntroduction}</p>
              <ol className="case-study-tests">{study.nextTests.map(test => <li key={test.title}><h3>{test.title}</h3><p>{test.text}</p></li>)}</ol>
            </CaseStudySection>

            <CaseStudySection id="reflection" title="Key Learning" className="case-study-learning">
              <div className="case-study-learning-body"><blockquote><p>{study.learning}</p></blockquote><p>{study.reflection}</p></div>
            </CaseStudySection>
          </div>
        </div>
        <NextProject study={study} />
      </article>
    </main>
  </CaseStudyShell>;
}

export function CaseStudy({ slug }) {
  const study = Object.hasOwn(caseStudies, slug) ? caseStudies[slug] : null;
  if (!study) return <CaseStudyShell><main className="case-study-not-found case-study-container" id="main-content"><h1>Case study not found.</h1><a className="text-link" href="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to selected work</a></main></CaseStudyShell>;
  return <CaseStudyArticle key={study.slug} study={study} />;
}
