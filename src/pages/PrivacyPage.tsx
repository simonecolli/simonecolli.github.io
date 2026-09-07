import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import SEO from "../components/SEO";

const SECTIONS = [
  "controller",
  "data",
  "hosting",
  "fonts",
  "email",
  "rights",
] as const;

export default function PrivacyPage() {
  // Render the translated privacy sections in their reading order.
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="privacy.pageTitle"
        descriptionKey="seo.privacy.description"
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
              <p className="text-sm text-muted mb-12">{t("privacy.updated")}</p>

              <div className="space-y-10">
                {SECTIONS.map((section) => (
                  <div key={section}>
                    <h2 className="text-xl font-medium mb-3">
                      {t(`privacy.${section}Title`)}
                    </h2>
                    <p className="text-muted leading-relaxed">
                      {t(`privacy.${section}Body`)}
                    </p>
                  </div>
                ))}
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
