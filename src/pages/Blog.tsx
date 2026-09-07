import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import WorkInProgress from "../components/utils/WorkInProgress";
import SEO from "../components/SEO";

export default function Blog() {
  // Show the blog placeholder until posts are available.
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="blog.pageTitle"
        descriptionKey="seo.blog.description"
        keywordsKey="seo.blog.keywords"
        path="/blog"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t('blog.pageTitle')}
              </h1>
              <div className="h-px bg-line w-24 mx-auto mb-6"></div>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {t('blog.pageDescription')}
              </p>
            </div>
          </div>
        </section>

        <WorkInProgress />

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
