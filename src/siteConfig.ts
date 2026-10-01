// Shared by the app (canonical and OG URLs) and the build (sitemap), so the two
// cannot drift apart.
export const SITE_URL = "https://www.simonecolli.com";

// GitHub Pages serves every prerendered route as `<route>/index.html` and
// answers the bare `/route` with a 301 to `/route/`. Canonicals, sitemap and
// links use the slashed form so none of them points at a redirect.
export function withTrailingSlash(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

// Two activities, two inboxes. Kept here because more than one page links to
// them now.
export const DEV_EMAIL = "info.dev@simonecolli.com";
export const PHOTO_EMAIL = "info.photo@simonecolli.com";

// Line breaks go out as CRLF, the form RFC 6068 expects inside a mailto body.
export function mailtoHref(email: string, subject: string, body: string): string {
  const encode = (text: string) => encodeURIComponent(text.replace(/\n/g, "\r\n"));
  return `mailto:${email}?subject=${encode(subject)}&body=${encode(body)}`;
}

// One number for both activities. wa.me wants it with the country code and no
// plus sign; the prefilled text tells which activity the message is about.
export const WHATSAPP_NUMBER = "393772402283";
export const WHATSAPP_DISPLAY = "+39 377 240 2283";

export function whatsappHref(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
