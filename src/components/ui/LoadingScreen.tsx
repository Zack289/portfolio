import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-paper-50 dark:bg-ink-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="font-mono text-sm tracking-widest text-brass-600 dark:text-brass-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.4, times: [0, 0.3, 0.8, 1], repeat: Infinity }}
          >
            ~/loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
