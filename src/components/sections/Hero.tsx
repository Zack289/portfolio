import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, slideInRight } from "@/animations/variants";
import { scrollToSection } from "@/utils/scrollTo";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp} className="font-mono text-sm text-brass-600 dark:text-brass-400">
              ~/{profile.name.toLowerCase().replace(/\s+/g, "-")}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 dark:text-paper-50 sm:text-6xl"
            >
              {profile.name.split(" ")[0]}, crafting
              <br />
              <span className="text-brass-600 dark:text-brass-400">web</span> &amp;{" "}
              <span className="text-signal-600 dark:text-signal-400">mobile</span> experiences.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-200/80"
            >
              {profile.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Button as="a" href={profile.resumeUrl} variant="primary" icon={<Download size={16} />}>
                Resume
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection("#projects")}>
                View projects
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("#contact")} icon={<Mail size={16} />}>
                Contact
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-brass-500/10 blur-2xl dark:bg-brass-400/10" />
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink-700/10 bg-ink-900/5 dark:border-paper-50/10 dark:bg-paper-50/5">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.button
        type="button"
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to about section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-400 dark:text-ink-400"
        // just a gentle bounce to hint there's more below, nothing fancy
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
