import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleTheme } from "../../features/theme";
import { NAV_ITEMS, SECTION_IDS } from "../../utils/constants";
import { useScrollspy } from "../../hooks/useScrollspy";
import { cn } from "../../utils/cn";

const sectionIds = Object.values(SECTION_IDS);

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector((state) => state.theme.mode);
  const activeSection = useScrollspy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 shadow-sm backdrop-blur-lg dark:bg-slate-900/80"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-xl font-bold text-slate-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
        >
          Samuel<span className="text-primary-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                )}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="ml-2 rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
          >
            {themeMode === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
          >
            {themeMode === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded-lg p-2.5 text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 dark:bg-slate-900/95 md:hidden",
          isMobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-2 px-4 pt-8">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={cn(
                  "w-full rounded-lg px-6 py-3 text-center text-lg font-medium transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};
