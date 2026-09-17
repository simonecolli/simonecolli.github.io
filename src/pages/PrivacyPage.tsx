import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import { ANALYTICS_ENABLED, PREFERENCES_EVENT } from "../lib/analytics";
import SEO from "../components/SEO";

// Title/body pairs sharing a prefix in translation.json: adding a section
// means two keys and an entry here.
const SECTIONS = [
  "controller",
  "data",
  "hosting",
  "fonts",
  "email",
  "analytics",
  "storage",
  "recipients",
  "choices",
  "rights",
] as const;

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="privacy.pageTitle"
        descriptionKey={ANALYTICS_ENABLED ? "seo.privacy.description" : "seo.privacy.inactiveDescription"}
        keywordsKey="seo.privacy.keywords"
        path="/privacy"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-3xl mx-auto fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t("privacy.pageTitle")}
              </h1>
              <div className="h-px bg-line w-24 mb-6"></div>
              <p className="text-sm text-muted mb-6">{t("privacy.updated")}</p>
              <p className="border border-line rounded-lg p-4 mb-10">{t(ANALYTICS_ENABLED ? "privacy.analyticsActive" : "cookies.inactive")}</p>

              <div className="space-y-10">
                {SECTIONS.map((section) => (
                  <div key={section}>
                    <h2 className="text-xl font-medium mb-3">
                      {t(`privacy.${section}Title`)}
                    </h2>
                    <p className="text-muted leading-relaxed">
                      {t(`privacy.${section}${!ANALYTICS_ENABLED && ["data", "fonts", "analytics", "storage", "recipients", "choices"].includes(section) ? "Inactive" : ""}Body`)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-start gap-4">
                <button type="button" className="btn btn-neutral" onClick={() => window.dispatchEvent(new Event(PREFERENCES_EVENT))}>{t("cookies.preferences")}</button>
                <a href="https://business.safety.google/adsprocessorterms/" className="underline underline-offset-4">{t("cookies.googleTerms")}</a>
                <a href="https://policies.google.com/privacy" className="underline underline-offset-4">{t("cookies.googlePrivacy")}</a>
                <a href="https://policies.google.com/privacy/frameworks" className="underline underline-offset-4">{t("cookies.googleTransfers")}</a>
              </div>
            </div>
          </div>
        </section>

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
