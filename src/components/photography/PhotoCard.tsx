import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Photo } from "../../data/photography";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="group cursor-pointer relative overflow-hidden rounded-lg
      bg-gray-100 border border-transparent hover:border-[var(--color-accent)]
      transition-colors duration-300"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View photo: ${photo.alt}`}
    >
      {/* Aspect ratio container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Blur placeholder background */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}

        {/* Main image with lazy loading */}
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`
            w-full h-full object-cover
            transition-opacity duration-700 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Error */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-sm">{t('common.failedToLoad')}</span>
          </div>
        )}

        {/* Hover overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category tags - always visible */}
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {photo.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 bg-white/95 border border-gray-200 rounded text-gray-600 backdrop-blur-sm shadow-sm"
            >
              {t('photoCategories.' + cat)}
            </span>
          ))}
        </div>
      </div>

      {/* Photo title below image */}
      <div className="p-3">
        <p className="text-sm text-gray-700 truncate group-hover:text-black transition-colors">
          {photo.alt}
        </p>
      </div>
    </div>
  );
}
