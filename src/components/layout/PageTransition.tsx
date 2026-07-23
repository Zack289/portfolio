import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  // jump to top on every route change — smooth scrolling is for in-page anchors, not full navigations
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
