import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/education";
import { staggerContainer, fadeUp } from "@/animations/variants";

export function Education() {
  return (
    <Section id="education">
      <Container>
        <Heading path="~/education" title="Education & self-study log" />

        <motion.ol
          className="relative mt-12 space-y-10 border-l border-ink-700/15 pl-8 dark:border-paper-50/15"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((entry) => (
            <motion.li key={entry.id} variants={fadeUp} className="relative">
              <span className="absolute -left-[2.32rem] top-1.5 h-3 w-3 rounded-full bg-brass-500 ring-4 ring-paper-50 dark:bg-brass-400 dark:ring-ink-950" />

              <p className="font-mono text-xs tracking-wide text-brass-600 dark:text-brass-400">
                {entry.startYear} — {entry.endYear}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium text-ink-900 dark:text-paper-50">
                {entry.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{entry.institution}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600 dark:text-ink-200/80">
                {entry.description}
              </p>

              {entry.highlights && (
                <ul className="mt-4 space-y-1.5">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-200/70"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}
