import * as SiIcons from "react-icons/si";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = (SiIcons as unknown as Record<string, IconType>)[skill.icon];

  return (
    <Card
      interactive
      className="flex flex-col items-center gap-3 py-6 text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: -4 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-10 w-10 items-center justify-center text-ink-700 dark:text-paper-100"
      >
        {Icon && <Icon size={28} />}
      </motion.div>
      <span className="font-mono text-xs text-ink-700 dark:text-ink-200">{skill.name}</span>
    </Card>
  );
}
