import { MAX_BODY, buildEmail, parseRequest, type OutgoingEmail } from "./contact";

// Runs on www.simonecolli.com/api/*, in front of GitHub Pages: it turns a
// contact form into an email to the inbox of that activity. The two inboxes
// are secrets, set outside the repository, because the repository is public.
interface Env {
  EMAIL: { send(message: OutgoingEmail): Promise<unknown> };
  DEV_TO: string;
  PHOTO_TO: string;
}

// The site, plus the Vite dev server and preview while working locally.
const ALLOWED_ORIGIN = /^(https:\/\/www\.simonecolli\.com|http:\/\/localhost:\d+)$/;

const reply = (status: number) => new Response(null, { status });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname !== "/api/contatto") return reply(404);
    if (request.method !== "POST") return new Response(null, { status: 405, headers: { Allow: "POST" } });
    if (!ALLOWED_ORIGIN.test(request.headers.get("Origin") ?? "")) return reply(403);

    const raw = await request.text();
    if (raw.length > MAX_BODY) return reply(413);
    const form = parseRequest(raw);
    if (!form) return reply(400);
    // Answer a bot as if it had worked, so it has no reason to try again.
    if (form.trap) return reply(204);

    try {
      await env.EMAIL.send(buildEmail(form, form.area === "dev" ? env.DEV_TO : env.PHOTO_TO));
    } catch (error) {
      // The reason only: the message itself stays out of the logs.
      console.error("send failed:", error instanceof Error ? error.message : String(error));
      return reply(502);
    }
    return reply(204);
  },
};
