import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getCaseStudy } from "../../content/caseStudies";
import { projects } from "../../data/projects";

interface CaseHighlightProps {
  slug: string;
}

// The before and after of one case study, short enough to stand beside a
// page's opening text. It reads from the case study itself, so the summary and
// the long form cannot drift apart.
export default function CaseHighlight({ slug }: CaseHighlightProps) {
  const { t, i18n } = useTranslation();
  const project = projects.find((p) => p.slug === slug);
  const highlight = getCaseStudy(slug, i18n.language)?.highlight;

  if (!project || !highlight) return null;

  const columns = [
    { side: highlight.before, titleClass: "text-muted", itemClass: "text-muted" },
    { side: highlight.after, titleClass: "text-accent-dev", itemClass: "text-fg" },
  ];

  return (
    <aside className="border border-line rounded-lg bg-bg p-6 md:p-8">
      <p className="text-xs uppercase tracking-[0.12em] text-accent-dev">
        {t("projects.caseStudy.realCase")}
      </p>
      <h2 className="text-xl font-medium mt-2">{t(project.title)}</h2>
      <p className="text-sm text-muted mt-1">{highlight.context}</p>

      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        {columns.map(({ side, titleClass, itemClass }) => (
          <div key={side.title}>
            <h3 className={`text-sm font-medium ${titleClass}`}>{side.title}</h3>
            <ul className="mt-3 space-y-2">
              {side.items.map((item) => (
                <li key={item} className={`flex gap-3 text-sm leading-relaxed ${itemClass}`}>
                  <span className={`${titleClass} shrink-0`} aria-hidden="true">
                    &mdash;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link
        to={`/projects/${slug}/`}
        className="inline-block mt-6 text-sm font-medium text-accent-dev"
      >
        {t("projects.caseStudy.readFull")}
      </Link>
    </aside>
  );
}
