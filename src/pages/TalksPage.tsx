import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";
import SEO from "../components/SEO";

import { talks } from "../data/talks";

export default function TalksPage() {
  // List talks with their topics and links to the detail pages.
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="talks.pageTitle"
        descriptionKey="seo.talks.description"
        keywordsKey="seo.talks.keywords"
        path="/talks"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t('talks.pageTitle')}
              </h1>
              <div className="h-px bg-line w-24 mx-auto mb-6"></div>
              <p className="text-lg text-muted leading-relaxed">
                {t('talks.pageDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {talks.map((talk, index) => (
                <ProjectCard
                  key={index}
                  project={talk}
                  showYear={true}
                  showLinks={true}
                  basePath="talks"
                />
              ))}
            </div>
          </div>
        </section>
        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
