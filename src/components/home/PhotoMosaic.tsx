import { useEffect, useState } from "react";
import { Photos, type Photo } from "../../data/photography";
import SectionBackground from "./SectionBackground";
import { responsivePhoto } from "../../lib/photos";
import Spinner from "../utils/Spinner";

// One column of columns-3 / sm:columns-4 / lg:columns-6.
const MOSAIC_SIZES = "(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 34vw";

const ORIENTAMENTI = [
  "3/2", "2/3", "2/3", "3/2", "2/3", "3/2", "3/2", "2/3",
  "2/3", "3/2", "3/2", "2/3", "3/2", "2/3", "2/3", "3/2",
  "3/2", "2/3", "3/2", "2/3", "2/3", "3/2", "2/3", "3/2",
  "2/3", "3/2", "2/3", "3/2", "3/2", "2/3",
] as const;

interface PhotoMosaicProps {
  fade: "left" | "right";
}

function MosaicImage({ src }: { src: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Spinner />}
      <img
        {...responsivePhoto(src, MOSAIC_SIZES)}
        alt=""
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        className="w-full h-full object-cover rounded-[3px]"
      />
    </>
  );
}

// Fisher-Yates on a copy, so every order is equally likely.
function shuffled<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Cells carry full-frame proportions. Each visit fills them with a different
// draw from all the photos. The prerendered page ships the cells empty, which
// still read as texture, and the draw happens once the page runs in the
// browser: drawing during the prerender would show one set of photos and then
// swap it for another.
export default function PhotoMosaic({ fade }: PhotoMosaicProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    setPhotos(shuffled(Photos).slice(0, ORIENTAMENTI.length));
  }, []);

  return (
    <SectionBackground fade={fade}>
      <div className="photo-mosaic-inner columns-3 sm:columns-4 lg:columns-6">
        {ORIENTAMENTI.map((aspetto, i) => {
          const foto = photos[i];
          return (
            <div
              key={i}
              className="photo-mosaic-cell relative"
              style={{ aspectRatio: aspetto }}
            >
              {foto && <MosaicImage key={foto.src} src={foto.src} />}
            </div>
          );
        })}
      </div>
    </SectionBackground>
  );
}
