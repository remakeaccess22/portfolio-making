import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Time } from "./Time";
import { NavItem } from "./NavItem";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="grid grid-cols-2 items-center md:grid-cols-3">
          {/* LEFT: NAME */}
          <div className="justify-self-start text-2xl font-bold">
            <NavItem href="#home">JD.</NavItem>
          </div>

          {/* CENTER: LOCATION + TIME (desktop only) */}
          <div className="hidden md:block">
            <Time />
          </div>

          {/* RIGHT: DESKTOP NAV */}
          <nav className="hidden justify-self-end md:block">
            <ul className="flex items-center gap-8 md:gap-12">
              <li>
                <NavItem href="#about">ABOUT</NavItem>
              </li>
              <li>
                <NavItem href="#work">WORK</NavItem>
              </li>
            </ul>
          </nav>

          {/* RIGHT: MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="justify-self-end text-[#F1F1F5] transition hover:text-[#8B5CF6] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0A0A0F]/95 p-6 backdrop-blur md:hidden">
            <div className="mb-6">
              <Time />
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className="block text-lg font-bold text-[#F1F1F5] transition hover:text-[#8B5CF6] font-[Satoshi]"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    onClick={closeMenu}
                    className="block text-lg font-bold text-[#F1F1F5] transition hover:text-[#8B5CF6] font-[Satoshi]"
                  >
                    WORK
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
