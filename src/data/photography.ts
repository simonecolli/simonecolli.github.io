import type { PhotoCategory } from "./photo_categories";

export interface Photo {
    id: number;
    src: string;
    alt: string;
    category: PhotoCategory[];
}

export const Photos: Photo[] = [

];