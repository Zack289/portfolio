import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/utils/cn";

const filters: Array<ProjectCategory | "All"> = ["All", "Frontend", "Backend", "Full Stack", "UI/UX"];

export function AllProjects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.category.toLowerCase().includes(normalizedQuery) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(normalizedQuery));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="pt-28 pb-24">
      <Container>
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50"
        >
          <ArrowLeft size={14} /> back to home
        </Link>

        <Heading
          path="~/projects/all"
          title="All projects"
          description="Everything I've built so far, in one place — filter by category or search by technology."
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full px-4 py-2 font-mono text-xs transition-colors",
                  activeFilter === filter
                    ? "bg-ink-900 text-paper-50 dark:bg-brass-400 dark:text-ink-950"
                    : "border border-ink-700/15 text-ink-600 hover:border-brass-500/40 dark:border-paper-50/15 dark:text-ink-200",
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title or tech"
              aria-label="Search projects"
              className="w-full rounded-full border border-ink-700/15 bg-transparent py-2 pl-9 pr-4 text-sm text-ink-800 placeholder:text-ink-400 focus:border-brass-500/50 focus:outline-none dark:border-paper-50/15 dark:text-paper-100"
            />
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="mt-10">
            <EmptyState message="Try a different category or search term." />
          </div>
        )}
      </Container>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
