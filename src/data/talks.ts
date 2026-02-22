export interface Talk {
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

export const talks: Talk[] = [
  {
    slug: "academic-presentation-SASV-exam",
    title: "data.talks.academicPresentationSASVExam.title",
    description: "data.talks.academicPresentationSASVExam.description",
    tags: ["Presentation", "Static Analysis", "Software Verification",
      "Exam", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/SASV",
    demo: "",
    year: "2025",
  },
  {
    slug: "academic-presentation-bddm-exam",
    title: "data.talks.academicPresentationBddmExam.title",
    description: "data.talks.academicPresentationBddmExam.description",
    tags: ["Presentation", "Big Data", "Data Mining", "Exam", "Research", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/BDDM",
    demo: "",
    year: "2025",
  },
  {
    slug: "academic-presentation-bddm-reverse",
    title: "data.talks.academicPresentationBddmReverse.title",
    description: "data.talks.academicPresentationBddmReverse.description",
    tags: ["Presentation", "Big Data", "Data Mining", "Exam", "Research", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/BDDM",
    demo: "",
    year: "2025",
    favourite: true,
  },
  {
    slug: "academic-presentation-cs-exam",
    title: "data.talks.academicPresentationCsExam.title",
    description: "data.talks.academicPresentationCsExam.description",
    tags: ["Presentation", "Cybersecurity", "Exam", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/CS",
    demo: "",
    year: "2025",
    favourite: true,
  },
  {
    slug: "academic-presentation-FAI-exam",
    title: "data.talks.academicPresentationFAIExam.title",
    description: "data.talks.academicPresentationFAIExam.description",
    tags: ["Presentation", "Artificial Intelligence", "Contrastive Learning",
      "Exam", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/FAI",
    demo: "",
    year: "2025",
    favourite: true,
  },
  {
    slug: "academic-presentation-LIaC-exam",
    title: "data.talks.academicPresentationLIaCExam.title",
    description: "data.talks.academicPresentationLIaCExam.description",
    tags: ["Presentation", "Languages", "Interpreters", "Compilers",
      "Exam", "University"],
    status: "status.completed",
    github: "https://github.com/simonecolli/academic-presentations/tree/main/LIaC",
    demo: "",
    year: "2024",
  },
];
