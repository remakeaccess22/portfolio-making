const timeline = [
  {
    year: "2026 - Present",
    role: "CO-FOUNDER & CHIEF EXECUTIVE OFFICER",
    description:
      "Leading FarmIQ Technologies in building intelligent, data-driven solutions that empower farmers and transform the future of agriculture.",
    company: "FARMIQ TECHNOLOGIES",
  },
  {
    year: "2025 - Present",
    role: "CO-FOUNDER & CREATIVE DIRECTOR",
    description:
      "Directed creative and marketing projects, producing engaging digital content and visual media.",
    company: "PACEPOINT ENTERTAINMENT",
  },
  {
    year: "2024 - Present",
    role: "CO-FOUNDER & CHIEF DIGITAL OFFICER",
    description:
      "Managed research publishing processes and contributed to academic journal production.",
    company: "NEXUS PUBLICATIONS",
  },
  {
    year: "2024 - 2025",
    role: "CO-FOUNDER & EXECUTIVE VICE PRESIDENT",
    description:
      "Designed and optimized smart dairy management systems, improving farm operations and productivity.",
    company: "MOOMANAGE",
  },
];

function TimelineItem({ year, role, description, company, highlight = false }) {
  return (
    <div className="group grid grid-cols-1 gap-6 border-b border-white/25 py-12 md:grid-cols-[220px_minmax(0,1fr)_260px] md:gap-10">
      {/* YEAR */}
      <div>
        <p className="text-[16px] font-regular text-[#818181] font-[Satoshi]">
          {year}
        </p>
      </div>

      {/* ROLE + DESCRIPTION */}
      <div>
        <h3
          className={`text-[20px] font-semibold leading-[130%] transition font-[Satoshi] ${
            highlight
              ? "text-[#8B5CF6] drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]"
              : "text-[#F1F1F5] group-hover:text-[#8B5CF6] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          }`}
        >
          {role}
        </h3>

        <p className="mt-3 max-w-190 text-[14px] leading-[150%] text-[#818181] [font-family:'Plus Jakarta Sans']">
          {description}
        </p>
      </div>

      {/* COMPANY */}
      <div className="md:text-right">
        <p className="text-[16px] font-regular text-[#818181] font-[Satoshi]">
          {company}
        </p>
      </div>
    </div>
  );
}

export function CareerTimeline() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-[40px] font-bold text-[#F1F1F5] font-[Satoshi]">
          CAREER TIMELINE
        </h2>

        <div className="mt-16 border-t border-white/25">
          {timeline.map((item) => (
            <TimelineItem key={`${item.year}-${item.company}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
