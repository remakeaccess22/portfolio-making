const projects = [
  {
    category: "ENTERTAINMENT PROJECT",
    year: "2026",
    title: "RUN FOR LOVE: FUN RUN",
    description:
      "Run For Love: Fun Run is a community-driven event on April 26, 2026, supported by major brands like ANFLO Industrial Estate, DITO Telecommunity, Security Bank, McDonald's, Grab, Gatorade, Acacia Hotel, and HEAD Sport, where I lead the creative direction and marketing to deliver an engaging and impactful experience.",
    tags: ["Creative Direction", "Marketing & Branding", "Digital Marketing"],
  },
  {
    category: "STARTUP PROJECT",
    year: "2026",
    title: "FarmIQ",
    description:
      "FarmIQ is an intelligent agri-tech platform that transforms traditional farming into a data-driven, efficient, and sustainable system through smart management, analytics, and financial empowerment, where I serve as the Product Lead.",
    tags: ["Product Management", "Systems Thinking", "Design Thinking"],
  },
  {
    category: "CAPSTONE PROJECT",
    year: "2026",
    title: "OinkStatus",
    description:
      "OinkStatus is a smart piggery management system that helps farmers track livestock, monitor farm operations, and optimize productivity, where I served as UI/UX Designer and Documentation Lead, designing user-centered interfaces and contributing to system architecture.",
    tags: ["UI/UX Design", "System Documentations & Requirements Analysis"],
  },
  {
    category: "STARTUP PROJECT",
    year: "2025",
    title: "MooManage",
    description:
      "MooManage is a smart dairy management platform that streamlines farm operations, tracks livestock, and optimizes productivity through data-driven insights and automation, where I served as Lead UI/UX and Project Manager, applying systems thinking and design to build scalable, user-centered solutions.",
    tags: ["UI/UX Design", "Project Management", "Product Development"],
  },
  {
    category: "CLIENT PROJECT",
    year: "2025",
    title: "Nudae",
    description:
      "Nudae is a skincare service, where I served as Web Designer, creating an intuitive and visually appealing website to showcase their services and brand identity.",
    tags: ["Web Design", "UI/UX Design", "Visual & Branding"],
  },
  {
    category: "ORGANIZATION PROJECT",
    year: "2025",
    title: "UMSDC Landing Page",
    description:
      "UMSDC Landing Page is a responsive web platform built for managing membership and engagement for the University of Mindanao Student Developers Community, where I led React development and UI/UX design to create an intuitive, user-centered experience.",
    tags: ["Frontend Development", "UI/UX Design", "Responsive Web Design"],
  },
];

function ProjectCard({ category, year, title, description, tags }) {
  return (
    <div
      className="
    flex h-full flex-col rounded-2xl border border-white/30
    p-8 md:p-9 transition-all duration-300
    hover:border-[#8B5CF6] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
  "
    >
      {/* TOP */}
      <div className="flex items-start justify-between">
        <p className="text-[14px] uppercase text-[#818181] font-[Satoshi]">
          {category}
        </p>

        <p className="text-[14px] text-[#818181] font-[Satoshi]">{year}</p>
      </div>

      {/* TITLE */}
      <h3 className="mt-8 text-[24px] font-semibold text-[#F1F1F5] font-[Satoshi]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-6 text-[16px] leading-[160%] text-[#F1F1F5] font-[Plus Jakarta Sans]">
        {description}
      </p>

      {/* TAGS */}
      <div className="mt-auto flex flex-wrap gap-3 pt-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="
          rounded-lg border border-white/30 px-4 py-2 text-[12px]
          text-[#F1F1F5]
        "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WorkProjects() {
  return (
    <section id="work" className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-[40px] font-bold text-[#F1F1F5] font-[Satoshi]">
          WORK & PROJECTS
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
