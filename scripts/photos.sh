#!/bin/sh
# Builds the web variants of the masters in photos-src/ as
# <out>/<name>-<width>.webp. The masters stay out of public/ so they are never
# deployed; the widths must match the ones in src/lib/photos.ts. Variants newer
# than their master are skipped, so rerunning after adding a photo only encodes
# the new one. Needs cwebp (brew install webp).
set -eu
# A narrow master fails inside the pipeline; without pipefail xargs would hide it.
set -o pipefail

QUALITY=75

command -v cwebp >/dev/null || { echo "cwebp not found: brew install webp" >&2; exit 1; }

# Prints one NUL-separated job (width, master, variant) per missing variant.
jobs() {
  out=$1 widths=$2
  shift 2
  mkdir -p "$out"
  for master in "$@"; do
    name=$(basename "$master" .webp)
    # cwebp would upscale a narrower master and the srcset descriptor would lie.
    width=$(sips -g pixelWidth "$master" | awk '/pixelWidth/ { print $2 }')
    for w in $widths; do
      if [ "$width" -lt "$w" ]; then
        echo "$master is ${width}px wide, narrower than the ${w}px variant" >&2
        exit 1
      fi
    done
    for w in $widths; do
      variant="$out/$name-$w.webp"
      [ "$variant" -nt "$master" ] && continue
      echo "$variant" >&2
      printf '%s\0%s\0%s\0' "$w" "$master" "$variant"
    done
  done
}

{
  # PHOTO_WIDTHS: gallery, mosaic and lightbox.
  jobs public/assets/photos "480 960 1600" photos-src/*.webp
  # HERO_WIDTHS: the full-bleed home background, shown from 1024px up.
  jobs public/assets/other "1024 1600 2048" photos-src/other/hero.webp
} | xargs -0 -n 3 -P 8 sh -c 'cwebp -quiet -mt -q '"$QUALITY"' -metadata none -resize "$0" 0 "$1" -o "$2"'
