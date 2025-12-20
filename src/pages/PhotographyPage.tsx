import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import PhotoCard from "../components/photography/PhotoCard";
import Lightbox from "../components/photography/Lightbox";
import { Photos, type Photo } from "../data/photography";
import { photoCategories } from "../data/photo_categories";
import { usePhotoFilter, type FilterValue } from "../hooks/usePhotoFilter";

export default function PhotographyPage() {
  const { activeFilter, setActiveFilter, filteredPhotos } = usePhotoFilter(Photos);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const filterOptions: FilterValue[] = ["All", ...photoCategories];

  return (
    <div className="app">
      <Header />

      <main className="main-content pt-20">
        {/* Page Header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Photography
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Through my lens, I capture moments, emotions, and stories.
                Photography is my way of freezing time and creating meaningful
                memories.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm border rounded-full transition-all ${
                      activeFilter === filter
                        ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                        : "border-gray-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    }`}
                    aria-pressed={activeFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="tech-minimal-section">
          
          <div className="tech-minimal-container">
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
                <p className="text-gray-500 text-lg">
                  No photos found in this category.
                </p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 px-6 py-2 text-sm border border-gray-300 rounded-full hover:border-black hover:text-black transition-all"
                >
                  Show all photos
                </button>
              </div>
            )}
          </div>
        </section>

        <Back2Home />
      </main>

      <Footer />

      {/* Lightbox Modal */}
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
