import * as SiIcons from "react-icons/si";
import type { IconType } from "react-icons";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { scrollToTop } from "@/utils/scrollTo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700/10 py-10 dark:border-paper-50/10">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-ink-500 dark:text-ink-300">
          © {year} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => {
            const Icon = (SiIcons as unknown as Record<string, IconType>)[social.icon];
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-ink-600 transition-colors hover:text-brass-600 dark:text-ink-300 dark:hover:text-brass-400"
              >
                {Icon && <Icon size={16} />}
              </a>
            );
          })}
          <ThemeToggle />
          {/* <button
            type="button"
            onClick={scrollToTop}
            className="font-mono text-xs text-ink-600 underline-offset-4 hover:underline dark:text-ink-300"
          >
            back to top
          </button> */}
        </div>
      </Container>
    </footer>
  );
}
