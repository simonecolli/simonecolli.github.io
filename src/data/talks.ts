export interface Talk {
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

export const talks: Talk[] = [
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
    favourite: true,
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
    favourite: true,
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
    favourite: true,
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
];
