#!/bin/sh
# Renders the link-preview cards for the section pages into public/og/, from
# scripts/og/card.html in headless Chrome. The project cards in public/og/ were
# made separately and are not touched. Rerun after changing a card below.
# Each line: file|accent (dev, photo, neutral)|eyebrow|title|lead|url
set -eu

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TEMPLATE="$(cd "$(dirname "$0")" && pwd)/og/card.html"
OUT=public/og

[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }
PROFILE=$(mktemp -d)
trap 'rm -rf "$PROFILE"' EXIT

encode() {
  python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1]))' "$1"
}

while IFS='|' read -r file accent eyebrow title lead url; do
  [ -z "$file" ] && continue
  query="accent=$accent&eyebrow=$(encode "$eyebrow")&title=$(encode "$title")&lead=$(encode "$lead")&url=$(encode "$url")"
  # Headless Chrome writes the screenshot but does not always exit afterwards,
  # so it runs in the background and is stopped once the file is complete.
  rm -f "$OUT/$file"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --user-data-dir="$PROFILE" \
    --window-size=1200,630 --virtual-time-budget=2000 \
    --screenshot="$OUT/$file" "file://$TEMPLATE?$query" </dev/null >/dev/null 2>&1 &
  chrome=$!
  tries=0
  until [ -s "$OUT/$file" ] || [ $tries -ge 60 ]; do sleep 0.5; tries=$((tries + 1)); done
  sleep 1
  kill "$chrome" 2>/dev/null || true
  wait "$chrome" 2>/dev/null || true
  [ -s "$OUT/$file" ] || { echo "no screenshot for $file" >&2; exit 1; }
  echo "$OUT/$file"
done <<'CARDS'
home.png|neutral|Simone Colli — Salsomaggiore Terme, Parma|Sviluppo software e fotografia|Software su misura per piccole e medie imprese e fotografia di sport, eventi e lauree a Parma e Salsomaggiore Terme.|simonecolli.com
development.png|dev|Simone Colli — Sviluppatore software freelance|Software su misura per PMI|Applicazioni web, automazione di processi e ottimizzazione per aziende di Parma, Piacenza e Reggio Emilia.|simonecolli.com/development
photography.png|photo|Simone Colli — Fotografo|Fotografia di sport ed eventi|Sport, cerimonie, natura e dettagli. Fotografo a Parma e Salsomaggiore Terme, Emilia-Romagna.|simonecolli.com/photography
degree.png|photo|Simone Colli — Fotografo|Servizi fotografici di laurea|Proclamazione, All Inclusive e formula gruppi, anche in trasferta, con prezzi di partenza indicati.|simonecolli.com/photography/degree
CARDS
