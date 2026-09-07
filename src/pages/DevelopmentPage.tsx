import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";
import SEO from "../components/SEO";
import Logo from "../components/utils/Logo";
import { projects } from "../data/projects";

const DEV_EMAIL = "info.dev@simonecolli.com";

const SERVICES = [1, 6, 2, 3, 4, 5] as const;

export default function DevelopmentPage() {
  // Present development services, selected projects and the email contact.
  const { t } = useTranslation();
  const featured = projects.filter((project) => project.favourite);
  const linkClass = "text-sm font-medium text-accent-dev transition-colors";

  return (
    <div className="app">
      <SEO
        titleKey="development.pageTitle"
        descriptionKey="seo.development.description"
        keywordsKey="seo.development.keywords"
        path="/development"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section-compact relative">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-1 fade-in">
                <h1 className="font-mono type-hero-title">
                  {t("development.pageTitle")}
                </h1>
                <div className="h-px bg-line w-32 mt-3 mb-4" />
                <p className="type-lead text-muted">
                  {t("development.intro")}
                </p>
                <a href="#servizi" className="btn btn-dev mt-6">
                  {t("development.heroCta")}
                </a>
              </div>
              <div className="flex justify-center order-2">
                <Logo
                  variant="dev"
                  className="w-[clamp(8rem,min(26vh,34vw),18rem)] h-[clamp(8rem,min(26vh,34vw),18rem)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servizi" className="site-section scroll-mt-16">
          <div className="site-container">
            <h2 className="type-page-title mb-12">
              {t("development.servicesTitle")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((n) => (
                <div key={n} className="site-card">
                  <h3 className="text-lg font-medium mb-3">
                    {t(`development.service${n}Title`)}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {t(`development.service${n}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-page-title mb-6">
              {t("development.howTitle")}
            </h2>
            <p className="text-muted leading-relaxed">
              {t("development.howBody")}
            </p>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-page-title mb-12">
              {t("development.projectsTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} compact={true} />
              ))}
            </div>
            <div className="flex flex-wrap gap-8">
              <Link to="/projects" className={linkClass}>
                {t("development.projectsCta")}
              </Link>
              <Link to="/talks" className={linkClass}>
                {t("development.talksCta")}
              </Link>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div>
              <h2 className="type-page-title mb-6">
                {t("development.contactTitle")}
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {t("development.contactBody")}
              </p>
              <a href={`mailto:${DEV_EMAIL}`} className="btn btn-dev">
                {t("development.contactCta")}
              </a>
            </div>
          </div>
        </section>

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
