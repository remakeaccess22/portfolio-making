import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { experienceGroups, profile } from "../../data/portfolio";

const summaryOrganizations = {
  aquila: "Aquila",
  "up-plex": "UP PLEX",
  umal: "UMAL Production",
  umsdc: "UMSDC",
  "um-enigma": "UM Enigma",
};

function ExperienceRole({ experience }) {
  const period = experience.startYear === experience.endYear
    ? `${experience.startYear}`
    : `${experience.startYear} – ${experience.endYear ?? "Present"}`;
  const descriptionParts = experience.emphasis
    ? experience.description.split(experience.emphasis)
    : [experience.description];

  return <article className="gallery-experience-role" aria-labelledby={`gallery-experience-${experience.id}`}>
    <header className="gallery-experience-role-header">
      <h4 id={`gallery-experience-${experience.id}`}>{experience.organization}</h4>
      <p className="gallery-experience-period">{period}</p>
    </header>
    <p className="gallery-experience-meta">
      <span>{experience.role}</span>
      <span aria-hidden="true"> · </span>
      <span>{experience.location ?? profile.location}</span>
    </p>
    <p className="gallery-experience-description">
      {descriptionParts.map((part, index) => <Fragment key={index}>
        {index > 0 && <em>{experience.emphasis}</em>}{part}
      </Fragment>)}
    </p>
  </article>;
}

export function GalleryExperience() {
  return <section id="experience" className="gallery-experience" aria-labelledby="experience-heading">
    <header className="gallery-section-intro">
      <h2 id="experience-heading">Professional experience</h2>
      <p>Creative and technical roles beyond my ventures.</p>
    </header>
    <div className="gallery-experience-groups">
      {experienceGroups.map(group => <details className="gallery-experience-group" key={group.id}>
        <summary className="gallery-experience-summary">
          <h3>
            <span className="gallery-experience-summary-label">{group.label}</span>
            <span className="gallery-experience-summary-organizations">
              {group.roles.map(experience => summaryOrganizations[experience.id] ?? experience.organization).join(" · ")}
            </span>
            <span className="gallery-experience-count">
              {group.roles.length} roles
              <ChevronDown size={16} aria-hidden="true" />
            </span>
          </h3>
        </summary>
        <div className="gallery-experience-list">
          {group.roles.map(experience => <ExperienceRole experience={experience} key={experience.id} />)}
        </div>
      </details>)}
    </div>
  </section>;
}
