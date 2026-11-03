import Link from "../components/utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";
import PlainAddress from "../components/utils/PlainAddress";
import CaseHighlight from "../components/projects/CaseHighlight";
import SEO from "../components/SEO";
import { FEATURED_CASE_SLUG, projects } from "../data/projects";
import { DEV_EMAIL } from "../siteConfig";
import { useMailHref } from "../hooks/useMailHref";
import WhatsAppButton from "../components/utils/WhatsAppButton";
import { DEV_SERVICES } from "../data/devServices";

// Built to the same shape as /photography, differing in title face, accent and
// what stands beside the opening text: here the before and after of a real
// case, the proof a company arriving from an email needs first. linkClass
// leaves out hover:no-underline on purpose, so the underline from @layer base
// marks hover on the links.
export default function DevelopmentPage() {
  const { t } = useTranslation();
  const devMail = useMailHref("dev");
  const featured = projects.filter((project) => project.favourite);
  const linkClass = "text-sm font-medium text-accent-dev transition-colors";

  return (
    <div className="app">
      <SEO
        titleKey="seo.development.title"
        descriptionKey="seo.development.description"
        keywordsKey="seo.development.keywords"
        path="/development"
        image="/og/development.png"
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
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-6">
                  <a href={devMail} className="btn btn-dev">
                    {t("development.heroCta")}
                  </a>
                  <a href="#servizi" className={linkClass}>
                    {t("development.heroServices")}
                  </a>
                </div>
              </div>
              <div className="order-2">
                <CaseHighlight slug={FEATURED_CASE_SLUG} />
              </div>
            </div>
          </div>
        </section>

        <section id="servizi" className="site-section scroll-mt-16">
          <div className="site-container">
            <h2 className="type-page-title mb-12">
              {t("development.servicesTitle")}
            </h2>
            {/* One card per category page. The whole card is the link; the
                visible label says what the reader finds there. */}
            <div className="grid md:grid-cols-3 gap-6">
              {DEV_SERVICES.map(({ slug, id }) => (
                <div key={slug} className="site-card relative flex flex-col">
                  <h3 className="text-lg font-medium mb-3">
                    {t(`development.categories.${id}.title`)}
                  </h3>
                  <p className="text-muted leading-relaxed flex-grow">
                    {t(`development.categories.${id}.body`)}
                  </p>
                  <Link to={`/development/${slug}/`} className={`${linkClass} stretched-link inline-block mt-4`}>
                    {t("development.categoryLink")} →
                  </Link>
                </div>
              ))}
            </div>
            <p className="leading-relaxed mt-8 max-w-3xl">
              <strong className="font-medium">{t("services.clearPrices.title")}</strong>{" "}
              <span className="text-muted">{t("services.clearPrices.body")}</span>
            </p>
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
              <Link to="/projects/" className={linkClass}>
                {t("development.projectsCta")}
              </Link>
              <Link to="/talks/" className={linkClass}>
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
              <div className="flex flex-wrap gap-3">
                <a href={devMail} className="btn btn-dev">
                  {t("development.contactCta")}
                </a>
                <WhatsAppButton area="dev" />
              </div>
              <PlainAddress emails={[DEV_EMAIL]} className="mt-4" />
            </div>
          </div>
        </section>

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
