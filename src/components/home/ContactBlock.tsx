import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DEV_EMAIL, PHOTO_EMAIL } from "../../siteConfig";
import PlainAddress from "../utils/PlainAddress";
import WhatsAppButton from "../utils/WhatsAppButton";
import ContactForm, { type FormQuestion } from "../utils/ContactForm";
import Link from "../utils/LocalizedLink";

type Area = "dev" | "photo";

// One row of ideas per activity, each in that activity's face and accent. The
// development ideas pair a website with photos; the photography ideas are
// shoots on their own. Class names stay literal for Tailwind.
const GROUPS = [
  {
    area: "dev",
    ideas: ["opening", "professional", "company"],
    face: "font-mono",
    text: "text-accent-dev",
    border: "border-t-accent-dev",
    link: { to: "/development/siti-web/", key: "contact.ideas.websitesLink" },
  },
  {
    area: "photo",
    ideas: ["sport", "events", "celebrations"],
    face: "font-display",
    text: "text-accent-photo",
    border: "border-t-accent-photo",
    link: { to: "/photography/#pacchetti", key: "contact.ideas.photoLink" },
  },
] as const;

const TABS = {
  dev: { active: "btn-dev btn-solid", submit: "contact.devCta" },
  photo: { active: "btn-photo btn-solid", submit: "contact.photoCta" },
} as const;

// The general form of each activity, behind a selector, so a request lands in
// the inbox that answers it. An idea's "Let's talk" picks the activity and
// names the idea in the email subject. The WhatsApp chat sends data to Meta,
// and the privacy notice names it.
export default function ContactBlock() {
  const { t } = useTranslation();
  const [area, setArea] = useState<Area>("dev");
  const [idea, setIdea] = useState<string | null>(null);
  const home = t("form.homeSource");
  // The home ideas pair a website with photos, so the first development
  // question is broader here than on the development page.
  const areaQuestions = t(`form.${area}.questions`, { returnObjects: true }) as FormQuestion[];
  const questions = area === "dev"
    ? [t("form.homeDevQuestion", { returnObjects: true }) as FormQuestion, ...areaQuestions.slice(1)]
    : areaQuestions;

  return (
    <section id="contact" className="site-section-full scroll-mt-16">
      <div className="site-container">
        <div className="text-center">
          {/* The ideas open the block and name it; the form follows, so a
              visitor meets something concrete before the fields. */}
          <div id="idee" className="scroll-mt-20">
            <h2 className="type-section-title">{t("contact.ideas.title")}</h2>
            <div className="h-px bg-line w-32 mx-auto mt-3" />

            {GROUPS.map((group) => (
              <div key={group.area} className="mt-12">
                <h3 className={`${group.face} ${group.text} text-lg`}>
                  {t(`home.${group.area}.sector`)}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
                  {group.ideas.map((id) => {
                    const title = t(`contact.ideas.${id}.title`);

                    return (
                      <div
                        key={id}
                        className={`border border-line border-t-2 ${group.border} rounded-lg p-6 flex flex-col`}
                      >
                        <h4 className="type-item-title">{title}</h4>
                        <p className="text-sm text-muted leading-relaxed mt-2 flex-grow">
                          {t(`contact.ideas.${id}.text`)}
                        </p>
                        <a
                          href="#scrivimi"
                          onClick={() => { setArea(group.area); setIdea(title); }}
                          className={`self-start mt-4 text-sm font-medium ${group.text} underline underline-offset-4`}
                        >
                          {t("contact.ideas.cta")}
                        </a>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to={group.link.to}
                  className={`inline-block mt-6 text-sm font-medium ${group.text}`}
                >
                  {t(group.link.key)} →
                </Link>
              </div>
            ))}
          </div>

          <div id="scrivimi" className="scroll-mt-24 mt-16">
            <p className="type-body text-muted">{t("contact.text")}</p>
            <div role="group" aria-label={t("form.chooseArea")} className="flex flex-wrap justify-center gap-3 mt-6">
              {(["dev", "photo"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={area === option}
                  onClick={() => { setArea(option); setIdea(null); }}
                  className={`btn btn-sm ${area === option ? TABS[option].active : "btn-neutral"}`}
                >
                  {t(`home.${option}.sector`)}
                </button>
              ))}
            </div>
          </div>

          {/* Keyed by area: switching activity starts a clean form instead of
              carrying answers into questions they were not written for. */}
          <div className="text-left mt-8">
            <ContactForm
              key={area}
              area={area}
              source={idea ? `${home}: ${idea}` : home}
              questions={questions}
              submitLabel={t(TABS[area].submit)}
            />
          </div>

          <div className="flex justify-center mt-8">
            <WhatsAppButton area="shared" />
          </div>
          <PlainAddress emails={[DEV_EMAIL, PHOTO_EMAIL]} className="mt-4" />
          <p className="text-sm text-muted mt-2">{t(`contact.reply.${area}`)}</p>
        </div>
      </div>
    </section>
  );
}
