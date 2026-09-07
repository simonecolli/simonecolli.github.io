import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function NotFound() {
  // Help visitors return home from an unknown URL.
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="notFound.pageTitle"
        descriptionKey="seo.notFound.description"
        keywordsKey="seo.notFound.keywords"
        noindex
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-2xl mx-auto text-center fade-in">
              <p className="text-7xl md:text-8xl font-light tracking-tight text-muted mb-4">
                404
              </p>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                {t('notFound.pageTitle')}
              </h1>
              <div className="h-px bg-line w-24 mx-auto mb-6"></div>
              <p className="text-lg text-muted leading-relaxed mb-10">
                {t('notFound.description')}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-3 bg-fg text-bg border border-fg hover:bg-transparent hover:text-fg transition-all"
                >
                  {t('common.backToHome')}
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-3 border border-line text-fg hover:border-fg hover:text-fg transition-all"
                >
                  {t('notFound.browseProjects')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
