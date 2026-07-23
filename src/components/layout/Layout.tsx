import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper-50 text-ink-900 dark:bg-ink-950 dark:text-paper-50">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
