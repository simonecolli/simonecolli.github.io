// Shared by the app (canonical and OG URLs) and the build (sitemap), so the two
// cannot drift apart.
export const SITE_URL = "https://www.simonecolli.com";

// Two activities, two inboxes. Kept here because more than one page links to
// them now.
export const DEV_EMAIL = "info.dev@simonecolli.com";
export const PHOTO_EMAIL = "info.photo@simonecolli.com";

// Line breaks go out as CRLF, the form RFC 6068 expects inside a mailto body.
export function mailtoHref(email: string, subject: string, body: string): string {
  const encode = (text: string) => encodeURIComponent(text.replace(/\n/g, "\r\n"));
  return `mailto:${email}?subject=${encode(subject)}&body=${encode(body)}`;
}
