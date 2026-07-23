import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { staggerContainer, fadeUp } from "@/animations/variants";

const HOME_PREVIEW_COUNT = 4;

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();
  const previewProjects = projects.slice(0, HOME_PREVIEW_COUNT);

  return (
    <Section id="projects">
      <Container>
        <Heading
          path="~/projects"
          title="Things I've built"
          description="A working set of full-stack and frontend projects. A few of the recent ones below — the rest live on their own page."
        />

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {previewProjects.map((project) => (
            <motion.div key={project.id} variants={fadeUp}>
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </motion.div>
          ))}
        </motion.div>

        {projects.length > HOME_PREVIEW_COUNT && (
          <div className="mt-12 flex justify-center">
            {/* goes to a dedicated page instead of expanding this grid — easier to browse, filter, and search there */}
            <Button variant="secondary" onClick={() => navigate("/projects")}>
              View all projects
            </Button>
          </div>
        )}
      </Container>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}
