import React from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { NavItem } from "../../types/portfolio";

type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  onToggleTheme: () => void;
  resumeFile: string;
};

function Navbar({
  navItems,
  activeSection,
  menuOpen,
  setMenuOpen,
  isDark,
  onToggleTheme,
  resumeFile,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-300/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-bold tracking-[0.24em] text-cyan-700 dark:text-cyan-300 sm:text-base">
          SAI KRISHNA SANGEETHA
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-300/80 bg-white/80 p-1.5 shadow-sm dark:border-white/10 dark:bg-slate-900/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                activeSection === item.href
                  ? "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="ml-1 rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 px-4 py-4 dark:border-white/10 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  activeSection === item.href
                    ? "text-cyan-600 dark:text-cyan-300"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
