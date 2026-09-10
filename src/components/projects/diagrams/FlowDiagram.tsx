import { useTranslation } from "react-i18next";
import WrappedText from "./WrappedText";

// The claim of the project drawn twice: above, the tools that held the same
// information without knowing about each other - no arrows between them, which
// is the point; below, one chain, with every step feeding the analysis.
const X = [20, 168, 316, 464, 612];
const W = 128;

const BEFORE_Y = 38;
const BEFORE_H = 58;
const BEFORE_OFFSET = [0, 12, 0, 12, 0];

const CHAIN_Y = 176;
const CHAIN_H = 58;

export default function FlowDiagram() {
  const { t } = useTranslation();

  const before = [1, 2, 3, 4, 5].map((n) => t(`diagrams.fhFlow.before${n}`));
  const chain = [1, 2, 3, 4, 5].map((n) => t(`diagrams.fhFlow.step${n}`));

  return (
    <svg viewBox="0 0 760 320" className="diagram" role="img"
      aria-label={t("diagrams.fhFlow.alt")}>
      <defs>
        <marker id="fh-flow-arrow" viewBox="0 0 8 8" refX="7" refY="4"
          markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="diagram-arrow-head" />
        </marker>
      </defs>

      <text x={20} y={20} className="diagram-lane">
        {t("diagrams.fhFlow.beforeLane").toUpperCase()}
      </text>

      {X.map((x, index) => {
        const y = BEFORE_Y + BEFORE_OFFSET[index];
        return (
          <g key={`b${index}`}>
            <rect x={x} y={y} width={W} height={BEFORE_H} rx={6}
              className="diagram-box diagram-box-dashed" />
            <WrappedText text={before[index]} x={x + W / 2} y={y + BEFORE_H / 2}
              maxChars={18} />
          </g>
        );
      })}

      <line x1={20} y1={132} x2={740} y2={132} className="diagram-rule" />

      <text x={20} y={158} className="diagram-lane diagram-lane-accent">
        {t("diagrams.fhFlow.afterLane").toUpperCase()}
      </text>

      {X.map((x, index) => (
        <g key={`c${index}`}>
          <rect x={x} y={CHAIN_Y} width={W} height={CHAIN_H} rx={6}
            className="diagram-box diagram-box-accent" />
          <WrappedText text={chain[index]} x={x + W / 2} y={CHAIN_Y + CHAIN_H / 2}
            maxChars={18} />
          {index < X.length - 1 && (
            <line x1={x + W + 3} y1={CHAIN_Y + CHAIN_H / 2}
              x2={x + W + 17} y2={CHAIN_Y + CHAIN_H / 2}
              className="diagram-link" markerEnd="url(#fh-flow-arrow)" />
          )}
          <line x1={x + W / 2} y1={CHAIN_Y + CHAIN_H + 2} x2={x + W / 2} y2={264}
            className="diagram-link" markerEnd="url(#fh-flow-arrow)" />
        </g>
      ))}

      <rect x={20} y={268} width={720} height={40} rx={6} className="diagram-box" />
      <WrappedText text={t("diagrams.fhFlow.outcome")} x={380} y={288} maxChars={100} />
    </svg>
  );
}
