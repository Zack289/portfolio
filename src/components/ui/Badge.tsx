import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Tone = "neutral" | "brass" | "signal";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  tone?: Tone;
}

const toneStyles: Record<Tone, string> = {
  neutral: "bg-ink-900/5 text-ink-700 dark:bg-paper-50/10 dark:text-ink-200",
  brass:
    "bg-brass-500/10 text-brass-600 dark:bg-brass-400/15 dark:text-brass-300",
  signal:
    "bg-signal-500/10 text-signal-600 dark:bg-signal-500/15 dark:text-signal-400",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs tracking-wide",
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
