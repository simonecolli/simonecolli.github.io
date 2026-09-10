import { useTranslation } from "react-i18next";

// Twelve months recorded, twelve projected. The recurring share is drawn as
// the base of each past bar, because that is the part the projection can lean
// on; the projected months are outlines, not solid, for the same reason.
const HISTORY = [58, 72, 65, 88, 79, 95, 70, 102, 91, 84, 110, 97];
const RECURRING = [28, 28, 30, 30, 32, 32, 34, 34, 36, 36, 38, 38];
const FORECAST = [104, 96, 112, 105, 118, 109, 124, 115, 130, 121, 136, 128];

const BASE_Y = 200;
const BAR_W = 23;
const STEP = 26;
const FIRST_X = 60;

const x = (index: number) => FIRST_X + index * STEP;

// The summaries the panel shows: three, six and twelve months ahead.
const HORIZONS = [3, 6, 12];

export default function ForecastDiagram() {
  const { t } = useTranslation();
  const monthSuffix = t("diagrams.fhForecast.months");

  const legend = [
    { key: "history", x: 60, className: "diagram-bar" },
    { key: "recurring", x: 220, className: "diagram-bar-base" },
    { key: "forecast", x: 420, className: "diagram-bar-forecast" },
  ];

  return (
    <svg viewBox="0 0 760 250" className="diagram" role="img"
      aria-label={t("diagrams.fhForecast.alt")}>
      {legend.map((item) => (
        <g key={item.key}>
          <rect x={item.x} y={12} width={11} height={11} rx={2} className={item.className} />
          <text x={item.x + 17} y={18} className="diagram-text-sm" dominantBaseline="middle">
            {t(`diagrams.fhForecast.${item.key}`)}
          </text>
        </g>
      ))}

      {HISTORY.map((total, index) => (
        <g key={`h${index}`}>
          <rect x={x(index)} y={BASE_Y - total} width={BAR_W} height={total}
            className="diagram-bar" />
          <rect x={x(index)} y={BASE_Y - RECURRING[index]} width={BAR_W}
            height={RECURRING[index]} className="diagram-bar-base" />
        </g>
      ))}

      {FORECAST.map((total, index) => (
        <rect key={`f${index}`} x={x(12 + index)} y={BASE_Y - total} width={BAR_W}
          height={total} className="diagram-bar-forecast" />
      ))}

      <line x1={x(12) - 3} y1={44} x2={x(12) - 3} y2={BASE_Y + 4}
        className="diagram-rule diagram-rule-dashed" />
      <line x1={54} y1={BASE_Y} x2={690} y2={BASE_Y} className="diagram-rule" />

      {HORIZONS.map((months) => {
        const centre = x(12 + months - 1) + BAR_W / 2;
        return (
          <g key={months}>
            <line x1={centre} y1={BASE_Y} x2={centre} y2={BASE_Y + 6} className="diagram-rule" />
            <text x={centre} y={BASE_Y + 20} className="diagram-text-sm" textAnchor="middle">
              {`${months} ${monthSuffix}`}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
