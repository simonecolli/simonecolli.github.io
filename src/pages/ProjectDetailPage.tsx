import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  // Look up the project by its slug, returning to the list if it is missing.
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const { t } = useTranslation();

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="app">
      <SEO
        titleKey={project.title}
        descriptionKey={project.shortDescription}
        keywordsKey="seo.projects.keywords"
        path={`/projects/${project.slug}`}
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-4xl mx-auto fade-in">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-dev transition-colors mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('projects.backToProjects')}
              </Link>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 bg-fg/5 text-muted rounded">
                    {t(project.status)}
                  </span>
                  <span className="text-xs text-muted">{project.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  {t(project.title)}
                </h1>
                <div className="h-px bg-line w-24 mb-6"></div>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-muted leading-relaxed">
                  {t(project.description)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 border border-line rounded text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="px-8 py-3 bg-bg text-fg border border-line hover:bg-transparent hover:text-fg transition-all flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t('common.viewOnGithub')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="px-8 py-3 border border-line text-fg hover:border-accent-dev hover:text-accent-dev transition-all flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t('common.liveDemo')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
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
