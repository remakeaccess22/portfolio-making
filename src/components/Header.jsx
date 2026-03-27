import { Time } from "./Time";

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="grid grid-cols-3 items-center">
          {/* LEFT: NAME */}
          <div className="justify-self-start">
            <a
              href="#"
              className="text-l font-extrabold tracking-tight text-[#F1F1F5] font-[Satoshi]"
            >
              JUDE ALAYACYAC
            </a>
          </div>

          {/* CENTER: LOCATION + TIME */}
          <Time />

          {/* RIGHT: NAV */}
          <nav className="justify-self-end">
            <ul className="flex items-center gap-8 md:gap-12">
              <li>
                <a
                  href="#about"
                  className="text-l font-extrabold text-[#F1F1F5] transition hover:text-[#8B5CF6] font-[Satoshi]"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-l font-extrabold text-[#F1F1F5] transition hover:text-[#8B5CF6] font-[Satoshi]"
                >
                  WORK
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
