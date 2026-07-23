import type { Profile } from "@/types";

// edit this whenever something changes, nothing else in the app needs to be touched
export const profile: Profile = {
  name: "Laxman Bhandari",
  title: "Fullstack Developer",
  tagline: "Building real things with the MERN & PERN stacks",
  intro:
    "I'm a developer who learns by shipping. No professional title behind my name yet — just a growing set of applications I've built end to end, and a habit of digging past the how into the why.",
  location: "Kathmandu, Nepal",
  email: "bhandarilaxman742@gmail.com",
  resumeUrl: "/resume.pdf", // drop your actual resume in /public
  photoUrl: "/photo.jpg",
  focusAreas: [
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Prisma ORM",
  ],
};
