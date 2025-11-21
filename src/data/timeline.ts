export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "work" | "education" | "personal" | "project" | "talk";
}

export const timeline: TimelineEvent[] = [
  {
    year: "2025",
    title: "PanDelos-plus preprint",
    description:
      "First author of the paper 'PanDelos-plus: A parallel algorithm for computing sequence homology in pangenomic analysis', released on arXiv.",
    type: "work",
  },
  {
    year: "2025",
    title: "Teaching Assistant & Seminars",
    description:
      "Tutor for Operating Systems and Software Engineering courses at University of Parma. Speaker in seminars on tutoring and Python programming with graphical libraries.",
    type: "work",
  },
  {
    year: "2025",
    title: "Tutoring under different perspectives",
    description:
      "Delivered the talk 'Il tutorato da diverse prospettive e strumenti informatici a supporto', focusing on methodologies and software tools for academic mentoring.",
    type: "talk",
  },
  {
    year: "2024",
    title: "BBCC2024 Conference - Naples",
    description:
      "Presented PanDelos-plus at the BBCC2024 conference in Naples.",
    type: "education",
  },
  {
    year: "2024",
    title: "Bachelor's Degree in Computer Science",
    description:
      "Graduated with thesis on a parallel algorithm for pangenomic sequence analysis. Started Master's degree in Computer Science at University of Parma.",
    type: "education",
  },
  {
    year: "2024",
    title: "Internship in Bioinformatics",
    description:
      "Developed parallel software for pangenome analysis using C++, Python, and Bash.",
    type: "work",
  },
  {
    year: "2024",
    title: "Open Source Collaboration",
    description:
      "Founded and maintained unipr-org, an organization for collaborative open-source projects among university students.",
    type: "education",
  },
  {
    year: "2023",
    title: "Freelance Tutor & Photographer",
    description:
      "Tutoring in C, C++, Java, Python, algorithms, and web development. Provided photography services for events.",
    type: "work",
  },
  {
    year: "2022",
    title: "MazeProject - Science Outreach",
    description:
      "Created a web application to visualize graph search algorithms for European Researchers' Night.",
    type: "project",
  },
  {
    year: "2021",
    title: "Cybersecurity Training",
    description:
      "Completed CyberChallenge.it, a national program in cybersecurity and CTF competitions.",
    type: "education",
  },
  {
    year: "2007 - 2023",
    title: "Artistic Roller Skating Athlete",
    description:
      "Competitive high-level athlete, learning resilience, discipline, and teamwork.",
    type: "personal",
  },
];
