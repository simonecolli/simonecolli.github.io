import Link from "../components/utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import SEO from "../components/SEO";
import PhotoMosaic from "../components/home/PhotoMosaic";
import PlainAddress from "../components/utils/PlainAddress";
import ContactForm, { type FormQuestion } from "../components/utils/ContactForm";
import { photoPackages } from "../data/photoPackages";
import WhatsAppButton from "../components/utils/WhatsAppButton";
import { PHOTO_EMAIL } from "../siteConfig";

const INFO = [1, 2, 3] as const;

// The gallery has a page of its own, so this one stays short. The includes
// list is guarded because i18next returns the key itself, not an array, when
// a key is missing.
export default function PhotographyPage() {
  const { t } = useTranslation();

  return (
    <div className="app">
      <SEO
        titleKey="seo.photography.title"
        descriptionKey="seo.photography.description"
        keywordsKey="seo.photography.keywords"
        path="/photography"
        image="/og/photography.png"
      />
      <Header />

      <main className="main-content pt-20">
        {/* Same mosaic as the home photo section: the page opens on the photos. */}
        <section className="site-section-compact relative overflow-hidden">
          <PhotoMosaic fade="right" />
          <div className="site-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="hidden lg:block" />
              <div className="rounded-lg border border-line bg-bg p-6 sm:p-8 lg:p-10 shadow-sm">
                <h1 className="font-display type-hero-title">
                  {t("photography.pageTitle")}
                </h1>
                <div className="h-px bg-line w-32 mt-3 mb-4" />
                <p className="type-lead text-muted">
                  {t("photography.intro")}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="#pacchetti" className="btn btn-photo">
                    {t("photography.heroCta")}
                  </a>
                  <Link to="/photography/gallery/" className="btn btn-neutral">
                    {t("photography.galleryCta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-section-title mb-12">
              {t("photography.infoTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {INFO.map((n) => (
                <div key={n} className="site-card">
                  <h3 className="type-item-title mb-3">
                    {t(`photography.info${n}Title`)}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {t(`photography.info${n}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pacchetti" className="site-section scroll-mt-16">
          <div className="site-container">
            <h2 className="type-section-title mb-6">
              {t("photography.packagesTitle")}
            </h2>
            <p className="text-muted leading-relaxed mb-12">
              {t("photography.packagesIntro")}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoPackages.map((pkg) => {
                const raw = t(pkg.includes, { returnObjects: true });
                const includes = Array.isArray(raw) ? (raw as string[]) : [];

                return (
                  <div key={pkg.id} className="site-card flex flex-col">
                    <h3 className="type-subsection-title">{t(pkg.title)}</h3>
                    <p className="text-sm text-muted mt-1">{t(pkg.subtitle)}</p>
                    <div className="h-px bg-line w-16 my-4" />
                    <ul className="space-y-2 flex-grow">
                      {includes.map((item, i) => (
                        <li key={i} className="flex gap-3 text-muted leading-relaxed">
                          <span className="text-accent-photo shrink-0" aria-hidden="true">
                            &mdash;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-accent-photo">
                        {pkg.priceLabel ? t(pkg.priceLabel) : pkg.fromPrice
                          ? t("photography.priceFrom", { price: pkg.fromPrice })
                          : t("photography.priceOnRequest")}
                      </p>
                      {pkg.fromPrice && pkg.fromNote && (
                        <p className="text-xs text-muted mt-1">{t(pkg.fromNote)}</p>
                      )}
                      {pkg.note && <p className="text-sm text-muted mt-2">{t(pkg.note)}</p>}
                      {pkg.href && pkg.cta && <Link to={pkg.href} className="mt-4 inline-block text-accent-photo underline underline-offset-4">{t(pkg.cta)}</Link>}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-muted leading-relaxed mt-8">
              {t("photography.packagesNote")}
            </p>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div>
              <h2 className="type-section-title mb-6">
                {t("photography.ctaTitle")}
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {t("photography.ctaBody")}
              </p>
              <ContactForm
                area="photo"
                source={t("form.photo.source")}
                questions={t("form.photo.questions", { returnObjects: true }) as FormQuestion[]}
                submitLabel={t("photography.ctaButton")}
              />
              <div className="flex flex-wrap gap-3 mt-8">
                <WhatsAppButton area="photo" />
              </div>
              <PlainAddress emails={[PHOTO_EMAIL]} className="mt-4" />
              <p className="text-sm text-muted mt-2">{t("contact.reply.photo")}</p>
            </div>
          </div>
        </section>

        <Back2Home />
      </main>

      <Footer />
    </div>
  );
}
