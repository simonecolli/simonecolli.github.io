import { useTranslation } from "react-i18next";
import { DEV_EMAIL, PHOTO_EMAIL, mailtoHref } from "../../siteConfig";
import { useMailHref } from "../../hooks/useMailHref";
import PlainAddress from "../utils/PlainAddress";

const IDEAS = ["opening", "professional", "company"] as const;

// No form: the hosting is static and there is no backend to receive one. Two
// mailto links add no external processor, so nothing for the privacy notice.
// The ideas are the offers that need both activities at once, so they live on
// the one page that holds both; their messages go to the development inbox
// with the idea already named in the subject.
export default function ContactBlock() {
  const { t } = useTranslation();
  const devMail = useMailHref("dev");
  const photoMail = useMailHref("photo");

  return (
    <section id="contact" className="site-section-full scroll-mt-16">
      <div className="site-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="type-section-title">
            {t("contact.title")}
          </h2>
          <div className="h-px bg-line w-32 mx-auto mt-3 mb-4" />
          <p className="type-body text-muted">{t("contact.text")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href={devMail} className="btn btn-dev">
              {t("contact.devCta")}
            </a>
            <a href={photoMail} className="btn btn-photo">
              {t("contact.photoCta")}
            </a>
          </div>

          <PlainAddress emails={[DEV_EMAIL, PHOTO_EMAIL]} className="mt-4" />

          <div id="idee" className="mt-16 scroll-mt-20">
            <h3 className="text-xl font-medium">{t("contact.ideas.title")}</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6 text-left">
              {IDEAS.map((id) => {
                const title = t(`contact.ideas.${id}.title`);
                const href = mailtoHref(
                  DEV_EMAIL,
                  t("contact.ideas.subject", { idea: title, interpolation: { escapeValue: false } }),
                  t("contact.ideas.body"),
                );

                return (
                  <div key={id} className="border border-line rounded-lg p-6 flex flex-col">
                    <h4 className="text-lg font-medium">{title}</h4>
                    <p className="text-sm text-muted leading-relaxed mt-2 flex-grow">
                      {t(`contact.ideas.${id}.text`)}
                    </p>
                    <a
                      href={href}
                      className="self-start mt-4 text-sm font-medium text-fg underline underline-offset-4"
                    >
                      {t("contact.ideas.cta")}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
