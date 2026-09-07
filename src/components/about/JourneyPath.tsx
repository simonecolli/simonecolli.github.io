import { useState, type CSSProperties } from "react";
import { useTranslation } from "react-i18next";
import { timeline, type TimelineEvent } from "../../data/timeline";

const COLUMNS = 3;

const DOT_COLOR: Record<TimelineEvent["type"], string> = {
  education: "bg-blue-600",
  work: "bg-green-600",
  project: "bg-orange-600",
  talk: "bg-teal-600",
  personal: "bg-purple-600",
};

export default function JourneyPath() {
  // Keep events chronological in the DOM and show one description at a time.
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);

  const chronological = [...timeline].reverse();

  const rows: TimelineEvent[][] = [];
  for (let i = 0; i < chronological.length; i += COLUMNS) {
    rows.push(chronological.slice(i, i + COLUMNS));
  }

  return (
    <ol
      className="journey"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpenId(null);
      }}
    >
      {rows.map((row, rowIndex) => (
        <li
          key={rowIndex}
          className={`journey-row ${rowIndex % 2 === 1 ? "journey-row-back" : ""}`}
          style={{ "--journey-row-items": row.length } as CSSProperties}
        >
          {(row.length > 1 || rowIndex > 0) && (
            <div className="journey-rail" aria-hidden="true" />
          )}

          <div className="journey-cells">
            {row.map((item, cellIndex) => {
              const isRowEnd = cellIndex === row.length - 1;
              const hasNextRow = rowIndex < rows.length - 1;
              const id = item.title;
              const tipId = `journey-tip-${rowIndex}-${cellIndex}`;
              const isOpen = openId === id;

              return (
                <article key={id} className="journey-cell">
                  {isRowEnd && hasNextRow && (
                    <span className="journey-turn" aria-hidden="true" />
                  )}

                  <button
                    type="button"
                    className={`journey-dot ${DOT_COLOR[item.type]}`}
                    aria-label={t(item.title)}
                    aria-describedby={tipId}
                    onMouseEnter={() => setOpenId(id)}
                    onMouseLeave={() => setOpenId((c) => (c === id ? null : c))}
                    onFocus={() => setOpenId(id)}
                    onBlur={() => setOpenId((c) => (c === id ? null : c))}
                    onClick={() => setOpenId((c) => (c === id ? null : id))}
                  />

                  <div className="journey-head">
                    <span className="journey-year">{item.year}</span>
                    <h3 className="journey-title">{t(item.title)}</h3>

                    <div
                      id={tipId}
                      role="tooltip"
                      className="journey-tip"
                      data-open={isOpen ? "" : undefined}
                    >
                      {t(item.description)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </li>
      ))}
    </ol>
  );
}
