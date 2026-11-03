// The development offer, one page per category under /development/<slug>/.
// Plain data with no React or content imports: vite.config.ts reads it to list
// the prerendered routes and the sitemap, and analytics.ts to know which paths
// may be measured. The page text lives in `content/services`, keyed by `id`.
export const DEV_SERVICES = [
  { slug: "siti-web", id: "websites" },
  { slug: "gestionali-crm", id: "business" },
  { slug: "automazioni", id: "automation" },
] as const;

export type DevService = (typeof DEV_SERVICES)[number];
export type DevServiceId = DevService["id"];
export type DevServiceSlug = DevService["slug"];

export function devServiceBySlug(slug: string | undefined): DevService | undefined {
  return DEV_SERVICES.find((service) => service.slug === slug);
}
