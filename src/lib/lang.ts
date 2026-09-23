// The language lives in the URL: Italian at the root, English under /en. Each
// page is prerendered once per language, so crawlers index both and hreflang
// can pair them. No React or browser APIs here, since vite.config.ts imports it
// to build the sitemap.
export const LANGUAGES = ["it", "en"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const DEFAULT_LANG: Lang = "it";

const EN_PREFIX = /^\/en(?=\/|$)/;

export function langFromPath(pathname: string): Lang {
  return EN_PREFIX.test(pathname) ? "en" : DEFAULT_LANG;
}

// "/en/projects/" -> "/projects/", "/en" -> "/".
export function stripLang(pathname: string): string {
  return pathname.replace(EN_PREFIX, "") || "/";
}

// Takes a root-relative path in the default language ("/", "/projects/",
// "/#contact") and returns it for the given language.
export function localizePath(path: string, lang: Lang): string {
  return lang === DEFAULT_LANG ? path : `/en${path}`;
}
