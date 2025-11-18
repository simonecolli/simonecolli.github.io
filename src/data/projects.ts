export interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "In Progress" | "Completed";
  github: string;
  demo: string;
  year: string;
}

export const projects: Project[] = [
  {
    title: "Personal website",
    description:
      "A personal website showcasing my projects, skills, and experience.",
    tags: ["Web Development", "React", "JavaScript"],
    status: "In Progress",
    github: "",
    demo: "",
    year: "2025",
  },
  {
    title: "Quantum Portfolio Optimization",
    description:
      "A research project focused on optimizing portfolio allocation, enhancing traditional methods for improved risk-return management.",
    tags: ["Research", "Quantum Computing", "Finance", "Python", "Exam"],
    status: "Completed",
    github: "https://github.com/simonecolli/quantum-portfolio-optimization",
    demo: "",
    year: "2025",
  },
  {
    title: "Academic Guarantee Optimization",
    description:
      "Answer Set Programming (ASP)-based tool for optimizing the assignment of academic guarantors to university courses.",
    tags: ["Research", "Answer set programming", "Clingo", "Python", "Exam"],
    status: "Completed",
    github: "https://github.com/simonecolli/ottimizzazione-garanti-accademici",
    demo: "",
    year: "2025",
  },
  {
    title: "PanDelos-plus",
    description:
      "PanDelos-plus: a parallel algorithm for computing sequence homology in pangenomic analysis",
    tags: ["Research", "C++", "Python", "Docker"],
    status: "Completed",
    github: "https://github.com/simonecolli/PanDelos-plus/tree/main",
    demo: "",
    year: "2024",
  },
  {
    title: "Deep neural network library",
    description:
      "A C++ library for building, training, and using deep neural networks.",
    tags: ["Neural Networks", "C++"],
    status: "Completed",
    github: "https://github.com/unipr-org/deep-neural-network",
    demo: "",
    year: "2024",
  },
  {
    title: "MazeProject",
    description:
      "An application developed in occasion of the European Researchers' Night 2022.",
    tags: ["JavaScript", "CSS", "HTML"],
    status: "Completed",
    github: "https://github.com/simonecolli/MazeProject",
    demo: "https://simonecolli.github.io/MazeProject/",
    year: "2022",
  },
];
