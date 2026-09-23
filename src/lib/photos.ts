// Photos keep their logical path in the data ("/assets/photos/IMG_6888.webp"),
// but only the resized variants are deployed, built by scripts/photos.sh with
// these same widths. The masters are several MB each and 6000px wide.
export const PHOTO_WIDTHS = [480, 960, 1600] as const;

// The home hero is a full-bleed background from 1024px up, so its variants
// start there; 2048 is the width of its master.
export const HERO_WIDTHS = [1024, 1600, 2048] as const;

const FALLBACK_WIDTH = 960;

function variant(src: string, width: number) {
  return src.replace(/\.webp$/, `-${width}.webp`);
}

export function variantSrcSet(src: string, widths: readonly number[]) {
  return widths.map((width) => `${variant(src, width)} ${width}w`).join(", ");
}

// `sizes` is the slot the image fills at each breakpoint, so the browser can
// pick the smallest variant that still covers it at the screen's density.
export function responsivePhoto(src: string, sizes: string) {
  return {
    src: variant(src, FALLBACK_WIDTH),
    srcSet: variantSrcSet(src, PHOTO_WIDTHS),
    sizes,
  };
}
