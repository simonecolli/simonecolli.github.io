import { useTranslation } from "react-i18next";
import WrappedText from "./WrappedText";

// Two lanes over the same width: the manual chain on top, drawn with dashed
// boxes, and the path through the platform below. Coordinates are written out
// rather than computed so the prerendered markup and the browser agree.
const BEFORE_X = [20, 142, 264, 386, 508, 630];
const BEFORE_W = 110;
const BEFORE_Y = 40;
const BEFORE_H = 92;

const AFTER_X = [20, 205, 390, 575];
const AFTER_W = 165;
const AFTER_Y = 218;
const AFTER_H = 76;

export default function ProcessDiagram() {
  const { t } = useTranslation();

  const before = [1, 2, 3, 4, 5, 6].map((n) => t(`diagrams.mgpProcess.before${n}`));
  const after = [1, 2, 3, 4].map((n) => t(`diagrams.mgpProcess.after${n}`));

  return (
    <svg viewBox="0 0 760 320" className="diagram" role="img"
      aria-label={t("diagrams.mgpProcess.alt")}>
      <defs>
        <marker id="mgp-process-arrow" viewBox="0 0 8 8" refX="7" refY="4"
          markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="diagram-arrow-head" />
        </marker>
      </defs>

      <text x={20} y={20} className="diagram-lane">
        {t("diagrams.mgpProcess.beforeLane").toUpperCase()}
      </text>

      {BEFORE_X.map((x, index) => (
        <g key={`b${index}`}>
          <rect x={x} y={BEFORE_Y} width={BEFORE_W} height={BEFORE_H} rx={6}
            className="diagram-box diagram-box-dashed" />
          <WrappedText text={before[index]} x={x + BEFORE_W / 2}
            y={BEFORE_Y + BEFORE_H / 2} maxChars={15} />
          {index < BEFORE_X.length - 1 && (
            <line x1={x + BEFORE_W + 2} y1={BEFORE_Y + BEFORE_H / 2}
              x2={x + BEFORE_W + 10} y2={BEFORE_Y + BEFORE_H / 2}
              className="diagram-link" markerEnd="url(#mgp-process-arrow)" />
          )}
        </g>
      ))}

      <text x={740} y={152} className="diagram-note" textAnchor="end">
        {t("diagrams.mgpProcess.repeat")}
      </text>

      <line x1={20} y1={180} x2={740} y2={180} className="diagram-rule" />

      <text x={20} y={202} className="diagram-lane diagram-lane-accent">
        {t("diagrams.mgpProcess.afterLane").toUpperCase()}
      </text>

      {AFTER_X.map((x, index) => (
        <g key={`a${index}`}>
          <rect x={x} y={AFTER_Y} width={AFTER_W} height={AFTER_H} rx={6}
            className="diagram-box diagram-box-accent" />
          <WrappedText text={after[index]} x={x + AFTER_W / 2}
            y={AFTER_Y + AFTER_H / 2} maxChars={24} />
          {index < AFTER_X.length - 1 && (
            <line x1={x + AFTER_W + 3} y1={AFTER_Y + AFTER_H / 2}
              x2={x + AFTER_W + 15} y2={AFTER_Y + AFTER_H / 2}
              className="diagram-link" markerEnd="url(#mgp-process-arrow)" />
          )}
        </g>
      ))}
    </svg>
  );
}
