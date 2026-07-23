import { SearchX } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = "No projects match your search." }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-ink-700/15 py-20 text-center dark:border-paper-50/15">
      <SearchX size={32} className="text-ink-400 dark:text-ink-500" />
      <div>
        <p className="font-display text-lg font-medium text-ink-800 dark:text-paper-100">
          Nothing here yet
        </p>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{message}</p>
      </div>
    </div>
  );
}
