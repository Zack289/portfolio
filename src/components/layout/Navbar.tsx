import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useClickOutside } from "@/hooks/useClickOutside";
import { scrollToSection } from "@/utils/scrollTo";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const activeId = useActiveSection(navigation.map((item) => item.id));
  const scrollProgress = useScrollProgress();
  const isScrolled = scrollProgress > 0.02;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // tapping anywhere outside the header (including the mobile panel) closes the menu
  useClickOutside(headerRef, () => setIsMenuOpen(false), isMenuOpen);

  function handleNavigate(href: string) {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      // not on the homepage — go there first, then scroll once the sections exist
      navigate("/");
      setTimeout(() => scrollToSection(href), 50);
      return;
    }

    scrollToSection(href);
  }

  function handleLogoClick() {
    if (pathname !== "/") {
      navigate("/");
      return;
    }
    scrollToSection("#hero");
  }

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300 ease-signature",
        isScrolled
          ? "border-b border-ink-700/10 bg-paper-50/80 backdrop-blur-md dark:border-paper-50/10 dark:bg-ink-950/80"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <button
            type="button"
            onClick={handleLogoClick}
            className="font-display text-lg font-medium text-ink-900 dark:text-paper-50"
          >
            {profile.name.split(" ")[0]}
            <span className="text-brass-500">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className={cn(
                    "rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors",
                    pathname === "/" && activeId === item.id
                      ? "text-brass-600 dark:text-brass-400"
                      : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50",
                  )}
                  aria-current={pathname === "/" && activeId === item.id ? "true" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-700/15 text-ink-700 dark:border-paper-50/15 dark:text-ink-200 md:hidden"
              onPointerDown={(event) => {
                event.preventDefault();
                toggleMenu();
              }}
              onClick={(event) => {
                event.preventDefault();
              }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="border-t border-ink-700/10 bg-paper-50/95 backdrop-blur-md dark:border-paper-50/10 dark:bg-ink-950/95 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Container>
              <ul className="flex flex-col py-4">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavigate(item.href)}
                      className={cn(
                        "w-full rounded-lg px-3 py-3 text-left font-mono text-sm",
                        pathname === "/" && activeId === item.id
                          ? "text-brass-600 dark:text-brass-400"
                          : "text-ink-700 dark:text-ink-200",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
