import type { Profile } from "@/types";

// edit this whenever something changes, nothing else in the app needs to be touched
export const profile: Profile = {
  name: "Laxman Bhandari",
  title: "Fullstack & Mobile Developer",
  tagline: "Building web products and mobile apps with modern stacks",
  intro:
    "I'm a developer who learns by shipping. I build end-to-end web apps and cross-platform mobile experiences with React, Next.js, Node.js, and React Native, and I enjoy digging past the how into the why.",
  location: "Kathmandu, Nepal",
  email: "bhandarilaxman742@gmail.com",
  resumeUrl: "/resume.pdf", // drop your actual resume in /public
  photoUrl: "/photo.jpeg",
  focusAreas: [
    "React & Next.js",
    "React Native",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Prisma ORM",
  ],
};
