import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-700/10 bg-white/60 p-6 shadow-sm backdrop-blur-sm",
        "dark:border-paper-50/10 dark:bg-ink-800/40",
        interactive &&
          "transition-all duration-300 ease-signature hover:-translate-y-1 hover:shadow-lg hover:border-brass-500/30",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
