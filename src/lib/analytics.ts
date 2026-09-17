import { projects } from "../data/projects";
import { talks } from "../data/talks";
import { DEV_EMAIL, PHOTO_EMAIL, SITE_URL } from "../siteConfig";

export const GA_ID = "G-BVG3YZR5C5";
// Build-time gate for the banner and all collection; docs/analytics.md records
// what the production value rests on.
export const ANALYTICS_ENABLED = import.meta.env.VITE_ANALYTICS_ENABLED === "true";
export const CONSENT_KEY = "analytics-consent-v2";
export const PREFERENCES_EVENT = "open-cookie-preferences";
export const CONSENT_EVENT = "analytics-consent-changed";
export const POLICY_VERSION = "2026-09-16.2";
const COOKIE_SECONDS = 180 * 24 * 60 * 60;
export type Consent = {
  version: 2;
  policyVersion: typeof POLICY_VERSION;
  accepted: boolean;
  timestamp: number;
  expiresAt: number;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
let enabled = false;
let started = false;
let lastPath: string | undefined;
let refusedInMemory = false;
let expiryTimer: ReturnType<typeof setTimeout> | undefined;

// Calendar months, clamped at month end: 31 August -> 28/29 February.
export function consentExpiry(timestamp: number): number {
  const date = new Date(timestamp);
  const day = date.getUTCDate();
  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 6);
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
  date.setUTCDate(Math.min(day, lastDay));
  return date.getTime();
}

export function readConsent(): Consent | null {
  if (refusedInMemory) return null;
  try {
    const value = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
    if (value?.version === 2 && value.policyVersion === POLICY_VERSION &&
      typeof value.accepted === "boolean" && Number.isFinite(value.timestamp) &&
      value.timestamp <= Date.now() && value.expiresAt === consentExpiry(value.timestamp) &&
      Date.now() < value.expiresAt) return value;
  } catch { /* An unreadable choice is never permission to collect. */ }
  return null;
}

export function saveConsent(accepted: boolean): boolean {
  const timestamp = Date.now();
  const consent: Consent = { version: 2, policyVersion: POLICY_VERSION, accepted, timestamp, expiresAt: consentExpiry(timestamp) };
  refusedInMemory = !accepted;
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    localStorage.removeItem("analytics-consent-v1");
    refusedInMemory = false;
    return true;
  } catch {
    // Do not accept if the choice cannot be recorded. A failed revocation write
    // must not fall back to an old stored grant in the current document.
    refusedInMemory = true;
    return false;
  }
}

function productionHost() {
  return import.meta.env.PROD && ["simonecolli.com", "www.simonecolli.com"].includes(location.hostname);
}

export function clearAnalyticsCookies() {
  const domains = ["", location.hostname, ".simonecolli.com", "simonecolli.com"];
  const paths = new Set(["/"]);
  let path = "";
  for (const segment of location.pathname.split("/").filter(Boolean)) {
    path += `/${segment}`;
    paths.add(path);
    paths.add(`${path}/`);
  }
  for (const part of document.cookie.split(";")) {
    const name = part.trim().split("=")[0];
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) for (const cookiePath of paths) {
      document.cookie = `${name}=; Max-Age=0; path=${cookiePath};${domain ? ` domain=${domain};` : ""} SameSite=Lax`;
    }
  }
}

export function stopAnalytics(reload = true) {
  enabled = false;
  lastPath = undefined;
  clearTimeout(expiryTimer);
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = true;
  window.dataLayer?.splice(0);
  document.getElementById("google-analytics")?.remove();
  clearAnalyticsCookies();
  // A persistent revocation can safely reload and remove Google's listeners.
  // When storage fails, keep the disable flag and in-memory refusal instead.
  if (started && reload && !refusedInMemory) window.location.reload();
}

function scheduleExpiry(expiresAt: number) {
  clearTimeout(expiryTimer);
  // Browser timers have a signed 32-bit limit, shorter than six months.
  expiryTimer = setTimeout(() => {
    const consent = readConsent();
    if (!consent?.accepted) {
      stopAnalytics();
      window.dispatchEvent(new Event(CONSENT_EVENT));
    } else scheduleExpiry(consent.expiresAt);
  }, Math.min(Math.max(0, expiresAt - Date.now()), 2_147_000_000));
}

export function startAnalytics() {
  const consent = readConsent();
  if (!ANALYTICS_ENABLED || !productionHost() || !consent?.accepted) return;
  scheduleExpiry(consent.expiresAt);
  if (enabled) return;
  enabled = true;
  started = true;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  // Google’s command queue uses Arguments objects, not array dataLayer events.
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: COOKIE_SECONDS,
    cookie_update: false,
    page_location: `${SITE_URL}${safePath(location.pathname)}`,
    page_referrer: safeReferrer(),
  });
  const script = document.createElement("script");
  script.id = "google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.referrerPolicy = "origin";
  document.head.appendChild(script);
}

function safeReferrer() {
  try { return new URL(document.referrer).origin; } catch { return ""; }
}

// Only authored routes can be measured; unknown URLs may contain personal data.
function safePath(path: string) {
  const clean = path.split(/[?#]/)[0].replace(/\/$/, "") || "/";
  if (["/", "/development", "/photography", "/photography/degree", "/projects", "/talks", "/about", "/privacy", "/blog"].includes(clean)) return clean;
  if (projects.some(project => clean === `/projects/${project.slug}`) ||
      talks.some(talk => clean === `/talks/${talk.slug}`)) return clean;
  return "/404";
}

function canTrack() {
  if (!enabled) return false;
  if (!readConsent()?.accepted) { stopAnalytics(); return false; }
  return true;
}

export function trackPage(path: string) {
  if (!canTrack()) return;
  const clean = safePath(path);
  if (clean === lastPath) return;
  window.gtag?.("event", "page_view", {
    page_location: `${SITE_URL}${clean}`,
    page_title: clean,
    page_referrer: lastPath ? `${SITE_URL}${lastPath}` : safeReferrer(),
    area: clean.startsWith("/photography") ? "photo" : /^\/(development|projects|talks)(\/|$)/.test(clean) ? "dev" : "shared",
  });
  lastPath = clean;
}

export function trackContact(event: MouseEvent) {
  if (!canTrack() || !(event.target instanceof Element)) return;
  const link = event.target.closest("a");
  const address = (link?.getAttribute("href") || "").split("?")[0].toLowerCase();
  const area = address === `mailto:${DEV_EMAIL}` ? "dev" : address === `mailto:${PHOTO_EMAIL}` ? "photo" : null;
  if (!area) return;
  const requestedService = link?.dataset.analyticsService;
  const service = requestedService && ["proclamation", "party", "graduation_group", "joint_party"].includes(requestedService)
    ? requestedService : area === "dev" ? "software" : "photography";
  window.gtag?.("event", "contact_click", {
    area, service,
    placement: link?.closest("header") ? "header" : link?.closest("footer") ? "footer" : "page",
    page_location: `${SITE_URL}${safePath(location.pathname)}`,
  });
}
