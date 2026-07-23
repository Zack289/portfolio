import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { fadeUp } from "@/animations/variants";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}
