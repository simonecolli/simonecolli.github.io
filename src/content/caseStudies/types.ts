// A case study is the long form used by the projects that carry the
// positioning: an existing process, what was wrong with it, and the system
// that replaced it. Projects without one keep the single `description`
// paragraph from `data/projects.ts`.
//
// The text lives here rather than in `locales/*/translation.json` because a
// single case study is longer than that whole file, and the translation JSON
// is meant for interface strings, not prose. Section ids are shared between
// languages, so an anchor stays valid when the reader switches language.

export type DiagramId =
  | "mgp-process"
  | "mgp-rule-graph"
  | "mgp-load-plan"
  | "fh-flow"
  | "fh-forecast"
  | "fh-schedule";

export interface ListItem {
  // Rendered bold and followed by a colon, for definition-style lists.
  term?: string;
  text: string;
}

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: ListItem[] }
  | { kind: "callout"; text: string }
  | { kind: "figure"; diagram: DiagramId; caption: string };

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: Block[];
}

export interface CaseStudy {
  // Short qualifiers shown as chips under the title.
  facts: string[];
  // Opening paragraphs, before the first section and outside the table of
  // contents.
  lead: string[];
  metrics?: Metric[];
  sections: CaseStudySection[];
}
