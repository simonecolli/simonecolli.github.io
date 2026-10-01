import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";
import SEO from "../components/SEO";

import { projects } from "../data/projects";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="seo.projects.title"
        descriptionKey="seo.projects.description"
        keywordsKey="seo.projects.keywords"
        path="/projects"
        image="/og/projects.png"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t('projects.pageTitle')}
              </h1>
              <div className="h-px bg-line w-24 mx-auto mb-6"></div>
              <p className="text-lg text-muted leading-relaxed">
                {t('projects.pageDescription')}
              </p>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            {/* The cards carry H3 titles, as they do on /development under a
                visible H2; this keeps the outline from jumping H1 to H3. */}
            <h2 className="sr-only">{t('projects.listHeading')}</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  showYear={true}
                  showLinks={true}
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
