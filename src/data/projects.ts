export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  github: string;
  demo: string;
  year: string;
  favourite?: boolean;
}

export const projects: Project[] = [
  {
    slug: "personal-website",
    title: "data.projects.personalWebsite.title",
    description: "data.projects.personalWebsite.description",
    tags: ["Web Development", "React", "TypeScript", "Tailwind CSS"],
    status: "status.inProgress",
    github: "https://github.com/simonecolli/simonecolli.github.io",
    demo: "https://www.simonecolli.com",
    year: "2025",
  },
  {
    slug: "quantum-portfolio-optimization",
    title: "data.projects.quantumPortfolioOptimization.title",
    description: "data.projects.quantumPortfolioOptimization.description",
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
    tags: ["Research", "C++", "Python", "Docker"],
    status: "status.completed",
    github: "https://github.com/simonecolli/PanDelos-plus/tree/main",
    demo: "",
    year: "2024",
    favourite: true,
  },
  {
    slug: "deep-neural-network-library",
    title: "data.projects.deepNeuralNetworkLibrary.title",
    description: "data.projects.deepNeuralNetworkLibrary.description",
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
    tags: ["JavaScript", "CSS", "HTML"],
    status: "status.completed",
    github: "https://github.com/simonecolli/MazeProject",
    demo: "https://simonecolli.github.io/MazeProject/",
    year: "2022",
    favourite: true,
  },
];
