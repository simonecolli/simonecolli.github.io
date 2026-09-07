import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { Photo } from "../../data/photography";

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

export default function PhotoCard({ photo, onClick }: PhotoCardProps) {
  // Open a photo by click or keyboard, with loading and error states.
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="group cursor-pointer relative overflow-hidden rounded-lg
      bg-fg/5 border border-transparent hover:border-accent-photo
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
      <div className="relative aspect-[4/3] overflow-hidden">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-fg/10 animate-pulse" />
        )}

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

        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-fg/10">
            <span className="text-muted text-sm">{t('common.failedToLoad')}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {photo.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 bg-bg/95 border border-line rounded text-muted backdrop-blur-sm shadow-sm"
            >
              {t('photoCategories.' + cat)}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3">
        <p className="text-sm text-muted truncate group-hover:text-fg transition-colors">
          {photo.alt}
        </p>
      </div>
    </div>
  );
}
