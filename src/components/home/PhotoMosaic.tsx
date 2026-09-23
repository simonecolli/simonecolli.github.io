import { Photos } from "../../data/photography";
import SectionBackground from "./SectionBackground";
import { responsivePhoto } from "../../lib/photos";

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

// Cells carry full-frame proportions so real shots drop in uncropped, and the
// sequence is written out rather than randomised, which would not survive
// hydration. Empty cells still read as texture while Photos is empty.
export default function PhotoMosaic({ fade }: PhotoMosaicProps) {
  return (
    <SectionBackground fade={fade}>
      <div className="photo-mosaic-inner columns-3 sm:columns-4 lg:columns-6">
        {ORIENTAMENTI.map((aspetto, i) => {
          const foto = Photos[i];
          return (
            <div
              key={i}
              className="photo-mosaic-cell"
              style={{ aspectRatio: aspetto }}
            >
              {foto && (
                <img
                  {...responsivePhoto(foto.src, MOSAIC_SIZES)}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[3px]"
                />
              )}
            </div>
          );
        })}
      </div>
    </SectionBackground>
  );
}
