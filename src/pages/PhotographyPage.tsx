import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import SEO from "../components/SEO";
import Logo from "../components/utils/Logo";
import PhotoCard from "../components/photography/PhotoCard";
import Lightbox from "../components/photography/Lightbox";
import { Photos, type Photo } from "../data/photography";
import { photoCategories } from "../data/photo_categories";
import { photoPackages } from "../data/photoPackages";
import { usePhotoFilter, type FilterValue } from "../hooks/usePhotoFilter";

const PHOTO_EMAIL = "info.photo@simonecolli.com";

const INFO = [1, 2, 3] as const;

export default function PhotographyPage() {
  // Show packages and contact details, adding the gallery when photos are available.
  const { activeFilter, setActiveFilter, filteredPhotos } = usePhotoFilter(Photos);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const { t } = useTranslation();

  const filterOptions: FilterValue[] = ["All", ...photoCategories];

  return (
    <div className="app">
      <SEO
        titleKey="photography.pageTitle"
        descriptionKey="seo.photography.description"
        keywordsKey="seo.photography.keywords"
        path="/photography"
      />
      <Header />

      <main className="main-content pt-20">
        <section className="site-section-compact relative">
          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="flex justify-center order-1">
                <Logo
                  variant="photo"
                  className="w-[clamp(8rem,min(26vh,34vw),18rem)] h-[clamp(8rem,min(26vh,34vw),18rem)]"
                />
              </div>
              <div className="order-2 fade-in">
                <h1 className="font-display type-hero-title">
                  {t("photography.pageTitle")}
                </h1>
                <div className="h-px bg-line w-32 mt-3 mb-4" />
                <p className="type-lead text-muted">
                  {t("photography.intro")}
                </p>
                <a href="#pacchetti" className="btn btn-photo mt-6">
                  {t("photography.heroCta")}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-page-title mb-12">
              {t("photography.infoTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {INFO.map((n) => (
                <div key={n} className="site-card">
                  <h3 className="text-lg font-medium mb-3">
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

        {Photos.length > 0 && (
          <section id="galleria" className="site-section scroll-mt-16">
            <div className="site-container">
              <h2 className="type-page-title mb-6">
                {t("photography.galleryTitle")}
              </h2>

              <div className="flex flex-wrap gap-2 mb-12">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm border rounded-full transition-all ${
                      activeFilter === filter
                        ? "bg-accent-photo text-bg border-accent-photo"
                        : "border-line hover:border-accent-photo hover:text-accent-photo"
                    }`}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter === "All" ? t("photography.filterAll") : t("photoCategories." + filter)}
                  </button>
                ))}
              </div>

              {filteredPhotos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPhotos.map((photo) => (
                    <PhotoCard
                      key={photo.id}
                      photo={photo}
                      onClick={() => setLightboxPhoto(photo)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted text-lg">{t("photography.noPhotos")}</p>
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="mt-4 px-6 py-2 text-sm border border-line rounded-full hover:border-fg hover:text-fg transition-all"
                  >
                    {t("photography.showAll")}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="pacchetti" className="site-section scroll-mt-16">
          <div className="site-container">
            <h2 className="type-page-title mb-6">
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
                    <h3 className="text-xl font-medium">{t(pkg.title)}</h3>
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
                        {pkg.fromPrice
                          ? t("photography.priceFrom", { price: pkg.fromPrice })
                          : t("photography.priceOnRequest")}
                      </p>
                      {pkg.fromPrice && pkg.fromNote && (
                        <p className="text-xs text-muted mt-1">{t(pkg.fromNote)}</p>
                      )}
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
              <h2 className="type-page-title mb-6">
                {t("photography.ctaTitle")}
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                {t("photography.ctaBody")}
              </p>
              <a href={`mailto:${PHOTO_EMAIL}`} className="btn btn-photo">
                {t("photography.ctaButton")}
              </a>
            </div>
          </div>
        </section>

        <Back2Home />
      </main>

      <Footer />

      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          photos={filteredPhotos}
          onClose={() => setLightboxPhoto(null)}
          onNavigate={(photo) => setLightboxPhoto(photo)}
        />
      )}
    </div>
  );
}
