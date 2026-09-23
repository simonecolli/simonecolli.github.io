// Photos keep their logical path in the data ("/assets/photos/IMG_6888.webp"),
// but only the resized variants are deployed, built by scripts/photos.sh with
// these same widths. The masters are several MB each and 6000px wide.
export const PHOTO_WIDTHS = [480, 960, 1600] as const;

const FALLBACK_WIDTH = 960;

function variant(src: string, width: number) {
  return src.replace(/\.webp$/, `-${width}.webp`);
}

// `sizes` is the slot the image fills at each breakpoint, so the browser can
// pick the smallest variant that still covers it at the screen's density.
export function responsivePhoto(src: string, sizes: string) {
  return {
    src: variant(src, FALLBACK_WIDTH),
    srcSet: PHOTO_WIDTHS.map((width) => `${variant(src, width)} ${width}w`).join(", "),
    sizes,
  };
}
