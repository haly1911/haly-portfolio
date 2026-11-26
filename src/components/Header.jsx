import { useState } from "react";
import { FaBars, FaCode, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const NAV_IDS = ["intro", "about", "skills", "projects", "experience", "journey", "contact"];
const LANGUAGES = ["vi", "en"];

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="portfolio-wrap flex min-h-19 items-center justify-between gap-5">
        <a
          href="#intro"
          className="flex shrink-0 items-center gap-2.5 font-semibold tracking-normal text-foreground"
        >
          <span className="grid size-9 place-items-center rounded-full border border-primary/35 text-primary">
            <FaCode size={17} />
          </span>
          <span className="text-sm">
            haly<span className="text-primary">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {t.nav.map((label, index) => (
            <a key={NAV_IDS[index]} className="portfolio-link text-xs" href={`#${NAV_IDS[index]}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
            onClick={toggle}
          >
            {theme === "dark" ? <FaSun size={17} /> : <FaMoon size={17} />}
          </button>

          <div
            className="flex h-8 items-center rounded-full border border-border p-0.5"
            role="group"
          >
            {LANGUAGES.map((code) => {
              const isActive = lang === code;
              return (
                <button
                  type="button"
                  key={code}
                  onClick={() => setLang(code)}
                  className={`h-7 min-w-9 rounded-full px-2.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-secondary text-primary shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:hidden cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaXmark size={17} /> : <FaBars size={17} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="flex flex-wrap gap-x-5 gap-y-1 justify-between border-t border-border/70 py-3 px-3 lg:hidden"
        >
          {t.nav.map((label, index) => (
            <a
              key={NAV_IDS[index]}
              onClick={() => setMenuOpen(false)}
              className="portfolio-link py-1.5 text-xs"
              href={`#${NAV_IDS[index]}`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
