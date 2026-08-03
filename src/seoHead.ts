export interface HeadElement {
  type: string;
  props: Record<string, string>;
}

// React only hoists <title>/<meta>/<link> into document.head in the browser.
// Under renderToString they stay where they were rendered - inside <body> - where
// social scrapers never look. During prerender the SEO component registers its tags
// here instead of rendering them, and prerender.tsx hands them to the plugin, which
// injects them into the real <head>.
let collecting = false;
let title = "";
let elements: HeadElement[] = [];

export function startHeadCollection() {
  collecting = true;
  title = "";
  elements = [];
}

export function isCollectingHead() {
  return collecting;
}

export function collectHead(pageTitle: string, pageElements: HeadElement[]) {
  title = pageTitle;
  elements = pageElements;
}

export function drainHead() {
  return { title, elements: new Set(elements) };
}
