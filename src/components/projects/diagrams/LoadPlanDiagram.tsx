import { useTranslation } from "react-i18next";

// Top view of one truck bed with the pieces nested on it, and the two
// sequences the plan produces. The arrangement is illustrative: it shows that
// assembly order and loading order are read off the same plan without being
// the same list.
const PIECES = [
  { x: 80, y: 58, w: 104, h: 74 },
  { x: 188, y: 58, w: 78, h: 74 },
  { x: 270, y: 58, w: 78, h: 74 },
  { x: 352, y: 58, w: 100, h: 74 },
  { x: 80, y: 136, w: 128, h: 76 },
  { x: 212, y: 136, w: 94, h: 76 },
  { x: 310, y: 136, w: 142, h: 76 },
];

const ASSEMBLY = [5, 1, 6, 2, 7, 3, 4];
const LOADING = [1, 2, 3, 4, 5, 6, 7];

function Sequence({ values, y }: { values: number[]; y: number }) {
  return (
    <g>
      {values.map((value, index) => {
        const cx = 507 + index * 34;
        return (
          <g key={index}>
            <circle cx={cx} cy={y} r={12} className="diagram-chip" />
            <text x={cx} y={y + 1} className="diagram-text-sm" textAnchor="middle"
              dominantBaseline="middle">
              {value}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export default function LoadPlanDiagram() {
  const { t } = useTranslation();

  return (
    <svg viewBox="0 0 760 250" className="diagram" role="img"
      aria-label={t("diagrams.mgpLoadPlan.alt")}>
      <text x={72} y={38} className="diagram-caption">
        {t("diagrams.mgpLoadPlan.bed")}
      </text>

      <rect x={20} y={76} width={44} height={118} rx={8} className="diagram-box" />
      <rect x={72} y={50} width={388} height={170} rx={4} className="diagram-box" />

      {PIECES.map((piece, index) => (
        <g key={index}>
          <rect x={piece.x} y={piece.y} width={piece.w} height={piece.h} rx={3}
            className="diagram-piece" />
          <text x={piece.x + piece.w / 2} y={piece.y + piece.h / 2}
            className="diagram-piece-label" textAnchor="middle" dominantBaseline="middle">
            {index + 1}
          </text>
        </g>
      ))}

      <text x={495} y={78} className="diagram-caption">
        {t("diagrams.mgpLoadPlan.assembly")}
      </text>
      <Sequence values={ASSEMBLY} y={104} />

      <text x={495} y={162} className="diagram-caption">
        {t("diagrams.mgpLoadPlan.loading")}
      </text>
      <Sequence values={LOADING} y={188} />
    </svg>
  );
}
