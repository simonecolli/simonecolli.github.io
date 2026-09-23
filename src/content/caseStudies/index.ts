import { personalWebsiteIt } from "./personalWebsite.it";
import { personalWebsiteEn } from "./personalWebsite.en";
import type { CaseStudy } from "./types";
import { mgpIt } from "./mgp.it";
import { mgpEn } from "./mgp.en";
import { freelanceHubIt } from "./freelanceHub.it";
import { freelanceHubEn } from "./freelanceHub.en";
import { pandelosPlusIt } from "./pandelosPlus.it";
import { pandelosPlusEn } from "./pandelosPlus.en";

// Keyed by the same slug used in `data/projects.ts`, so a project gains its
// long form by being added here and nowhere else. The two language variants of
// one case study must keep the same section ids, in the same order: the table
// of contents and the anchors are built from them, and a reader switching
// language mid-page should land on the same section.
const caseStudies: Record<string, Record<"it" | "en", CaseStudy>> = {
  "mgp-gestione-produzione": { it: mgpIt, en: mgpEn },
  "personal-website": { it: personalWebsiteIt, en: personalWebsiteEn },
  "freelance-hub": { it: freelanceHubIt, en: freelanceHubEn },
  "pandelos-plus": { it: pandelosPlusIt, en: pandelosPlusEn },
};

// What a project's long form is, for the badge on its card: null when it has
// only the short description.
export function longFormKind(slug: string): "caseStudy" | "publication" | null {
  const entry = caseStudies[slug];
  if (!entry) return null;
  return entry.it.kind ?? "caseStudy";
}

// Detected languages carry a region ("it-IT"), matching how SEO.tsx picks the
// locale.
export function getCaseStudy(slug: string, language: string): CaseStudy | null {
  const entry = caseStudies[slug];
  if (!entry) return null;
  return language.startsWith("it") ? entry.it : entry.en;
}
