import { MAX_BODY, buildEmail, parseRequest, type OutgoingEmail } from "./contact";

// Runs on www.simonecolli.com/api/*, in front of GitHub Pages: it turns a
// contact form into an email to the inbox of that activity. The two inboxes
// are secrets, set outside the repository, because the repository is public.
interface Env {
  EMAIL: { send(message: OutgoingEmail): Promise<unknown> };
  DEV_TO: string;
  PHOTO_TO: string;
  RATE_LIMIT: { limit(options: { key: string }): Promise<{ success: boolean }> };
  // Set only in .dev.vars, so production never accepts a localhost origin.
  ALLOW_LOCALHOST?: string;
}

const SITE_ORIGIN = "https://www.simonecolli.com";
// The Vite dev server and preview, any port.
const LOCAL_ORIGIN = /^http:\/\/localhost:\d+$/;

const reply = (status: number) => new Response(null, { status });

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (new URL(request.url).pathname !== "/api/contatto") return reply(404);
    if (request.method !== "POST") return new Response(null, { status: 405, headers: { Allow: "POST" } });
    const origin = request.headers.get("Origin") ?? "";
    if (origin !== SITE_ORIGIN && !(env.ALLOW_LOCALHOST === "true" && LOCAL_ORIGIN.test(origin))) return reply(403);

    // The Origin check stops browsers only: a script can fake it, so each
    // address also gets a few sends a minute. The count is per Cloudflare location.
    const { success } = await env.RATE_LIMIT.limit({ key: request.headers.get("CF-Connecting-IP") ?? "" });
    if (!success) return reply(429);

    // Refuse a declared oversized body before reading it; the check after the
    // read still covers a body sent without Content-Length.
    if (Number(request.headers.get("Content-Length")) > MAX_BODY) return reply(413);
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
