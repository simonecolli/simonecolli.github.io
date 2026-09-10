interface WrappedTextProps {
  text: string;
  // Horizontal centre of the block, in viewBox units.
  x: number;
  // Vertical centre of the block, in viewBox units.
  y: number;
  // Roughly (box width - padding) / average glyph width at the font size used.
  maxChars: number;
  lineHeight?: number;
  className?: string;
}

// SVG text does not wrap, and the labels come from the translation files, so
// their length changes with the language and cannot be broken by hand. Lines
// are split on a character budget and the block is centred on `y`.
export default function WrappedText({
  text,
  x,
  y,
  maxChars,
  lineHeight = 15,
  className = "diagram-text",
}: WrappedTextProps) {
  const lines: string[] = [];
  let line = "";

  for (const word of text.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);

  const top = y - ((lines.length - 1) * lineHeight) / 2;

  return (
    <text x={x} y={top} className={className} textAnchor="middle" dominantBaseline="middle">
      {lines.map((content, index) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : lineHeight}>
          {content}
        </tspan>
      ))}
    </text>
  );
}
