// What the site's contact forms send, checked before anything becomes an
// email. The forms differ per page, so the Worker does not know their
// questions: it takes them as label and answer pairs and only bounds them.

export type Area = "dev" | "photo";

export interface ContactRequest {
  area: Area;
  source: string;
  name: string;
  email: string;
  phone: string;
  answers: { label: string; value: string }[];
  // The hidden field people never see; anything in it means a bot.
  trap: boolean;
}

export interface OutgoingEmail {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
}

export const MAX_BODY = 20_000;
const MAX_ANSWERS = 12;
const MAX_ANSWER = 4_000;

const AREAS: Record<Area, { label: string; from: string }> = {
  dev: { label: "Sviluppo", from: "modulo.dev@simonecolli.com" },
  photo: { label: "Fotografia", from: "modulo.photo@simonecolli.com" },
};

const EMAIL = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[^\s@<>(),;:"]+$/;

// A one-line value: line breaks become spaces, so nothing a visitor types can
// add a line to the subject. Null when it is not text or too long.
function line(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : null;
}

function block(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const clean = value.replace(/\r\n?/g, "\n").trim();
  return clean.length <= max ? clean : null;
}

export function parseRequest(raw: string): ContactRequest | null {
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!data || typeof data !== "object") return null;

  const area = data.area === "dev" || data.area === "photo" ? data.area : null;
  const source = line(data.source, 100);
  const name = line(data.name, 100);
  const email = line(data.email, 254);
  const phone = line(data.phone ?? "", 40);
  if (!area || !source || !name || !email || !EMAIL.test(email) || phone === null) return null;

  if (!Array.isArray(data.answers) || data.answers.length > MAX_ANSWERS) return null;
  const answers: ContactRequest["answers"] = [];
  for (const item of data.answers) {
    const label = line(item?.label, 200);
    const value = block(item?.value ?? "", MAX_ANSWER);
    if (!label || value === null) return null;
    if (value) answers.push({ label, value });
  }
  if (!answers.length) return null;

  return { area, source, name, email, phone, answers, trap: typeof data.website === "string" && data.website !== "" };
}

export function buildEmail(request: ContactRequest, to: string): OutgoingEmail {
  const { label, from } = AREAS[request.area];
  const contact = [
    `Nome: ${request.name}`,
    `Email: ${request.email}`,
    request.phone && `Telefono: ${request.phone}`,
    `Pagina: ${request.source}`,
  ].filter(Boolean);

  return {
    to,
    from,
    replyTo: request.email,
    subject: `[${label}] ${request.source} - ${request.name}`,
    text: [contact.join("\n"), ...request.answers.map((answer) => `${answer.label}\n${answer.value}`)].join("\n\n"),
  };
}
