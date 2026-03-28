export function LeadershipSkills() {
  const items = [
    {
      title: "Leadership & Team Direction",
      description:
        "Led cross-functional teams in building products and managing operations across multiple ventures.",
    },
    {
      title: "Product Strategy & Execution",
      description:
        "Defined product direction, roadmaps, and systems aligned with business and user needs.",
    },
    {
      title: "Systems Thinking",
      description:
        "Designed scalable workflows and frameworks to optimize processes and decision-making.",
    },
    {
      title: "Entrepreneurship",
      description:
        "Built and launched ventures focused on innovation, growth, and real-world impact.",
    },
    {
      title: "Operations & Process Optimization",
      description:
        "Streamlined operations and developed structured workflows to enhance productivity and organizational efficiency.",
    },
    {
      title: "Creative Direction & Branding",
      description:
        "Directed creative and marketing initiatives, shaping brand identity and delivering engaging user experiences.",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* TITLE */}
        <h2 className="text-[32px] font-bold uppercase tracking-[-0.02em] text-[#F1F1F5] font-[Satoshi] md:text-[40px]">
          Leadership & Skills
        </h2>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                group rounded-xl border border-white/15 p-6
                transition-all duration-300
                hover:border-[#8B5CF6]
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
              "
            >
              {/* TITLE */}
              <h3
                className="
                  text-[20px] font-semibold text-[#F1F1F5]
                  transition-all duration-300 font-[Satoshi]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-[15px] leading-[160%] text-[#F1F1F5]/70 font-[Plus Jakarta Sans]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
