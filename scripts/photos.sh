#!/bin/sh
# Builds the web variants of every master in photos-src/ into
# public/assets/photos/<name>-<width>.webp. The masters stay out of public/ so
# they are never deployed; the widths must match PHOTO_WIDTHS in
# src/lib/photos.ts. Variants newer than their master are skipped, so rerunning
# after adding a photo only encodes the new one. Needs cwebp (brew install webp).
set -eu

SRC=photos-src
OUT=public/assets/photos
WIDTHS="480 960 1600"
QUALITY=75

command -v cwebp >/dev/null || { echo "cwebp not found: brew install webp" >&2; exit 1; }
mkdir -p "$OUT"

for master in "$SRC"/*.webp; do
  name=$(basename "$master" .webp)
  # cwebp would upscale a narrower master and the srcset descriptor would lie.
  width=$(sips -g pixelWidth "$master" | awk '/pixelWidth/ { print $2 }')
  for w in $WIDTHS; do
    if [ "$width" -lt "$w" ]; then
      echo "$master is ${width}px wide, narrower than the ${w}px variant" >&2
      exit 1
    fi
  done
  for w in $WIDTHS; do
    variant="$OUT/$name-$w.webp"
    [ "$variant" -nt "$master" ] && continue
    echo "$variant" >&2
    printf '%s\0%s\0%s\0' "$w" "$master" "$variant"
  done
done | xargs -0 -n 3 -P 8 sh -c 'cwebp -quiet -mt -q '"$QUALITY"' -metadata none -resize "$0" 0 "$1" -o "$2"'
