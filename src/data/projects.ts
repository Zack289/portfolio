import type { Project } from "@/types";

// placeholder projects so the section isn't empty — swap urls/images for the real thing
export const projects: Project[] = [
  {
    id: "tomato-frontend",
    title: "Tomato — Multi Vendor E-commerce Platform",
    shortDescription:
      "A full-stack food ordering platform with cart, checkout, and an admin panel for managing menu items and orders.",
    fullDescription:
      "Tomato is a food delivery web app where users browse a restaurant menu, manage a cart, and place orders, while an admin dashboard handles menu and order management in real time.",
    image: "/projects/tomato/tomato.png",
    screenshots: ["/projects/tomato/1.jpg", "/projects/tomato/2.jpg"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Zack289/tomato-frontend",
    liveDemoUrl: "https://tomato-demo.example.com",
    featured: true,
    category: "Frontend",
    status: "In Progress",
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
    id: "spylt-clone",
    title: "Spylt clone",
    shortDescription:
      "A site where you can discover the variety of spylt products",
    fullDescription:
      "Smooth animations with GSAP, Smooth scrolling experience with Lenis, Responsive design for all devices ,Modular component architecture. Modern React 19 with latest features, Optimized Vite build system",
    image: "/projects/spylt-clone/cover.png",
    screenshots: [
      "/projects/spylt-clone/1.png",
      "/projects/spylt-clone/2.png",
      "/projects/spylt-clone/3.png",
      "/projects/spylt-clone/4.png",
      "/projects/spylt-clone/5.png",
    ],
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Recharts"],
    githubUrl: "https://github.com/Zack289/spylt-clone",
    liveDemoUrl: "https://spylt-clone-ecru.vercel.app/",
    featured: true,
    category: "Frontend",
    status: "Completed",
    year: "2025",
    highlights: [
      "Smooth animations with GSAP",
      "Smooth scrolling experience with Lenis",
      "PostgreSQL schema designed for reporting queries",
    ],
  },
  {
    id: "ai-site-builder",
    title: "AI-Site Builder",
    shortDescription: "A platform where you can build the site as your desire.",
    fullDescription:
      "A responsive platform where AI will help you to build the site you want to create.",
    image: "/projects/ai-site-builder/cover.png",
    technologies: ["React", "Express", "Node.js", "PostGres"],
    githubUrl: "https://github.com/Zack289/ai-site-builder",
    liveDemoUrl: "https://ai-site-builder-khaki.vercel.app/",
    featured: true,
    category: "Full Stack",
    status: "Completed",
    year: "2025",
    highlights: [
      "AI integrated site builder",
      "Enhancement in prompt using AI",
      "Responsive design for all devices",
    ],
  },
  {
    id: "zentry-clone",
    title: "Zentry Clone",
    shortDescription:
      "A platform where we can learn the details about the zentry",
    fullDescription: "No description needed",
    image: "/projects/zentry-clone/cover.png",
    technologies: ["React", "GSAP", "JavaScript"],
    githubUrl: "https://github.com/Zack289/zentry-clone",
    liveDemoUrl: "https://zentry-clone-inky.vercel.app/",
    featured: true,
    category: "Frontend",
    status: "Completed",
    year: "2025",
    highlights: [
      "GSAP helped in this for the enhancement of the project",
      "Users can learn about the lunches.",
    ],
  },
  {
    id: "fizzi",
    title: "Fizzi",
    shortDescription:
      "A messaging app with live conversations, typing indicators, and online-status presence.",
    fullDescription:
      "A realtime chat application supporting one-on-one conversations, typing indicators, and presence, built around a websocket connection layer.",
    image: "/projects/fizzi/cover.png",
    technologies: ["React", "Tailwind", "GSAP", "Prismic"],
    githubUrl: "https://github.com/Zack289/fizzi-nextjs",
    liveDemoUrl: "https://fizzi-nextjs.vercel.app/",
    featured: true,
    category: "Frontend",
    status: "Completed",
    year: "2025",
    highlights: [
      "GSAP helped in this for the enhancement of the project",
      "Responsive design for all devices",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription:
      "This site — a React and TypeScript portfolio built with a component-driven, data-first architecture.",
    fullDescription:
      "The portfolio you're viewing right now: a React, TypeScript, and Tailwind CSS build with content fully separated from UI, so every section can be updated by editing data files.",
    image: "/projects/portfolio/cover.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Zack289/portfolio",
    liveDemoUrl: "https://laxmanbhandari.com.np/",
    featured: false,
    category: "Frontend",
    status: "Completed",
    year: "2026",
    highlights: [
      "Data-driven sections — no hardcoded content in components",
      "Light and dark themes with system-preference detection",
    ],
  },
  {
    id: "macbook-clone",
    title: "Macbook clone",
    shortDescription:
      "A modern, interactive product landing page for showcasing a MacBook experience using React, Vite, Tailwind CSS, GSAP, and Three.js.",
    fullDescription:
      "This project delivers a polished, animated presentation with a responsive layout, scroll-based storytelling, and an immersive 3D product viewer.",
    image: "/projects/macbook-clone/cover.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "GSAP + ScrollTrigger",
      "React Three Fiber + React Three Drei",
    ],
    githubUrl: "https://github.com/Zack289/macbook_clone",
    liveDemoUrl: "https://macbook-clone-drab.vercel.app/",
    featured: true,
    category: "Frontend",
    status: "Completed",
    year: "2026",
    highlights: [
      "Responsive landing page experience",
      "Interactive 3D MacBook product showcase",
      "Smooth scroll-triggered animations",
      "Modern UI sections for highlights, performance, and features",
      "Lightweight and fast production build with Vite",
    ],
  },
  {
    id: "productify",
    title: "Productify",
    shortDescription:
      "A modern, interactive product landing page for showcasing a platform for the items to be sold",
    fullDescription:
      "This project delivers a polished, animated presentation with a responsive layout, scroll-based storytelling",
    image: "/projects/productify/cover.png",
    technologies: [
      "React",
      "TypeScript + Js",
      "Tailwind CSS",
      "nodejs",
      "Express",
      "PostGres",
    ],
    githubUrl: "https://github.com/Zack289/productify",
    liveDemoUrl: "https://productify-gold.vercel.app/",
    featured: true,
    category: "Full Stack",
    status: "Completed",
    year: "2025",
    highlights: [
      "Responsive landing page experience",
      "Interactive design using tailwind",
      "Smooth scroll-triggered animations",
      "Modern UI sections for highlights, performance, and features",
      "Lightweight and fast production build with Vite",
      "Users can add products and edit as they want and so on.....",
    ],
  },
  {
    id: "gsap-mojito",
    title: "Mojito",
    shortDescription:
      "A modern, interactive web application showcasing cocktails and mixology. Built with React, Vite, and enhanced with smooth animations and responsive design.",
    fullDescription:
      "Mojito Showcase is a sleek web application dedicated to displaying cocktail recipes, information, and a beautiful user experience. The project features smooth scrolling, animated transitions, and a fully responsive design that works seamlessly across all devices.",
    image: "/projects/mojito/cover.png",
    technologies: ["React", "JS", "Tailwind CSS", "GSAP ", "Lenis ", "Vite "],
    githubUrl: "https://github.com/Zack289/gsap-mojito",
    liveDemoUrl: "https://gsap-mojito-ados.vercel.app/",
    featured: true,
    category: "Frontend",
    status: "Completed",
    year: "2025",
    highlights: [
      "Interactive Animations: Powered by GSAP (GreenSock Animation Platform) for smooth, performant animations",
      "Smooth Scrolling: Integrated with Lenis for buttery-smooth scroll experiences",
      "Responsive Design: Mobile-first approach using Tailwind CSS for all screen sizes",
      "Modern React: Built with React 19 and Vite for fast development and optimized production builds",
      "Lightweight and fast production build with Vite",
      "Component-Based Architecture: Well-organized component structure for maintainability",
    ],
  },

  {
    id: "tomato-backend",
    title: "Tomato — Multi Vendor E-commerce Platform",
    shortDescription:
      "A full-stack food ordering platform with cart, checkout, and an admin panel for managing menu items and orders.",
    fullDescription:
      "Tomato is a food delivery web app where users browse a restaurant menu, manage a cart, and place orders, while an admin dashboard handles menu and order management in real time.",
    image: "/projects/tomato/tomato.png",
    screenshots: ["/projects/tomato/1.jpg", "/projects/tomato/2.jpg"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Zack289/tomato-services",
    liveDemoUrl: "https://tomato-demo.example.com",
    featured: true,
    category: "Backend",
    status: "In Progress",
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
];
