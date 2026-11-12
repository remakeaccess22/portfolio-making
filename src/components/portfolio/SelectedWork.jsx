import { LoadingImage } from "../loading/LoadingImage";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "../../data/portfolio";

const illustratedProjects = projects.filter(project => project.image);
const otherProjects = projects.filter(project => !project.image);

function ProjectContribution({ project }) {
  if (project.caseStudy) return <a className="editorial-case-study-link" href={project.caseStudy} aria-label={`${project.caseStudyLabel ?? "View case study"}: ${project.title}`}>{project.caseStudyLabel ?? "View case study"} <ArrowUpRight size={15} aria-hidden="true" /></a>;
  if (!project.contribution) return null;
  return <details className="editorial-contribution">
    <summary>My contribution <ChevronDown size={15} aria-hidden="true" /></summary>
    <p>{project.contribution}</p>
  </details>;
}

function ProjectImage({ project, eager = false }) {
  return <a className="editorial-project-image" href={project.image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.title} project image`} data-reveal>
    <LoadingImage src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
  </a>;
}

function ProjectHeading({ project }) {
  return <header className="editorial-project-heading">
    <h3 id={`project-${project.id}`}>{project.title}</h3>
    <p>{project.role}</p>
  </header>;
}

export function SelectedWork() {
  return (
<section id="work" className="editorial-work editorial-container" aria-labelledby="work-heading">
        <h2 id="work-heading" className="business-work-heading">Selected work</h2>
        <div className="editorial-gallery">{illustratedProjects.map((project, index) => <article className={`editorial-gallery-project editorial-gallery-project--${project.id}`} aria-labelledby={`project-${project.id}`} key={project.id}>
          <ProjectImage project={project} eager={index === 0} />
          <ProjectHeading project={project} />
          <p className="editorial-project-description">{project.description}</p>
          <ProjectContribution project={project} />
        </article>)}</div>
        {otherProjects.map(project => <article className="editorial-text-project" key={project.id} aria-labelledby={`project-${project.id}`}><ProjectHeading project={project} /><div><p>{project.description}</p><ProjectContribution project={project} /></div></article>)}
      </section>
  );
}
