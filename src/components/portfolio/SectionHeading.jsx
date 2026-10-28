export function SectionHeading({ id, title, description, compact = false }) {
  return <div className={`section-heading flex flex-col items-start gap-2 md:flex-row md:items-baseline md:justify-between md:gap-x-8 md:gap-y-4 ${compact ? "mb-4" : "mb-5"}`}>
    <h2 id={id} className={`m-0 font-medium leading-[1.2] tracking-[-.02em] ${compact ? "text-xl" : "text-[clamp(1.5rem,2.4vw,1.85rem)]"}`}>{title}</h2>
    {description && <p className="m-0 max-w-[29rem] text-[.925rem] leading-[1.6] text-muted md:text-[.95rem]">{description}</p>}
  </div>;
}
