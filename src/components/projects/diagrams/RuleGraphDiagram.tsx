import { useTranslation } from "react-i18next";
import WrappedText from "./WrappedText";

// One row per addressable element, laid out in the three stages the engine
// walks: inputs, formulas and conditions, outputs. The crossing curves are the
// point of the drawing - a row is referenced from any table, not only its own.
const ROW_Y = [54, 94, 134];
const OUT_Y = [54, 84, 114, 144];

export default function RuleGraphDiagram() {
  const { t } = useTranslation();
  const threshold = t("diagrams.mgpRuleGraph.threshold");

  const inputs = [
    { id: "a#1", label: t("diagrams.mgpRuleGraph.quantity") },
    { id: "a#2", label: t("diagrams.mgpRuleGraph.height") },
    { id: "a#3", label: t("diagrams.mgpRuleGraph.width") },
  ];

  const rules = [
    { expression: "b#1 = a#2 * a#3", label: t("diagrams.mgpRuleGraph.area") },
    { expression: `b#2 = b#1 > ${threshold}`, label: t("diagrams.mgpRuleGraph.condition") },
    { expression: "b#3 = b#1 * a#1", label: t("diagrams.mgpRuleGraph.totalArea") },
  ];

  return (
    <svg viewBox="0 0 760 200" className="diagram" role="img"
      aria-label={t("diagrams.mgpRuleGraph.alt")}>
      <defs>
        <marker id="mgp-graph-arrow" viewBox="0 0 8 8" refX="7" refY="4"
          markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="diagram-arrow-head" />
        </marker>
      </defs>

      <WrappedText text={t("diagrams.mgpRuleGraph.inputs")} x={105} y={20}
        maxChars={30} lineHeight={13} className="diagram-caption" />
      <WrappedText text={t("diagrams.mgpRuleGraph.formulas")} x={350} y={20}
        maxChars={34} lineHeight={13} className="diagram-caption" />
      <WrappedText text={t("diagrams.mgpRuleGraph.outputs")} x={685} y={20}
        maxChars={18} lineHeight={13} className="diagram-caption" />

      <rect x={20} y={48} width={170} height={126} rx={6} className="diagram-box" />
      {inputs.map((input, index) => (
        <g key={input.id}>
          <rect x={28} y={ROW_Y[index]} width={154} height={34} rx={4} className="diagram-row" />
          <text x={38} y={ROW_Y[index] + 18} className="diagram-mono" dominantBaseline="middle">
            {input.id}
          </text>
          <text x={78} y={ROW_Y[index] + 18} className="diagram-text-sm" dominantBaseline="middle">
            {input.label}
          </text>
        </g>
      ))}

      <rect x={250} y={48} width={200} height={126} rx={6} className="diagram-box" />
      {rules.map((rule, index) => (
        <g key={rule.expression}>
          <rect x={258} y={ROW_Y[index]} width={184} height={34} rx={4} className="diagram-row" />
          <text x={268} y={ROW_Y[index] + 13} className="diagram-mono">{rule.expression}</text>
          <text x={268} y={ROW_Y[index] + 27} className="diagram-text-sm">{rule.label}</text>
        </g>
      ))}

      <rect x={490} y={94} width={100} height={34} rx={17} className="diagram-box diagram-box-accent" />
      <WrappedText text={t("diagrams.mgpRuleGraph.checkpoint")} x={540} y={111}
        maxChars={14} lineHeight={13} className="diagram-text-sm" />

      <rect x={630} y={48} width={110} height={126} rx={6} className="diagram-box" />
      {["PDF", "DXF", "TLF", "CSV"].map((format, index) => (
        <g key={format}>
          <rect x={638} y={OUT_Y[index]} width={94} height={26} rx={4} className="diagram-row" />
          <text x={685} y={OUT_Y[index] + 14} className="diagram-text-sm" textAnchor="middle"
            dominantBaseline="middle">
            {format}
          </text>
        </g>
      ))}

      <g className="diagram-link" markerEnd="url(#mgp-graph-arrow)">
        <path d="M190 111 C220 111, 220 71, 246 71" />
        <path d="M190 151 C220 151, 220 71, 246 71" />
        <path d="M190 71 C220 71, 220 151, 246 151" />
        <path d="M450 111 L486 111" />
        <path d="M590 111 L626 111" />
      </g>
    </svg>
  );
}
