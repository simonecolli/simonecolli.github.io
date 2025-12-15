export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status: "In Progress" | "Completed";
  github: string;
  demo: string;
  year: string;
  favourite?: boolean;
}

export const projects: Project[] = [
  {
    slug: "academic-presentation-SASV-exam",
    title: "Academic presentation for Static analysis and software \
    verification exam",
    description:
    "A presentation created for the static analysis and software \
    exam at the University of Parma. The presentations talks about the a \
    chosen research paper.",
    tags: ["Presentation", "Static Analysis", "Software Verification",
      "Exam", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/SASV",
    demo: "",
    year: "2025",
  },
  {
    slug: "personal-website",
    title: "Personal website",
    description:
      "A personal website showcasing my projects, skills, and experience.",
    tags: ["Web Development", "React", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    github: "https://github.com/simonecolli/simonecolli.github.io",
    demo: "https://www.simonecolli.com",
    year: "2025",
  },
  {
    slug: "academic-presentation-bddm-exam",
    title: "Academic presentation for Big Data and Data Mining exam",
    description:
    "A presentation created for the Big Data and Data Mining exam at the \
    University of Parma. The presentations talks about the a chosen \
    research paper.",
    tags: ["Presentation", "Big Data", "Data Mining", "Exam", "Research", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/BDDM",
    demo: "",
    year: "2025",
  },
  {
    slug: "academic-presentation-bddm-reverse",
    title: "Academic presentation for Big Data and Data Mining reverse class.",
    description:
    "A presentation created for the Big Data and Data Mining reverse class\
    at the University of Parma. \
    The presentations talks about synthetic data generation.",
    tags: ["Presentation", "Big Data", "Data Mining", "Exam", "Research", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/BDDM",
    demo: "",
    year: "2025",
  },

  {
    slug: "academic-presentation-cs-exam",
    title: "Academic presentation for Cybersecurity exam",
    description:
    "A presentation created for the Cybersecurity exam at the University \
    of Parma. The presentations talks about the infostealers.",
    tags: ["Presentation", "Cybersecurity", "Exam", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/CS",
    demo: "",
    year: "2025",
  },

  {
    slug: "academic-presentation-FAI-exam",
    title: "Academic presentation for Fundamentals of Artificial \
    Intelligence exam",
    description:
    "A presentation created for the fundamentals of artificial intelligence \
    exam at the University of Parma. The presentations talks about \
    contrastive learning in spatial transcriptomics data.",
    tags: ["Presentation", "Artificial Intelligence", "Contrastive Learning",
      "Exam", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/FAI",
    demo: "",
    year: "2025",
  },
  {
    slug: "quantum-portfolio-optimization",
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
    slug: "academic-guarantee-optimization",
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
    slug: "academic-presentation-LIaC-exam",
    title: "Academic presentation for Languages, Interpreters and Compilers exam",
    description:
    "A presentation created for the languages, interpreters and compilers \
    exam at the University of Parma. The presentations talks about \
    loop unrolling.",
    tags: ["Presentation", "Languages", "Interpreters", "Compilers",
      "Exam", "University"],
    status: "Completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/LIaC",
    demo: "",
    year: "2024",
  },
  {
    slug: "pandelos-plus",
    title: "PanDelos-plus",
    description:
      "PanDelos-plus: a parallel algorithm for computing sequence homology in pangenomic analysis",
    tags: ["Research", "C++", "Python", "Docker"],
    status: "Completed",
    github: "https://github.com/simonecolli/PanDelos-plus/tree/main",
    demo: "",
    year: "2024",
    favourite: true,
  },
  {
    slug: "deep-neural-network-library",
    title: "Deep neural network library",
    description:
      "Deep Neural Network Library: A flexible C++ library for building,\
      training, and using deep neural networks. Modular, easy-to-use, and\
      high-performance.",
    tags: ["Neural Networks", "C++"],
    status: "Completed",
    github: "https://github.com/unipr-org/deep-neural-network",
    demo: "",
    year: "2024",
  },
  {
    slug: "unipr-org",
    title: "Unipr-org",
    description:
      "A collaborative GitHub organization that brings together\
      Computer Science students at the University of Parma to\
      create and share a comprehensive collection of course notes,\
      study materials, and academic resources. The platform promotes\
      open collaboration and knowledge sharing, making university\
      learning more accessible for all students.",
    tags: ["Open Source", "Community", "Collaboration", "GitHub"],
    status: "In Progress",
    github: "https://github.com/unipr-org",
    demo: "https://unipr-org.github.io/",
    year: "2023",
    favourite: true,
  },
  {
    slug: "maze-project",
    title: "MazeProject",
    description:
      "An application developed in occasion of the European Researchers' Night 2022.This project involves creating an interactive maze game that educates users about scientific concepts while they navigate through various challenges.",
    tags: ["JavaScript", "CSS", "HTML"],
    status: "Completed",
    github: "https://github.com/simonecolli/MazeProject",
    demo: "https://simonecolli.github.io/MazeProject/",
    year: "2022",
    favourite: true,
  },
];
