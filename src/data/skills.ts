import type { Skill } from "@/types";

// `icon` maps to a react-icons/si component name, resolved in SkillCard.
export const skills: Skill[] = [
  { id: "react", name: "React", category: "Frontend", icon: "SiReact" },
  { id: "nextjs", name: "Next.js", category: "Frontend", icon: "SiNextdotjs" },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    icon: "SiTypescript",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    icon: "SiJavascript",
  },
  { id: "html5", name: "HTML", category: "Frontend", icon: "SiHtml5" },
  { id: "css3", name: "CSS", category: "Frontend", icon: "SiCss3" },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "SiTailwindcss",
  },

  { id: "c", name: "C", category: "Languages", icon: "SiC" },
  { id: "cpp", name: "C++", category: "Languages", icon: "SiCplusplus" },

  { id: "nodejs", name: "Node.js", category: "Backend", icon: "SiNodedotjs" },
  { id: "express", name: "Express.js", category: "Backend", icon: "SiExpress" },

  { id: "mongodb", name: "MongoDB", category: "Database", icon: "SiMongodb" },
  { id: "mysql", name: "MySQL", category: "Database", icon: "SiMysql" },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    icon: "SiPostgresql",
  },
  { id: "prisma", name: "Prisma", category: "Database", icon: "SiPrisma" },

  { id: "git", name: "Git", category: "Tools", icon: "SiGit" },
  { id: "github", name: "GitHub", category: "Tools", icon: "SiGithub" },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    icon: "SiVisualstudiocode",
  },
  { id: "postman", name: "Postman", category: "Tools", icon: "SiPostman" },
  { id: "vite", name: "Vite", category: "Tools", icon: "SiVite" },
  { id: "npm", name: "npm", category: "Tools", icon: "SiNpm" },
  { id: "figma", name: "Figma", category: "Tools", icon: "SiFigma" },

  { id: "restapi", name: "REST API", category: "Other", icon: "SiSwagger" },
  { id: "jwt", name: "JWT", category: "Other", icon: "SiJsonwebtokens" },
  {
    id: "responsive",
    name: "Responsive Design",
    category: "Other",
    icon: "SiCss3",
  },
];
