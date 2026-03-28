import { skillsData } from "../../data/skillsData";

function SkillCard({ icon, name }) {
  return (
    <div
      className="
        group
        flex aspect-square w-full flex-col items-center justify-center
        rounded-xl border border-white/20
        transition-all duration-300
        hover:border-[#8B5CF6]
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
      "
    >
      <img
        src={icon}
        alt={name}
        className="
          h-12 w-12 object-contain
          transition-all duration-300
          group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]
        "
      />

      <p className="mt-5 text-center text-[16px] uppercase tracking-wide text-[#F1F1F5]/70 font-[Plus Jakarta Sans]">
        {name}
      </p>
    </div>
  );
}

export function SkillsTools() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-[40px] font-bold text-[#F1F1F5] font-[Satoshi]">
          TECHNICAL SKILLS & TOOLS
        </h2>

        <div className="mt-10 space-y-12">
          {skillsData.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-[24px] text-[#F1F1F5] font-[Satoshi]">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {section.items.map((item) => (
                  <SkillCard
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
