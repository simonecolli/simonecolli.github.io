import { Photos } from "../../data/photography";
import SectionBackground from "./SectionBackground";

const ORIENTAMENTI = [
  "3/2", "2/3", "2/3", "3/2", "2/3", "3/2", "3/2", "2/3",
  "2/3", "3/2", "3/2", "2/3", "3/2", "2/3", "2/3", "3/2",
  "3/2", "2/3", "3/2", "2/3", "2/3", "3/2", "2/3", "3/2",
  "2/3", "3/2", "2/3", "3/2", "3/2", "2/3",
] as const;

interface PhotoMosaicProps {
  fade: "left" | "right";
}

export default function PhotoMosaic({ fade }: PhotoMosaicProps) {
  // Keep the mosaic layout stable across prerendering, with empty cells as texture.
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
                  src={foto.src}
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
