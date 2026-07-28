export type Theme = "light" | "dark";

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  location: string;
  email: string;
  resumeUrl: string;
  photoUrl: string;
  focusAreas: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  description: string;
  highlights?: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Languages"
  | "Tools"
  | "Other";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string;
}

export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "UI/UX";
export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  highlights: string[];
  challenges?: string[];
  solutions?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
