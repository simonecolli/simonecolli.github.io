import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowLeft } from "react-icons/fi";
import Link from "../components/utils/LocalizedLink";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import PhotoCard from "../components/photography/PhotoCard";
import Lightbox from "../components/photography/Lightbox";
import { Photos, type Photo } from "../data/photography";
import { photoCategories } from "../data/photo_categories";
import { usePhotoFilter, type FilterValue } from "../hooks/usePhotoFilter";

// The full gallery, on its own page so the photography page stays short. The
// request goes through the form on the photography page.
export default function GalleryPage() {
  const { activeFilter, setActiveFilter, filteredPhotos } = usePhotoFilter(Photos);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const { t } = useTranslation();

  const filterOptions: FilterValue[] = [
    "All",
    ...photoCategories.filter((category) =>
      Photos.some((photo) => photo.category.includes(category)),
    ),
  ];

  return (
    <div className="app">
      <SEO
        titleKey="seo.gallery.title"
        descriptionKey="seo.gallery.description"
        keywordsKey="seo.gallery.keywords"
        path="/photography/gallery"
        image="/og/photography.png"
      />
      <Header />

      <main className="main-content pt-20">
        <section className="site-section-compact">
          <div className="site-container">
            <Link to="/photography/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-photo">
              <FiArrowLeft aria-hidden="true" />{t("graduation.back")}
            </Link>
            <h1 className="font-display type-hero-title mt-10">{t("photography.galleryTitle")}</h1>
            <div className="h-px bg-line w-32 mt-3 mb-4" />
            <p className="type-lead text-muted">{t("photography.galleryIntro")}</p>

            <div className="flex flex-wrap gap-2 mt-10 mb-12">
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

        <section className="site-section">
          <div className="site-container">
            <h2 className="type-section-title mb-6">{t("photography.ctaTitle")}</h2>
            <p className="text-muted leading-relaxed mb-8">{t("photography.ctaBody")}</p>
            <Link to="/photography/#modulo" className="btn btn-photo btn-solid">
              {t("photography.ctaButton")}
            </Link>
          </div>
        </section>
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
