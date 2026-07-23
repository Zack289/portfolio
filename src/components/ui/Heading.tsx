import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface HeadingProps {
  path: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function Heading({ path, title, description, align = "left", className }: HeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <p className="font-mono text-sm tracking-wide text-brass-600 dark:text-brass-400">
        {path}
      </p>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink-900 dark:text-paper-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-ink-200/80">
          {description}
        </p>
      )}
    </div>
  );
}
