export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "work" | "education" | "personal" | "project" | "talk";
}

export const timeline: TimelineEvent[] = [
  {
    year: "2026",
    title: "data.timeline.masterDegree.title",
    description: "data.timeline.masterDegree.description",
    type: "education",
  },
  {
    year: "2026",
    title: "data.timeline.freelance.title",
    description: "data.timeline.freelance.description",
    type: "work",
  },
  {
    year: "2025",
    title: "data.timeline.seminars.title",
    description: "data.timeline.seminars.description",
    type: "talk",
  },
  {
    year: "2025",
    title: "data.timeline.pandelosPreprint.title",
    description: "data.timeline.pandelosPreprint.description",
    type: "project",
  },
  {
    year: "2024 – 2026",
    title: "data.timeline.universityTutor.title",
    description: "data.timeline.universityTutor.description",
    type: "work",
  },
  {
    year: "2024",
    title: "data.timeline.bbcc2024.title",
    description: "data.timeline.bbcc2024.description",
    type: "talk",
  },
  {
    year: "2024",
    title: "data.timeline.bachelorDegree.title",
    description: "data.timeline.bachelorDegree.description",
    type: "education",
  },
  {
    year: "2024",
    title: "data.timeline.internship.title",
    description: "data.timeline.internship.description",
    type: "work",
  },
  {
    year: "2024",
    title: "data.timeline.uniprOrg.title",
    description: "data.timeline.uniprOrg.description",
    type: "project",
  },
  {
    year: "2022 – 2026",
    title: "data.timeline.freelanceTutor.title",
    description: "data.timeline.freelanceTutor.description",
    type: "work",
  },
  {
    year: "2022",
    title: "data.timeline.mazeProject.title",
    description: "data.timeline.mazeProject.description",
    type: "project",
  },
  {
    year: "2021 & 2024",
    title: "data.timeline.cyberChallenge.title",
    description: "data.timeline.cyberChallenge.description",
    type: "education",
  },
  {
    year: "2007 – 2023",
    title: "data.timeline.skating.title",
    description: "data.timeline.skating.description",
    type: "personal",
  },
];
