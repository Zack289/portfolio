import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/animations/variants";

export function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper-50 dark:bg-ink-950">
      <Container>
        <motion.div
          className="mx-auto max-w-md text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="font-mono text-sm text-brass-600 dark:text-brass-400">
            404
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-medium text-ink-900 dark:text-paper-50"
          >
            This route doesn't exist.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-sm text-ink-600 dark:text-ink-200/80">
            The page you're looking for was moved, renamed, or never built.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Button as="a" href="/">
              Back to home
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
