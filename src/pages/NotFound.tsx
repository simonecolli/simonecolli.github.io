import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function NotFound() {
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
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-2xl mx-auto text-center fade-in">
              <p className="text-7xl md:text-8xl font-light tracking-tight text-gray-300 mb-4">
                404
              </p>
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                {t('notFound.pageTitle')}
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {t('notFound.description')}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all"
                >
                  {t('common.backToHome')}
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-3 border border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all"
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
