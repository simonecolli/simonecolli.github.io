import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";

// data
import { talks } from "../data/talks";

export default function TalksPage() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Page Header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t('talks.pageTitle')}
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('talks.pageDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Talks Grid */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
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
