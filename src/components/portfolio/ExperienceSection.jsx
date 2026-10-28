import { Fragment } from "react";
import { experienceGroups } from "../../data/portfolio";
import { SectionHeading } from "./SectionHeading";

function ExperienceRole({ experience }) {
  const period = experience.startYear === experience.endYear
    ? `${experience.startYear}`
    : `${experience.startYear} – ${experience.endYear ?? "Present"}`;
  const descriptionParts = experience.emphasis
    ? experience.description.split(experience.emphasis)
    : [experience.description];

  return <article className="experience-row grid min-w-0 grid-cols-1 items-start gap-x-6 gap-y-1 border-b border-line py-4 md:grid-cols-[minmax(0,1fr)_auto] md:py-[1.1rem]" aria-labelledby={`experience-${experience.id}`}>
    <div className="min-w-0">
      <h4 id={`experience-${experience.id}`} className="m-0 text-base font-medium leading-[1.5] tracking-[-.015em] md:text-[1.05rem]">{experience.organization}</h4>
      <p className="experience-meta m-0 mt-[.2rem] flex flex-col gap-x-2 text-[.85rem] leading-[1.6] text-muted md:flex-row md:flex-wrap"><span className="experience-role">{experience.role}</span>{experience.location && <><span className="hidden md:inline" aria-hidden="true">·</span><span className="experience-location">{experience.location}</span></>}</p>
      <p className="experience-description m-0 mt-[.5rem] max-w-[70ch] text-[.925rem] leading-[1.65] text-muted [text-wrap:pretty]">{descriptionParts.map((part, index) => <Fragment key={index}>{index > 0 && <em>{experience.emphasis}</em>}{part}</Fragment>)}</p>
    </div>
    <p className="experience-period m-0 text-sm leading-[1.5] whitespace-nowrap text-muted tabular-nums md:pt-[.15rem]">{period}</p>
  </article>;
}

export function ExperienceSection() {
  return <section id="experience" className="experience-section page-padding pt-[clamp(3rem,5vw,4rem)]" aria-labelledby="experience-heading">
    <SectionHeading id="experience-heading" title="Professional experience" description="Creative and technical roles beyond my ventures." />
    <div className="experience-groups space-y-7 md:space-y-8">
      {experienceGroups.map(group => <section className="experience-group grid min-w-0 grid-cols-1 items-start gap-3 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8" key={group.id} aria-labelledby={`experience-group-${group.id}`}>
        <h3 id={`experience-group-${group.id}`} className="m-0 text-sm font-medium leading-[1.5] text-muted md:pt-[1.1rem]">{group.label}</h3>
        <div className="experience-list min-w-0 border-t border-line">{group.roles.map(experience => <ExperienceRole experience={experience} key={experience.id} />)}</div>
      </section>)}
    </div>
  </section>;
}
