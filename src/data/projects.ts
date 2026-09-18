// Every field but `tags` is a translation key. `shortDescription` is the ~150
// character version, used as the meta description. `keywords` is optional: a
// project that does not set its own falls back to the shared list for the
// section, which is right for the exam projects and wrong for the case
// studies, whose subjects have nothing in common with it.
export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  keywords?: string;
  // Link-preview card, 1200x630, built from the case study's own diagram.
  // Projects without one fall back to the portrait used everywhere else.
  image?: string;
  tags: string[];
  status: string;
  github: string;
  demo: string;
  paper?: string;
  year: string;
  favourite?: boolean;
}

// The case a company recognises itself in, pointed to from the home hero and
// shown beside the opening of /development.
export const FEATURED_CASE_SLUG = "mgp-gestione-produzione";

// Listed in display order, which is not by year.
export const projects: Project[] = [
  {
    slug: "mgp-gestione-produzione",
    title: "data.projects.mgp.title",
    description: "data.projects.mgp.description",
    shortDescription: "data.projects.mgp.shortDescription",
    keywords: "data.projects.mgp.keywords",
    image: "/og/mgp-gestione-produzione.png",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "MySQL",
      "Docker",
      "Kubernetes",
      "OPC-UA",
      "MiniZinc",
      "OR-Tools",
    ],
    status: "status.expanding",
    github: "",
    demo: "",
    year: "2026",
    favourite: true,
  },
  {
    slug: "freelance-hub",
    title: "data.projects.freelanceHub.title",
    description: "data.projects.freelanceHub.description",
    shortDescription: "data.projects.freelanceHub.shortDescription",
    keywords: "data.projects.freelanceHub.keywords",
    image: "/og/freelance-hub.png",
    tags: [
      "Python",
      "FastAPI",
      "GraphQL",
      "Nuxt",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Ollama",
      "DevSecOps",
    ],
    status: "status.v1Released",
    github: "",
    demo: "",
    year: "2026",
    favourite: true,
  },
  {
    slug: "photography-delivery",
    title: "data.projects.photographyDelivery.title",
    description: "data.projects.photographyDelivery.description",
    shortDescription: "data.projects.photographyDelivery.shortDescription",
    image: "/og/photography-delivery.png",
    tags: [
      "Web Development",
      "FastAPI",
      "Nuxt",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    status: "status.beyondPrototype",
    github: "",
    demo: "",
    year: "2026",
    favourite: true,
  },
  {
    slug: "personal-website",
    title: "data.projects.personalWebsite.title",
    description: "data.projects.personalWebsite.description",
    shortDescription: "data.projects.personalWebsite.shortDescription",
    keywords: "data.projects.personalWebsite.keywords",
    image: "/og/personal-website.png",
    tags: ["Web Development", "React", "TypeScript", "Tailwind CSS"],
    status: "status.inProgress",
    github: "https://github.com/simonecolli/simonecolli.github.io",
    demo: "https://www.simonecolli.com",
    year: "2025-2026",
  },
  {
    slug: "quantum-portfolio-optimization",
    title: "data.projects.quantumPortfolioOptimization.title",
    description: "data.projects.quantumPortfolioOptimization.description",
    shortDescription: "data.projects.quantumPortfolioOptimization.shortDescription",
    image: "/og/quantum-portfolio-optimization.png",
    tags: ["Research", "Quantum Computing", "Finance", "Python", "Exam"],
    status: "status.completed",
    github: "https://github.com/simonecolli/quantum-portfolio-optimization",
    demo: "",
    year: "2025",
  },
  {
    slug: "academic-guarantee-optimization",
    title: "data.projects.academicGuaranteeOptimization.title",
    description: "data.projects.academicGuaranteeOptimization.description",
    shortDescription: "data.projects.academicGuaranteeOptimization.shortDescription",
    image: "/og/academic-guarantee-optimization.png",
    tags: ["Research", "Answer set programming", "Clingo", "Python", "Exam"],
    status: "status.completed",
    github: "https://github.com/simonecolli/ottimizzazione-garanti-accademici",
    demo: "",
    year: "2025",
  },
  {
    slug: "pandelos-plus",
    title: "data.projects.pandelosPlus.title",
    description: "data.projects.pandelosPlus.description",
    shortDescription: "data.projects.pandelosPlus.shortDescription",
    image: "/og/pandelos-plus.png",
    tags: ["Research", "C++", "Python", "Docker"],
    status: "status.published",
    github: "https://github.com/simonecolli/PanDelos-plus/tree/main",
    demo: "",
    paper: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1014724",
    year: "2024-2026",
    favourite: true,
  },
  {
    slug: "deep-neural-network-library",
    title: "data.projects.deepNeuralNetworkLibrary.title",
    description: "data.projects.deepNeuralNetworkLibrary.description",
    shortDescription: "data.projects.deepNeuralNetworkLibrary.shortDescription",
    image: "/og/deep-neural-network-library.png",
    tags: ["Neural Networks", "C++"],
    status: "status.completed",
    github: "https://github.com/unipr-org/deep-neural-network",
    demo: "",
    year: "2024",
  },
  {
    slug: "unipr-org",
    title: "data.projects.uniprOrg.title",
    description: "data.projects.uniprOrg.description",
    shortDescription: "data.projects.uniprOrg.shortDescription",
    image: "/og/unipr-org.png",
    tags: ["Open Source", "Community", "Collaboration", "GitHub"],
    status: "status.inProgress",
    github: "https://github.com/unipr-org",
    demo: "https://unipr-org.github.io/",
    year: "2023",
    favourite: true,
  },
  {
    slug: "maze-project",
    title: "data.projects.mazeProject.title",
    description: "data.projects.mazeProject.description",
    shortDescription: "data.projects.mazeProject.shortDescription",
    image: "/og/maze-project.png",
    tags: ["JavaScript", "CSS", "HTML"],
    status: "status.completed",
    github: "https://github.com/simonecolli/MazeProject",
    demo: "https://simonecolli.github.io/MazeProject/",
    year: "2022",
    favourite: true,
  },
];
