export function Footer() {
  return (
    <footer className="w-full py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {/* TOP */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <h2 className="text-[40px] font-bold uppercase leading-[90%] tracking-[-0.03em] text-[#F1F1F5] font-[Satoshi] md:text-[64px]">
            LET’S
            <br />
            CONNECT
          </h2>

          <div className="flex flex-wrap items-center gap-8 md:items-center md:gap-10">
            <a
              href="mailto:alayacyacjude@gmail.com"
              className="
        relative inline-block text-[16px] font-semibold text-[#F1F1F5]
        transition-all duration-300
        hover:text-[#8B5CF6]
        hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)]
        font-[Plus Jakarta Sans]

        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-0 after:bg-[#8B5CF6]
        after:transition-all after:duration-300
        hover:after:w-full
      "
            >
              alayacyacjude@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/jude-alayacyac/"
              target="_blank"
              rel="noreferrer"
              className="
        relative inline-block text-[14px] font-regular text-[#F1F1F5]
        transition-all duration-300
        hover:text-[#8B5CF6]
        hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)]
        font-[Plus Jakarta Sans]

        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-0 after:bg-[#8B5CF6]
        after:transition-all after:duration-300
        hover:after:w-full
      "
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/jude.rafael/"
              target="_blank"
              rel="noreferrer"
              className="
        relative inline-block text-[14px] font-regular text-[#F1F1F5]
        transition-all duration-300
        hover:text-[#8B5CF6]
        hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.5)]
        font-[Plus Jakarta Sans]

        after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:w-0 after:bg-[#8B5CF6]
        after:transition-all after:duration-300
        hover:after:w-full
      "
            >
              Instagram
            </a>
          </div>
        </div>

        {/* BOTTOM CENTER */}
        <div className="mt-20 text-center">
          <p className="text-[12px] text-[#F1F1F5]/70 font-[Plus Jakarta Sans]">
            © 2026 Jude Alayacyac. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
