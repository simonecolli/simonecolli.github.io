import { useTranslation } from "react-i18next";
import type { Block, CaseStudy as CaseStudyContent } from "../../content/caseStudies/types";
import { diagrams } from "./diagrams";

function Figure({ block }: { block: Extract<Block, { kind: "figure" }> }) {
  const Diagram = diagrams[block.diagram];

  // The drawings stay legible by keeping their own width and scrolling
  // sideways on narrow screens, rather than shrinking their labels to nothing.
  return (
    <figure className="my-10">
      <div className="diagram-scroll border border-line rounded-lg p-4">
        <Diagram />
      </div>
      <figcaption className="text-sm text-muted mt-3 leading-relaxed">
        {block.caption}
      </figcaption>
    </figure>
  );
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={index} className="type-body text-muted mb-5">
                {block.text}
              </p>
            );

          case "h3":
            return (
              <h3 key={index} className="text-lg font-medium mt-10 mb-4">
                {block.text}
              </h3>
            );

          case "list":
            return (
              <ul key={index} className="mb-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="type-body text-muted pl-5 relative">
                    <span className="absolute left-0 top-[0.7em] w-2 h-px bg-line" aria-hidden="true" />
                    {item.term && <strong className="text-fg font-medium">{item.term}: </strong>}
                    {item.text}
                  </li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <blockquote key={index} className="my-8 pl-6 border-l-2 border-accent-dev">
                <p className="type-lead text-fg font-light">{block.text}</p>
              </blockquote>
            );

          case "figure":
            return <Figure key={index} block={block} />;
        }
      })}
    </>
  );
}

export default function CaseStudy({ content }: { content: CaseStudyContent }) {
  const { t } = useTranslation();
  const contentsLabel = t("projects.caseStudy.contents");

  return (
    <div className="fade-in">
      <p className="text-sm text-muted mb-8">{content.facts.join(" \u00b7 ")}</p>

      <div className="max-w-3xl">
        {content.lead.map((paragraph, index) => (
          <p key={index} className="type-lead text-muted mb-5">{paragraph}</p>
        ))}
      </div>

      {content.metrics && (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-line py-8 my-12">
          {content.metrics.map((metric) => (
            <li key={metric.label}>
              <span className="block text-3xl font-light tracking-tight text-fg">
                {metric.value}
              </span>
              <span className="block text-sm text-muted leading-snug mt-2">
                {metric.label}
              </span>
            </li>
          ))}
        </ul>
      )}

      <details className="lg:hidden border border-line rounded-lg px-5 py-4 mb-10">
        <summary className="text-sm font-medium cursor-pointer">{contentsLabel}</summary>
        <ol className="case-study-toc mt-4 space-y-2">
          {content.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-sm text-muted hover:text-accent-dev">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </details>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 lg:items-start">
        <div className="max-w-3xl">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-4">
                {section.title}
              </h2>
              <div className="h-px bg-line w-12 mb-6" />
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>

        <nav aria-label={contentsLabel} className="hidden lg:block sticky top-28 order-first lg:order-last">
          <p className="text-xs uppercase tracking-[0.12em] text-muted mb-4">{contentsLabel}</p>
          <ol className="case-study-toc space-y-2.5">
            {content.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}
                  className="text-sm text-muted hover:text-accent-dev leading-snug block">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
