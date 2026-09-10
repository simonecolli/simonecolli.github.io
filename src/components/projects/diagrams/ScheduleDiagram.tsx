import { useTranslation } from "react-i18next";

// One week: the hours declared as available, the commitments that are fixed
// (work or personal, they cost the same time), and the work the optimiser
// placed in what was left.
const DAY_X = [60, 158, 256, 354, 452, 550, 648];
const DAY_W = 92;

const TOP = 40;
const HOUR_H = 17.6;
const FIRST_HOUR = 9;
const LAST_HOUR = 19;

const y = (hour: number) => TOP + (hour - FIRST_HOUR) * HOUR_H;

const AVAILABLE: ([number, number] | null)[] = [
  [9, 18], [9, 18], [9, 18], [9, 18], [9, 17], [9, 13], null,
];

const BLOCKS: { day: number; from: number; to: number; fixed?: boolean }[] = [
  { day: 0, from: 9, to: 12 },
  { day: 0, from: 13, to: 14, fixed: true },
  { day: 0, from: 14, to: 17 },
  { day: 1, from: 9, to: 13 },
  { day: 1, from: 17, to: 19, fixed: true },
  { day: 2, from: 9, to: 10, fixed: true },
  { day: 2, from: 10, to: 13 },
  { day: 2, from: 14, to: 16 },
  { day: 3, from: 9, to: 12 },
  { day: 3, from: 14, to: 16, fixed: true },
  { day: 4, from: 9, to: 11 },
  { day: 4, from: 11, to: 12, fixed: true },
  { day: 4, from: 13, to: 16 },
  { day: 5, from: 10, to: 12, fixed: true },
];

const GUIDES = [9, 11, 13, 15, 17, 19];

export default function ScheduleDiagram() {
  const { t } = useTranslation();

  const legend = [
    { key: "available", x: 60, className: "diagram-slot" },
    { key: "fixed", x: 210, className: "diagram-block-fixed" },
    { key: "planned", x: 430, className: "diagram-block-task" },
  ];

  return (
    <svg viewBox="0 0 760 262" className="diagram" role="img"
      aria-label={t("diagrams.fhSchedule.alt")}>
      {DAY_X.map((dayX, index) => (
        <text key={`d${index}`} x={dayX + DAY_W / 2} y={26} className="diagram-text-sm"
          textAnchor="middle">
          {t(`diagrams.fhSchedule.day${index + 1}`)}
        </text>
      ))}

      {GUIDES.map((hour) => (
        <g key={`g${hour}`}>
          <text x={50} y={y(hour)} className="diagram-text-sm" textAnchor="end"
            dominantBaseline="middle">
            {hour}
          </text>
          <line x1={60} y1={y(hour)} x2={740} y2={y(hour)} className="diagram-rule" />
        </g>
      ))}

      {AVAILABLE.map((hours, index) =>
        hours ? (
          <rect key={`a${index}`} x={DAY_X[index]} y={y(hours[0])} width={DAY_W}
            height={y(hours[1]) - y(hours[0])} rx={3} className="diagram-slot" />
        ) : null
      )}

      {BLOCKS.map((block, index) => (
        <rect key={`b${index}`} x={DAY_X[block.day] + 6} y={y(block.from) + 1}
          width={DAY_W - 12} height={y(block.to) - y(block.from) - 2} rx={3}
          className={block.fixed ? "diagram-block-fixed" : "diagram-block-task"} />
      ))}

      {legend.map((item) => (
        <g key={item.key}>
          <rect x={item.x} y={y(LAST_HOUR) + 16} width={11} height={11} rx={2}
            className={item.className} />
          <text x={item.x + 17} y={y(LAST_HOUR) + 22} className="diagram-text-sm"
            dominantBaseline="middle">
            {t(`diagrams.fhSchedule.${item.key}`)}
          </text>
        </g>
      ))}
    </svg>
  );
}
