import type { Project } from "@/types";

// placeholder projects so the section isn't empty — swap urls/images for the real thing
export const projects: Project[] = [
  {
    id: "tomato-food-delivery",
    title: "Tomato — Food Delivery Platform",
    shortDescription:
      "A full-stack food ordering platform with cart, checkout, and an admin panel for managing menu items and orders.",
    fullDescription:
      "Tomato is a food delivery web app where users browse a restaurant menu, manage a cart, and place orders, while an admin dashboard handles menu and order management in real time.",
    image: "/projects/tomato/cover.jpg",
    screenshots: ["/projects/tomato/1.jpg", "/projects/tomato/2.jpg"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/your-username/tomato-food-delivery",
    liveDemoUrl: "https://tomato-demo.example.com",
    featured: true,
    category: "Full Stack",
    status: "Completed",
    year: "2025",
    highlights: [
      "Cart and checkout flow with persisted state",
      "Admin panel for live order and menu management",
      "JWT-based authentication for users and admins",
    ],
    challenges: [
      "Keeping order status in sync between the admin panel and the customer view.",
    ],
    solutions: [
      "Introduced polling on the order feed, later structured for an easy swap to websockets.",
    ],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    shortDescription:
      "A personal finance tracker with category breakdowns, monthly summaries, and data visualizations.",
    fullDescription:
      "A dashboard for logging income and expenses, tagging them by category, and visualizing spending trends over time with interactive charts.",
    image: "/projects/expense-tracker/cover.jpg",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Recharts"],
    githubUrl: "https://github.com/your-username/expense-tracker",
    liveDemoUrl: "https://expense-tracker-demo.example.com",
    featured: true,
    category: "Full Stack",
    status: "Completed",
    year: "2025",
    highlights: [
      "Category-based budgeting with monthly rollovers",
      "Chart-based visual breakdown of spending",
      "PostgreSQL schema designed for reporting queries",
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription:
      "A storefront with product filtering, a persistent cart, and a streamlined checkout experience.",
    fullDescription:
      "A responsive storefront covering product discovery, filtering by category and price, cart management, and a multi-step checkout flow.",
    image: "/projects/ecommerce/cover.jpg",
    technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/your-username/ecommerce-platform",
    liveDemoUrl: "https://ecommerce-demo.example.com",
    featured: true,
    category: "Full Stack",
    status: "In Progress",
    year: "2026",
    highlights: [
      "Faceted product filtering and search",
      "Cart state persisted across sessions",
      "Modular checkout built for future payment providers",
    ],
  },
  {
    id: "learning-management-system",
    title: "Learning Management System",
    shortDescription:
      "A course platform for enrolling in classes, tracking progress, and submitting assignments.",
    fullDescription:
      "An LMS where students enroll in courses, track lesson progress, and submit assignments, with an instructor view for managing course content.",
    image: "/projects/lms/cover.jpg",
    technologies: ["React", "Express", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/your-username/learning-management-system",
    featured: false,
    category: "Full Stack",
    status: "In Progress",
    year: "2026",
    highlights: [
      "Role-based views for students and instructors",
      "Progress tracking across multi-lesson courses",
    ],
  },
  {
    id: "realtime-chat-app",
    title: "Realtime Chat Application",
    shortDescription:
      "A messaging app with live conversations, typing indicators, and online-status presence.",
    fullDescription:
      "A realtime chat application supporting one-on-one conversations, typing indicators, and presence, built around a websocket connection layer.",
    image: "/projects/chat-app/cover.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/your-username/realtime-chat-app",
    liveDemoUrl: "https://chat-app-demo.example.com",
    featured: false,
    category: "Full Stack",
    status: "Completed",
    year: "2025",
    highlights: [
      "Websocket-based realtime messaging",
      "Typing indicators and online presence",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription:
      "This site — a React and TypeScript portfolio built with a component-driven, data-first architecture.",
    fullDescription:
      "The portfolio you're viewing right now: a React, TypeScript, and Tailwind CSS build with content fully separated from UI, so every section can be updated by editing data files.",
    image: "/projects/portfolio/cover.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/your-username/portfolio",
    liveDemoUrl: "https://your-portfolio.example.com",
    featured: false,
    category: "Frontend",
    status: "Completed",
    year: "2026",
    highlights: [
      "Data-driven sections — no hardcoded content in components",
      "Light and dark themes with system-preference detection",
    ],
  },
];
