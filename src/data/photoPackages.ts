export interface PhotoPackage {
  id: string;
  title: string;
  subtitle: string;
  includes: string;
  fromPrice?: number;
  fromNote?: string;
}

export const photoPackages: PhotoPackage[] = [
  {
    id: "sport",
    title: "photography.packages.sport.title",
    subtitle: "photography.packages.sport.subtitle",
    includes: "photography.packages.sport.includes",
  },
  {
    id: "events",
    title: "photography.packages.events.title",
    subtitle: "photography.packages.events.subtitle",
    includes: "photography.packages.events.includes",
  },
  {
    id: "ceremonies",
    title: "photography.packages.ceremonies.title",
    subtitle: "photography.packages.ceremonies.subtitle",
    includes: "photography.packages.ceremonies.includes",
    fromPrice: 150,
    fromNote: "photography.packages.ceremonies.fromNote",
  },
  {
    id: "portraits",
    title: "photography.packages.portraits.title",
    subtitle: "photography.packages.portraits.subtitle",
    includes: "photography.packages.portraits.includes",
  },
  {
    id: "custom",
    title: "photography.packages.custom.title",
    subtitle: "photography.packages.custom.subtitle",
    includes: "photography.packages.custom.includes",
  },
];
