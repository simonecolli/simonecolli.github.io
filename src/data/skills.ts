export interface Skill {
  category: string;
  items: string[];
}

// Named keys rather than positional ones: the numeric scheme is what let the timeline
// drift out of sync with its translations.
export const skills: Skill[] = [
  {
    category: "data.skills.primaryLanguages",
    items: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "Bash"],
  },
  {
    category: "data.skills.otherLanguages",
    items: [
      "C",
      "C#",
      "Objective-C",
      "PHP",
      "LaTeX",
      "Markdown",
      "StrictDoc",
      "Matlab",
      "YAML",
      "SQL",
    ],
  },
  {
    category: "data.skills.databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "data.skills.operatingSystems",
    items: ["Linux", "MAC OSX", "Windows", "Windows Server 2019"],
  },
  {
    category: "data.skills.ides",
    items: [
      "Visual Studio Code",
      "Eclipse",
      "Android Studio",
      "Xcode",
      "Jupyter notebook",
      "Google Colab",
      "MATLAB IDE",
      "Sublime Text",
      "Nano",
    ],
  },
  {
    category: "data.skills.frameworks",
    items: [
      "React",
      "Spring",
      "FastAPI",
      "GraphQL",
      "LLM & RAG",
      "On-premise deployment",
      "Flask",
      "Laravel",
      "Tailwind",
      "Bootstrap",
      "JQuery",
      "nginx",
      "Apache web server",
      "Git",
      "GitHub",
      "Docker",
      "Kubernetes",
      "Hyper-V",
      "Oracle virtual box",
      "OpenMP",
      "MPI",
      "CUDA",
      "Masterwork",
      "AutoCAD",
    ],
  },
  {
    category: "data.skills.creativeTools",
    items: [
      "Microsoft Office",
      "Darktable",
      "Adobe Lightroom Classic",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Davinci Resolve",
      "Audacity",
    ],
  },
  {
    category: "data.skills.softSkills",
    items: [
      "Problem solving",
      "Critical thinking",
      "Time management",
      "Adaptability",
      "Flexibility",
      "Collaboration",
      "Creativity",
      "Organization",
      "Teamwork",
      "Stress management",
      "Self-development",
      "Resilience",
      "Patience",
      "Punctuality",
      "Perseverance",
    ],
  },
  {
    category: "data.skills.spokenLanguages",
    items: ["Italian (native)", "English (Intermediate)"],
  },
];
