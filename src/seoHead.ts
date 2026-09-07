export interface HeadElement {
  type: string;
  props: Record<string, string>;
}

let collecting = false;
let title = "";
let elements: HeadElement[] = [];

export function startHeadCollection() {
  // Reset the head tags before rendering the next static page.
  collecting = true;
  title = "";
  elements = [];
}

export function isCollectingHead() {
  // Tell SEO whether head tags are being collected for static rendering.
  return collecting;
}

export function collectHead(pageTitle: string, pageElements: HeadElement[]) {
  // Store the current page title and metadata for the prerender plugin.
  title = pageTitle;
  elements = pageElements;
}

export function drainHead() {
  // Return the collected head tags in the format the prerender plugin expects.
  return { title, elements: new Set(elements) };
}
