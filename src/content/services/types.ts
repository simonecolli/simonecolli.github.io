// The long text of the development service pages, one file per page and
// language, like the case studies: it is prose, not interface strings, and
// does not belong in the translation JSON. Both languages of a page keep the
// same section ids and package ids in the same order, so anchors survive a
// language switch.
//
// Prices are starting prices in euro. A package without `fromPrice` shows
// "price on request", so prices can be added one at a time.

export interface ServicePackage {
  id: string;
  title: string;
  fromPrice?: number;
  // "from about" instead of "from", for orders of magnitude.
  approx?: boolean;
  weeks?: string;
  // What the starting price buys.
  body: string;
  fit?: string;
  limits?: string;
  note?: string;
}

// A link to a case study in `data/projects.ts`.
export interface CaseRef {
  slug: string;
  label: string;
}

export interface ListItem {
  term?: string;
  text: string;
  // In a list of steps: what the client can see or test for themselves at
  // that step, so the quality of the work is something they can check.
  check?: string;
}

// One row of the comparison of site types. Price and timeframe come from the
// package named by `packageId`, so the table and the cards cannot disagree;
// rows with no package say what to do instead in `other`.
export interface SiteTypeRow {
  type: string;
  what: string;
  fit: string;
  pages: string;
  packageId?: string;
  other?: { text: string; to?: string; label?: string };
}

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: ListItem[] }
  | { kind: "steps"; items: ListItem[] }
  | { kind: "callout"; text: string }
  | { kind: "table"; columns: string[]; rows: string[][] }
  | {
      kind: "siteTypes";
      // Type, what it is, a good fit if, pages, timeframe, price.
      columns: [string, string, string, string, string, string];
      rows: SiteTypeRow[];
    }
  | { kind: "packages"; items: ServicePackage[] }
  | { kind: "cards"; items: { title: string; text: string; cases?: CaseRef[] }[] }
  | { kind: "cases"; items: (CaseRef & { text: string })[] }
  // Links take the development accent; accent "photo" marks one that leads to
  // the photography side, which reads in amber like the rest of that side.
  | { kind: "links"; items: { to: string; label: string; accent?: "photo" }[] };

export interface ServiceSection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface ServicePageContent {
  heading: string;
  subtitle: string;
  intro: string[];
  cta: string;
  mail: { subject: string; body: string };
  whatsapp: string;
  sections: ServiceSection[];
  faqs: { question: string; answer: string }[];
  closing: { title: string; text: string };
}
