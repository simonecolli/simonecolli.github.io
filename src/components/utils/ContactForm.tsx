import { useId, useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Link from "./LocalizedLink";
import { DEV_EMAIL, PHOTO_EMAIL } from "../../siteConfig";
import { trackFormSent } from "../../lib/analytics";

export interface FormQuestion {
  label: string;
  kind?: "text" | "textarea";
  // An example answer, shown until the visitor types.
  placeholder?: string;
  required?: boolean;
}

interface ContactFormProps {
  area: "dev" | "photo";
  // The page the request comes from, as it should read in the email subject.
  source: string;
  questions: FormQuestion[];
  submitLabel: string;
  // The offer the request is about, for the contact event.
  service?: string;
}

// Class names stay literal for Tailwind.
const ACCENT = {
  dev: { field: "focus:border-accent-dev", button: "btn-dev" },
  photo: { field: "focus:border-accent-photo", button: "btn-photo" },
} as const;

const fieldClass = "w-full rounded border border-line bg-bg px-3 py-2 text-fg focus:outline-none";

// What a first request needs. The Worker accepts up to 4000 characters per
// answer, so these stay below it.
const LIMITS = { name: 100, email: 254, phone: 30, line: 150, text: 1000 } as const;

// Posts to the Worker on /api/contatto, which mails the inbox of the area. On
// failure the fields keep what the visitor wrote and the address is offered,
// so the message is never lost.
export default function ContactForm({ area, source, questions, submitLabel, service }: ContactFormProps) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  // Characters typed in each long answer, for the counter under the box.
  const [counts, setCounts] = useState<Record<string, number>>({});
  const formId = useId();
  const accent = ACCENT[area];
  const field = `${fieldClass} ${accent.field}`;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "");
    setStatus("sending");
    try {
      const response = await fetch("/api/contatto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          area,
          source,
          name: value("name"),
          email: value("email"),
          phone: value("phone"),
          website: value("website"),
          answers: questions.map((question, index) => ({ label: question.label, value: value(`q${index}`) })),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      trackFormSent(area, service);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p id="modulo" role="status" className="border border-line rounded-lg p-6 type-body scroll-mt-24">
        {t("form.sent")} {t("contact.reply.time")}
      </p>
    );
  }

  return (
    <form id="modulo" onSubmit={submit} className="space-y-5 scroll-mt-24">
      <div className="grid md:grid-cols-3 gap-5">
        <label className="block">
          <span className="block text-sm font-medium mb-1">{t("form.name")}</span>
          <input name="name" required maxLength={LIMITS.name} autoComplete="name" placeholder={t("form.namePlaceholder")} className={field} />
        </label>
        <label className="block">
          <span className="block text-sm font-medium mb-1">{t("form.email")}</span>
          <input name="email" type="email" required maxLength={LIMITS.email} autoComplete="email" placeholder={t("form.emailPlaceholder")} className={field} />
        </label>
        <label className="block">
          <span className="block text-sm font-medium mb-1">
            {t("form.phone")} <span className="text-muted font-normal">({t("form.optional")})</span>
          </span>
          <input name="phone" type="tel" maxLength={LIMITS.phone} autoComplete="tel" placeholder={t("form.phonePlaceholder")} className={field} />
        </label>
      </div>

      {questions.map((question, index) => {
        const name = `q${index}`;
        const countId = `${formId}-${name}-count`;

        return (
          <div key={question.label}>
            <label className="block">
              <span className="block text-sm font-medium mb-1">
                {question.label}
                {!question.required && <span className="text-muted font-normal"> ({t("form.optional")})</span>}
              </span>
              {question.kind === "textarea" ? (
                <textarea
                  name={name}
                  required={question.required}
                  maxLength={LIMITS.text}
                  rows={4}
                  placeholder={question.placeholder}
                  aria-describedby={countId}
                  onInput={(event) => {
                    const length = event.currentTarget.value.length;
                    setCounts((current) => ({ ...current, [name]: length }));
                  }}
                  className={field}
                />
              ) : (
                <input name={name} required={question.required} maxLength={LIMITS.line} placeholder={question.placeholder} className={field} />
              )}
            </label>
            {/* Outside the label, so the count is not read as part of the question. */}
            {question.kind === "textarea" && (
              <p id={countId} className="text-xs text-muted text-right mt-1">
                {counts[name] ?? 0}/{LIMITS.text}
              </p>
            )}
          </div>
        );
      })}

      {/* Hidden from people and from screen readers; bots fill it in. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" disabled={status === "sending"} className={`btn ${accent.button} btn-solid`}>
          {status === "sending" ? t("form.sending") : submitLabel}
        </button>
        <p className="text-sm text-muted">
          {t("form.privacy")}{" "}
          <Link to="/privacy/" className="underline underline-offset-4">{t("form.privacyLink")}</Link>
        </p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm">
          {t("form.error", { email: area === "dev" ? DEV_EMAIL : PHOTO_EMAIL })}
        </p>
      )}
    </form>
  );
}
