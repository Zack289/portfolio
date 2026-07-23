import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { staggerContainer, fadeUp } from "@/animations/variants";

const principles = [
  {
    title: "Learning in public",
    body: "Every project starts from a gap in my own understanding — Kafka, virtualization, middleware — and ends as something shipped, not just studied.",
  },
  {
    title: "Problem solving first",
    body: "I care more about tracing a bug to its root cause than patching the symptom. That habit shapes how I structure code from the start.",
  },
  {
    title: "Full-stack curiosity",
    body: "Comfortable moving between a React component and a PostgreSQL schema — the MERN and PERN stacks are where I do most of my building.",
  },
];

export function About() {
  return (
    <Section id="about">
      <Container>
        <Heading
          path="~/about"
          title="No job title yet. A lot already built."
          description="I don't have a company name to lean on, so I let the work speak instead — a growing list of full-stack projects, a habit of chasing concepts I don't yet understand, and a stack I keep sharpening."
        />

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={fadeUp}>
              <Card interactive className="h-full">
                <h3 className="font-display text-lg font-medium text-ink-900 dark:text-paper-50">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-200/80">
                  {principle.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2">
          {profile.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-ink-700/10 px-4 py-2 font-mono text-xs text-ink-600 dark:border-paper-50/10 dark:text-ink-200"
            >
              {area}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
