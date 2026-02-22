export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "work" | "education" | "personal" | "project" | "talk";
}

export const timeline: TimelineEvent[] = [
  {
    year: "2025",
    title: "data.timeline.0.title",
    description: "data.timeline.0.description",
    type: "work",
  },
  {
    year: "2025",
    title: "data.timeline.1.title",
    description: "data.timeline.1.description",
    type: "work",
  },
  {
    year: "2025",
    title: "data.timeline.2.title",
    description: "data.timeline.2.description",
    type: "talk",
  },
  {
    year: "2024",
    title: "data.timeline.3.title",
    description: "data.timeline.3.description",
    type: "education",
  },
  {
    year: "2024",
    title: "data.timeline.4.title",
    description: "data.timeline.4.description",
    type: "education",
  },
  {
    year: "2024",
    title: "data.timeline.5.title",
    description: "data.timeline.5.description",
    type: "work",
  },
  {
    year: "2024",
    title: "data.timeline.6.title",
    description: "data.timeline.6.description",
    type: "education",
  },
  {
    year: "2023",
    title: "data.timeline.7.title",
    description: "data.timeline.7.description",
    type: "work",
  },
  {
    year: "2022",
    title: "data.timeline.8.title",
    description: "data.timeline.8.description",
    type: "project",
  },
  {
    year: "2021",
    title: "data.timeline.9.title",
    description: "data.timeline.9.description",
    type: "education",
  },
  {
    year: "2007 - 2023",
    title: "data.timeline.10.title",
    description: "data.timeline.10.description",
    type: "personal",
  },
];
