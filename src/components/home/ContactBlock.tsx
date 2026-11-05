import { useTranslation } from "react-i18next";
import { DEV_EMAIL, PHOTO_EMAIL, mailtoHref } from "../../siteConfig";
import { useMailHref } from "../../hooks/useMailHref";
import PlainAddress from "../utils/PlainAddress";
import WhatsAppButton from "../utils/WhatsAppButton";
import Link from "../utils/LocalizedLink";

// One row of ideas per activity, each in that activity's face and accent and
// each writing to that activity's inbox, so a request lands where it is
// answered. The development ideas pair a website with photos; the photography
// ideas are shoots on their own. Class names stay literal for Tailwind.
const GROUPS = [
  {
    area: "dev",
    ideas: ["opening", "professional", "company"],
    email: DEV_EMAIL,
    bodyKey: "contact.ideas.body",
    face: "font-mono",
    text: "text-accent-dev",
    border: "border-t-accent-dev",
    link: { to: "/development/siti-web/", key: "contact.ideas.websitesLink" },
  },
  {
    area: "photo",
    ideas: ["sport", "events", "celebrations"],
    email: PHOTO_EMAIL,
    bodyKey: "contact.photoMail.body",
    face: "font-display",
    text: "text-accent-photo",
    border: "border-t-accent-photo",
    link: { to: "/photography/#pacchetti", key: "contact.ideas.photoLink" },
  },
] as const;

// No form: the hosting is static and there is no backend to receive one. The
// mailto links add no external processor; the WhatsApp chat does (Meta), and
// the privacy notice has to name it.
export default function ContactBlock() {
  const { t } = useTranslation();
  const devMail = useMailHref("dev");
  const photoMail = useMailHref("photo");

  return (
    <section id="contact" className="site-section-full scroll-mt-16">
      <div className="site-container">
        <div className="text-center">
          {/* The ideas open the block and name it; the ways to write follow,
              so a visitor meets something concrete before the buttons. */}
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
                    const href = mailtoHref(
                      group.email,
                      t("contact.ideas.subject", { idea: title, interpolation: { escapeValue: false } }),
                      t(group.bodyKey),
                    );

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
                          href={href}
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

          <p className="type-body text-muted mt-16">{t("contact.text")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href={devMail} className="btn btn-dev btn-solid">
              {t("contact.devCta")}
            </a>
            <a href={photoMail} className="btn btn-photo btn-solid">
              {t("contact.photoCta")}
            </a>
            <WhatsAppButton area="shared" />
          </div>

          <PlainAddress emails={[DEV_EMAIL, PHOTO_EMAIL]} className="mt-4" />
        </div>
      </div>
    </section>
  );
}
