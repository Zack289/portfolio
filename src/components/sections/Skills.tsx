import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SkillCard } from "@/components/ui/SkillCard";
import { skills } from "@/data/skills";
import { staggerContainer, fadeUp } from "@/animations/variants";
import type { SkillCategory } from "@/types";

const categories: SkillCategory[] = ["Frontend", "Languages", "Backend", "Database", "Tools", "Other"];

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Heading path="~/skills" title="Tech stack" />

        <div className="mt-12 space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                  {category}
                </p>
                <motion.div
                  className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
                  variants={staggerContainer(0.05)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {categorySkills.map((skill) => (
                    <motion.div key={skill.id} variants={fadeUp}>
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
