import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-50 h-[2px] w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-brass-500 dark:bg-brass-400"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
