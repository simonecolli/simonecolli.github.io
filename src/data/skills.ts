export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Main computer languages",
    items: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "Bash"],
  },
  {
    category: "Other computer languages",
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
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Operative systems",
    items: ["Linux", "MAC OSX", "Windows", "Windows Server 2019"],
  },
  {
    category: "IDEs, environments and text editors",
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
    category: "Frameworks and other tools",
    items: [
      "JQuery",
      "Bootstrap",
      "Tailwind",
      "React",
      "Laravel",
      "Flask",
      "nginx",
      "Apache web server",
      "Git",
      "Hyper-V",
      "Oracle virtual box",
      "Docker",
      "Kubernetes",
      "Masterwork",
      "AutoCAD",
      "GitHub",
      "OpenMP",
      "MPI",
      "CUDA"
    ],
  },
  {
    category: "Creative instruments",
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
    category: "Soft skills",
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
    category: "Languages",
    items: ["Italian (native)", "English (Intermediate)"],
  },
];
