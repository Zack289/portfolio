import { ExternalLink, Github } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Modal
      isOpen={project !== null}
      onClose={onClose}
      title={project?.title ?? ""}
    >
      {project && (
        <div className="space-y-6">
          <div className="aspect-[16/9] overflow-hidden rounded-xl bg-ink-900/5 dark:bg-paper-50/5">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.opacity = "0";
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} tone="brass">
                {tech}
              </Badge>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
              Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-ink-200/85">
              {project.fullDescription}
            </p>
          </div>

          {project.highlights.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Features
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200/85"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Challenges
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.challenges.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink-700 dark:text-ink-200/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.solutions && project.solutions.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-ink-500 dark:text-ink-400">
                Solutions
              </h4>
              <ul className="mt-2 space-y-1.5">
                {project.solutions.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink-700 dark:text-ink-200/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              icon={<Github size={16} />}
            >
              Repository
            </Button>
            {project.liveDemoUrl && (
              <Button
                as="a"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<ExternalLink size={16} />}
              >
                Live demo
              </Button>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
