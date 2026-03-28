import { ArrowDown } from "lucide-react";
import { HeroMotion } from "./HeroMotion";

export function HeroPage() {
  const tags = [
    "Entrepreneurship",
    "Design",
    "Technology",
    "Management",
    "Systems Thinking",
    "R&D",
  ];

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-16 sm:min-h-[calc(100vh-96px)] sm:py-20 md:px-10"
    >
      {/* Wider container on desktop */}
      <div className="w-full max-w-5xl text-center">
        {/* Subtitle */}
        <p
          className="
          mb-2 text-[20px] leading-[110%] tracking-[-0.01em]
          text-[#F1F1F5] font-[Satoshi]
          sm:text-[24px]
          md:text-[28px]
          lg:text-[32px]
        "
        >
          Hi I am
        </p>

        {/* Name */}
        <HeroMotion />

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-6 sm:gap-x-4 sm:gap-y-3">
          <span className="text-[16px] leading-[160%] text-[#F1F1F5] font-[Plus Jakarta Sans] sm:text-[14px] md:text-[20px]">
            I design and build systems, products, and businesses that create
            real-world impact.
          </span>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center sm:mt-10 md:mt-16">
          <a
            href="#work"
            className="
      inline-flex items-center justify-center gap-2
      rounded-lg bg-[#8B5CF6]
      px-5 py-2.5
      text-[13px] font-semibold uppercase tracking-wide
      text-[#F1F1F5] transition
      hover:bg-[#A855F7]
      hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]
      font-[Plus Jakarta Sans]

      sm:gap-3 sm:px-6 sm:py-3 sm:text-[14px]
      md:text-[16px]
    "
          >
            <span>View Projects</span>
            <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
