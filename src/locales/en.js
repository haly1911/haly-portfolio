export const en = {
  nav: ["Intro", "About", "Skills", "Projects", "Experience", "Journey", "Contact"],
  hero: {
    role: "BACKEND DEVELOPER FRESHER",
    availability: "Open to Backend & Fullstack opportunities",
    hello: "Hello, I'm",
    name: "Ly Phuong Ha",
    intro:
      "I build backend applications with Node.js, NestJS, and relational databases. With a background in International Business and data processing, I'm now pursuing a career in software development.",
    ctaProjects: "View Projects",
    cv: "Request My CV",
    roleTag: "Node.js · NestJS · Backend",
  },
  about: {
    eyebrow: "01 / ABOUT ME",
    title: "A new direction, built on my existing strengths",
    paragraphs: [
      "I'm transitioning into software development after studying International Business and gaining professional experience in data processing and warehouse operations.\n\nI graduated from the University of Economics Ho Chi Minh City (UEH) in 2021 with a degree in Foreign Trade. In my first role, I worked with business registration data, using Microsoft Excel to clean, organize, and standardize information.\n\nFrom 2022 to 2025, I worked in warehouse and distribution operations in Japan. This experience strengthened my discipline, adaptability, and attention to detail.\n\nIn early 2026, I decided to pursue software development and joined CyberSoft's Fullstack JavaScript training program. Through hands-on learning and projects, I discovered a stronger interest in backend development, particularly API development, database design, and server-side logic.\n\nI'm now focused on growing as a Backend Developer, strengthening my technical foundation, and gaining practical experience through real-world projects.",
    ],
    note: "From data processing to backend development, I enjoy bringing structure and clarity to complex processes",
    highlights: {
      expType: "Work experience",
      projects: "Capstone projects",
      learning: "Always learning",
    },
  },
  skills: {
    eyebrow: "02 / MY TOOLKIT",
    title: "Technical skills",
    sub: "Backend development is my primary focus. My frontend knowledge also helps me understand how web applications are built and connected",
    groups: ["Programming Languages", "Backend", "Database", "Frontend & Tools"],
  },

  projectsSection: {
    eyebrow: "03 / WHAT I'VE BUILT",
    title: "Featured projects",
    sub: "My two main capstone projects from CyberSoft, with a closer look at features, technical details and what I learned",
    other: {
      title: "Other projects",
      sub: "Smaller capstone projects from my training",
      items: [
        {
          id: "pinterest-backend",
          title: "Pinterest Clone - Backend Application",
          description:
            "A RESTful API for a Pinterest-inspired platform with JWT and Google sign-in, image feed and search, comments, saved images, profile management and Cloudinary image upload.",
        },
        {
          id: "lumiere-frontend",
          title: "Lumière - Movie Ticket Booking",
          description:
            "A movie ticket booking web app with interactive seat selection and a booking history, plus an admin dashboard to manage users, movies and showtimes.",
        },
      ],
    },
    projectLabel: "CAPSTONE · CYBERSOFT · 2026",
    labels: {
      architecture: "KEY FEATURES",
      implementation: "TECHNICAL DETAILS",
      learned: "WHAT I LEARNED",
      projectLinks: "PROJECT LINKS",
      backend: "Backend Application",
      frontend: "Frontend Application",
      repo: "GitHub Repository",
      docs: "API Documentation",
      live: "Live Demo",
      liveNote: "Live demo",
    },
    items: [
      {
        id: "fiverr-backend",
        title: "Fiverr Clone - Backend Application",
        description:
          "A backend application inspired by Fiverr's freelance marketplace model, where customers can explore services and freelancers can create and manage their service listings.",
        features: [
          "User management and authentication, including Google sign-in",
          "Role-based access control",
          "Category and subcategory management",
          "Gig creation and management",
          "Order and review management",
          "Image upload for gigs and profiles",
        ],
        implementation: [
          "Designed a relational database with MySQL",
          "Built NestJS modules and REST APIs",
          "Used Prisma ORM and DTO validation",
          "Documented APIs with Swagger",
          "Configured the development environment with Docker Compose",
          "Integrated Passport Google OAuth and Cloudinary image upload",
        ],
        learned: [
          "Relational database design",
          "Authentication and authorization",
          "REST API design and development",
          "Setting up development environments with Docker",
          "Third-party OAuth integration and cloud file storage",
        ],
        note: "Swagger API · Local setup instructions",
      },
      {
        id: "skillora-frontend",
        title: "Skillora - Freelance Marketplace",
        description:
          "A freelance marketplace frontend that allows customers to browse services and freelancers to manage their listings and orders.",
        features: [
          "User authentication and protected routes",
          "Service listings and search",
          "Gig and order management",
          "Service review interface",
        ],
        implementation: [
          "Built reusable components with React and Next.js",
          "Managed application state with Zustand",
          "Handled forms with React Hook Form and Zod",
          "Integrated APIs across application modules",
        ],
        learned: ["Global state management", "Form handling and validation", "Frontend API integration"],
      },
    ],
  },

  experience: {
    eyebrow: "04 / EXPERIENCE & EDUCATION",
    title: "Experience & education",
    work: {
      timeline: [
        {
          date: "11/2020 — 10/2021",
          title: "Data Support Executive",
          company: "CRIF D&B Vietnam",
          desc: "Processed, cleaned, and standardized business registration data using Microsoft Excel and internal tools.",
        },
        {
          date: "09/2022 — 10/2025",
          title: "Warehouse & Distribution Associate",
          company: "Fugaku Co., Ltd. · Japan",
          desc: "Worked in a structured warehouse environment, developing discipline and adaptability.",
        },
        {
          date: "11/2026 — Present",
          title: "Focused on Backend Development",
          desc: "Continuing to build my skills, develop projects, and pursue Backend Developer opportunities.",
        },
      ],
    },
    education: {
      label: "Education",
      timeline: [
        {
          date: "09/2017 — 03/2021",
          title: "Bachelor's Degree in International Business · Major in Foreign Trade",
          desc: "University of Economics Ho Chi Minh City (UEH)",
        },
        {
          date: "01/2026 — 11/2026",
          title: "Fullstack JavaScript · CyberSoft",
          desc: "A hands-on Fullstack JavaScript program covering frontend and backend application development.",
        },
      ],
    },
  },
  journey: {
    eyebrow: "05 / MY LEARNING JOURNEY",
    title: "From curiosity to a clear direction",
    paragraphs: [
      "My interest in software development began with a simple curiosity about how applications work behind the interface.",
      "Although my background is outside computer science, I took the initiative to study both frontend and backend development to understand how web applications are built. Through hands-on projects, I discovered that backend development was where my interests lie, and decided to make it my primary focus.",
    ],
    quote:
      "I'm continuously strengthening my backend fundamentals, learning through practical projects, and looking forward to taking on new challenges",
  },
  contact: {
    eyebrow: "06 / GET IN TOUCH",
    title: "LET'S CONNECT",
    text: "I'm currently looking for an opportunity to start my career as a Backend & Fullstack Developer",
    emailCta: "Send me an email",
    resume: "CV · Available upon request",
    reqCv: "Request CV",
  },
  footer: {
    text: "Built with curiosity and a little coffee",
  },
};
