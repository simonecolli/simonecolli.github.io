import type { CaseStudy } from "./types";
import { mgpIt } from "./mgp.it";
import { mgpEn } from "./mgp.en";
import { freelanceHubIt } from "./freelanceHub.it";
import { freelanceHubEn } from "./freelanceHub.en";

// Keyed by the same slug used in `data/projects.ts`, so a project gains its
// long form by being added here and nowhere else. The two language variants of
// one case study must keep the same section ids, in the same order: the table
// of contents and the anchors are built from them, and a reader switching
// language mid-page should land on the same section.
const caseStudies: Record<string, Record<"it" | "en", CaseStudy>> = {
  "mgp-gestione-produzione": { it: mgpIt, en: mgpEn },
  "freelance-hub": { it: freelanceHubIt, en: freelanceHubEn },
};

export function hasCaseStudy(slug: string): boolean {
  return slug in caseStudies;
}

// Detected languages carry a region ("it-IT"), matching how SEO.tsx picks the
// locale.
export function getCaseStudy(slug: string, language: string): CaseStudy | null {
  const entry = caseStudies[slug];
  if (!entry) return null;
  return language.startsWith("it") ? entry.it : entry.en;
}
