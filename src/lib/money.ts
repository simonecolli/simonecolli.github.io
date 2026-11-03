import type { Lang } from "./lang";

// Whole euros with the thousands separator each language expects: "1.200 €"
// and "€1,200". Written out rather than left to Intl, whose Italian format
// drops the separator below 10.000 and would also have to agree between the
// prerender and every browser to avoid a hydration mismatch.
export function euro(value: number, lang: Lang): string {
  const digits = String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "it" ? "." : ",");
  return lang === "it" ? `${digits} €` : `€${digits}`;
}
