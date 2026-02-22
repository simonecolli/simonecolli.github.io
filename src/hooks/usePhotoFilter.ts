import { useState, useMemo } from "react";
import type { Photo } from "../data/photography";
import type { PhotoCategory } from "../data/photo_categories";

export type FilterValue = PhotoCategory | "All";

interface UsePhotoFilterReturn {
  activeFilter: FilterValue;
  setActiveFilter: (filter: FilterValue) => void;
  filteredPhotos: Photo[];
}

export function usePhotoFilter(photos: Photo[]): UsePhotoFilterReturn {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") {
      return photos;
    }
    return photos.filter((photo) => photo.category.includes(activeFilter));
  }, [photos, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredPhotos,
  };
}
