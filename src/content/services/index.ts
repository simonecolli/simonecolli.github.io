import type { DevServiceId } from "../../data/devServices";
import type { Lang } from "../../lib/lang";
import type { ServicePackage, ServicePageContent } from "./types";
import { websitesIt } from "./websites.it";
import { websitesEn } from "./websites.en";
import { businessIt } from "./business.it";
import { businessEn } from "./business.en";
import { automationIt } from "./automation.it";
import { automationEn } from "./automation.en";

const servicePages: Record<DevServiceId, Record<Lang, ServicePageContent>> = {
  websites: { it: websitesIt, en: websitesEn },
  business: { it: businessIt, en: businessEn },
  automation: { it: automationIt, en: automationEn },
};

export function getServicePage(id: DevServiceId, lang: Lang): ServicePageContent {
  return servicePages[id][lang];
}

// Every package on a page, wherever it sits: the comparison table reads its
// prices and timeframes from here, and so does the structured data.
export function packagesOf(page: ServicePageContent): ServicePackage[] {
  return page.sections.flatMap((section) =>
    section.blocks.flatMap((block) => (block.kind === "packages" ? block.items : [])),
  );
}
