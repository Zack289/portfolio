import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
      <Card interactive className="flex h-full flex-col overflow-hidden p-0 text-sm">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="group flex flex-1 flex-col text-left"
          aria-label={`View details for ${project.title}`}
        >
          <div className="relative aspect-video overflow-hidden bg-ink-900/5 dark:bg-paper-50/5">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-signature group-hover:scale-105"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
            <div className="absolute left-2.5 top-2.5 flex gap-1.5">
              {project.featured && (
                <Badge tone="brass" className="gap-1 px-2 py-0.5 text-[10px]">
                  <Star size={9} /> Featured
                </Badge>
              )}
              <Badge tone={project.status === "Completed" ? "signal" : "neutral"} className="px-2 py-0.5 text-[10px]">
                {project.status}
              </Badge>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 p-4">
            <h3 className="font-display text-base font-medium leading-snug text-ink-900 dark:text-paper-50">
              {project.title}
            </h3>
            <p className="line-clamp-2 text-xs leading-relaxed text-ink-600 dark:text-ink-200/75">
              {project.shortDescription}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} className="px-2 py-0.5 text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </button>

        <div className="flex items-center gap-3 border-t border-ink-700/10 px-4 py-3 dark:border-paper-50/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50"
            onClick={(event) => event.stopPropagation()}
          >
            <Github size={13} /> Code
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50"
              onClick={(event) => event.stopPropagation()}
            >
              <ExternalLink size={13} /> Live demo
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
