// React only hoists <title>, <meta> and <link> into document.head in the
// browser. Under renderToString they stay where they were rendered, inside
// <body>, where social scrapers never look. During prerender the SEO component
// registers its tags here instead, and prerender.tsx hands them to the plugin,
// which injects them into the real <head>.

export interface HeadElement {
  type: string;
  props: Record<string, string>;
}

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

// Set on every tag the SEO component hands to the prerender, so the browser can
// tell them apart from the rest of <head>.
const PRERENDERED_ATTR = "data-prerendered-seo";

export function collectHead(pageTitle: string, pageElements: HeadElement[]) {
  title = pageTitle;
  elements = pageElements.map((element) => ({
    ...element,
    props: { ...element.props, [PRERENDERED_ATTR]: "" },
  }));
}

export function drainHead() {
  return { title, elements: new Set(elements) };
}

// createRoot renders the app from scratch, so React adds its own head tags next
// to the prerendered ones and every page would carry two of each. Dropping the
// static copies before the first render leaves one. The title carries no
// marker, since the plugin writes it itself, but every page renders the SEO
// component, so it always comes back. hydrateRoot would reuse the static tags
// instead, but the client can detect a different language from the one the
// pages are prerendered in, and hydration would fail.
export function dropPrerenderedHead() {
  document.head
    .querySelectorAll(`title, [${PRERENDERED_ATTR}]`)
    .forEach((node) => node.remove());
}
