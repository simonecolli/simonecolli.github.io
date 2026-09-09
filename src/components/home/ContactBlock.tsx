import { useTranslation } from "react-i18next";

const DEV_EMAIL = "info.dev@simonecolli.com";
const PHOTO_EMAIL = "info.photo@simonecolli.com";

// No form: the hosting is static and there is no backend to receive one. Two
// mailto links add no external processor, so nothing for the privacy notice.
export default function ContactBlock() {
  const { t } = useTranslation();

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
            <a href={`mailto:${DEV_EMAIL}`} className="btn btn-dev">
              {t("contact.devCta")}
            </a>
            <a href={`mailto:${PHOTO_EMAIL}`} className="btn btn-photo">
              {t("contact.photoCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
