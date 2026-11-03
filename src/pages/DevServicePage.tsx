import { Fragment, type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "../components/utils/LocalizedLink";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Back2Home from "../components/utils/Back2Home";
import PlainAddress from "../components/utils/PlainAddress";
import WhatsAppButton from "../components/utils/WhatsAppButton";
import { devServiceBySlug } from "../data/devServices";
import { getServicePage, packagesOf } from "../content/services";
import type { Block, ListItem, ServicePackage } from "../content/services/types";
import { useLang } from "../hooks/useLang";
import { localizePath } from "../lib/lang";
import { euro } from "../lib/money";
import { DEV_EMAIL, mailtoHref } from "../siteConfig";

const linkClass = "text-sm font-medium text-accent-dev transition-colors";

function Term({ item }: { item: ListItem }) {
  return (
    <>
      {item.term && <strong className="text-fg font-medium">{item.term}: </strong>}
      {item.text}
    </>
  );
}

// One page per development category, on the model of the graduation page:
// what the reader is looking at, what it costs from, what is and is not
// included, real work, how the job runs, questions, and a way to write. The
// text comes from `content/services`; this file only lays it out.
export default function DevServicePage() {
  const { service: slug } = useParams<{ service: string }>();
  const { t } = useTranslation();
  const lang = useLang();
  const service = devServiceBySlug(slug);

  if (!service) {
    return <Navigate to={localizePath("/development/", lang)} replace />;
  }

  const content = getServicePage(service.id, lang);
  const packages = packagesOf(content);
  const packageById = new Map(packages.map((pkg) => [pkg.id, pkg]));

  // The package's name goes in the subject, so a request from a card says
  // which offer it is about; the guiding questions stay the page's.
  const mailHref = (packageTitle?: string) =>
    mailtoHref(
      DEV_EMAIL,
      packageTitle
        ? t("contact.ideas.subject", { idea: packageTitle, interpolation: { escapeValue: false } })
        : content.mail.subject,
      content.mail.body,
    );

  const inlinePrice = (pkg: ServicePackage) =>
    pkg.fromPrice === undefined
      ? t("services.onRequest")
      : t(pkg.approx ? "services.fromApprox" : "services.from", { price: euro(pkg.fromPrice, lang) });

  const table = (columns: string[], rows: ReactNode[][], key: number) => (
    <div key={key} className="mb-8">
      <table className="service-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, rowIndex) => (
            <tr key={rowIndex}>
              {cells.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">{cell}</th>
                ) : (
                  <td key={cellIndex} data-label={columns[cellIndex]}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBlock = (block: Block, index: number) => {
    switch (block.kind) {
      case "p":
        return <p key={index} className="type-body text-muted max-w-3xl mb-6">{block.text}</p>;

      case "h3":
        return <h3 key={index} className="text-xl font-medium mt-12 mb-5">{block.text}</h3>;

      case "list":
        return (
          <ul key={index} className="max-w-3xl mb-6 space-y-3">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="type-body text-muted pl-5 relative">
                <span className="absolute left-0 top-[0.8em] w-2 h-px bg-accent-dev" aria-hidden="true" />
                <Term item={item} />
              </li>
            ))}
          </ul>
        );

      case "steps":
        return (
          <ol key={index} className="max-w-3xl mb-8 space-y-5">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex gap-5">
                <span className="font-mono text-accent-dev shrink-0" aria-hidden="true">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                <span className="type-body text-muted"><Term item={item} /></span>
              </li>
            ))}
          </ol>
        );

      case "callout":
        return (
          <blockquote key={index} className="max-w-3xl my-8 pl-6 border-l-2 border-accent-dev">
            <p className="type-lead text-fg font-light">{block.text}</p>
          </blockquote>
        );

      case "table":
        return table(block.columns, block.rows, index);

      case "siteTypes":
        return table(
          block.columns,
          block.rows.map((row) => {
            const pkg = row.packageId ? packageById.get(row.packageId) : undefined;
            const price = pkg ? (
              <a href={`#pkg-${pkg.id}`} className="font-medium text-fg whitespace-nowrap">{inlinePrice(pkg)}</a>
            ) : (
              <span className="text-muted">
                {row.other?.text}
                {row.other?.to && (
                  <> <Link to={row.other.to} className="text-accent-dev">{row.other.label}</Link></>
                )}
              </span>
            );
            return [
              <span className="font-medium">{row.type}</span>,
              row.what,
              row.fit,
              row.pages,
              pkg?.weeks ?? "-",
              price,
            ];
          }),
          index,
        );

      case "packages":
        return (
          <div key={index} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {block.items.map((pkg) => (
              <article key={pkg.id} id={`pkg-${pkg.id}`} className="site-card flex flex-col scroll-mt-24">
                <h3 className="text-xl font-medium">{pkg.title}</h3>
                <p className="mt-5">
                  {pkg.fromPrice === undefined ? (
                    <span className="text-2xl font-medium text-fg">{t("services.onRequest")}</span>
                  ) : (
                    <>
                      <span className="block text-sm text-muted mb-1">
                        {t(pkg.approx ? "services.startingFromApprox" : "services.startingFrom")}
                      </span>
                      <span className="text-4xl font-medium text-fg">{euro(pkg.fromPrice, lang)}</span>
                    </>
                  )}
                </p>
                {pkg.weeks && (
                  <p className="text-sm text-muted mt-2">{t("services.time")}: {pkg.weeks}</p>
                )}
                <p className="text-muted leading-relaxed mt-5">{pkg.body}</p>
                {pkg.fit && (
                  <p className="leading-relaxed mt-4">
                    <strong className="font-medium">{t("services.fit")}</strong> {pkg.fit}
                  </p>
                )}
                {pkg.limits && (
                  <p className="leading-relaxed mt-2">
                    <strong className="font-medium">{t("services.limits")}:</strong> {pkg.limits}
                  </p>
                )}
                {pkg.note && <p className="text-sm text-muted leading-relaxed mt-4">{pkg.note}</p>}
                <div className="flex-grow" />
                <a
                  href={mailHref(pkg.title)}
                  data-analytics-service={service.id}
                  className="btn btn-dev self-start mt-6"
                >
                  {t("services.packageCta")}
                </a>
              </article>
            ))}
          </div>
        );

      case "cards":
        return (
          <div key={index} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {block.items.map((card) => (
              <div key={card.title} className="site-card flex flex-col">
                <h3 className="text-lg font-medium mb-3">{card.title}</h3>
                <p className="text-muted leading-relaxed flex-grow">{card.text}</p>
                {card.cases && (
                  <p className="text-sm mt-4">
                    <span className="text-muted">{t("services.realExample")}: </span>
                    {card.cases.map((ref, refIndex) => (
                      <Fragment key={ref.slug}>
                        {refIndex > 0 && " - "}
                        <Link to={`/projects/${ref.slug}/`} className="text-accent-dev">{ref.label}</Link>
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>
            ))}
          </div>
        );

      case "cases":
        return (
          <div key={index} className="grid md:grid-cols-2 gap-6 mb-8">
            {block.items.map((item) => (
              <article key={item.slug} className="border border-line rounded-lg p-6 md:p-8 flex flex-col">
                <h3 className="text-lg font-medium">{item.label}</h3>
                <p className="text-muted leading-relaxed mt-3 flex-grow">{item.text}</p>
                <Link to={`/projects/${item.slug}/`} className={`${linkClass} inline-flex items-center gap-2 mt-5`}>
                  {t("services.caseLink")} <FiArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        );

      case "links":
        return (
          <div key={index} className="flex flex-wrap gap-8 mb-6">
            {block.items.map((item) => (
              <Link key={item.to} to={item.to} className={`${linkClass} inline-flex items-center gap-2`}>
                {item.label} <FiArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="app">
      <SEO
        titleKey={`seo.services.${service.id}.title`}
        descriptionKey={`seo.services.${service.id}.description`}
        keywordsKey={`seo.services.${service.id}.keywords`}
        path={`/development/${service.slug}`}
        image="/og/development.png"
      />
      <Header />
      <main className="main-content pt-20 service-page">
        <section className="site-section-compact">
          <div className="site-container">
            <Link to="/development/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-dev">
              <FiArrowLeft aria-hidden="true" />
              {t("services.back")}
            </Link>
            <div className="mt-10 md:mt-14 max-w-4xl fade-in">
              <h1 className="font-mono type-hero-title">{content.heading}</h1>
              <div className="h-px bg-line w-32 mt-3 mb-4" />
              <p className="type-page-title">{content.subtitle}</p>
              {content.intro.map((paragraph) => (
                <p key={paragraph} className="type-lead text-muted mt-5">{paragraph}</p>
              ))}
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={mailHref()} data-analytics-service={service.id} className="btn btn-dev">
                  {content.cta}
                </a>
                <WhatsAppButton area="dev" message={content.whatsapp} service={service.id} />
              </div>
              <nav aria-label={t("services.contents")} className="mt-10">
                <p className="text-xs uppercase tracking-widest text-muted mb-3">{t("services.contents")}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  {content.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="text-muted hover:text-accent-dev">{section.title}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#domande" className="text-muted hover:text-accent-dev">{t("services.faqTitle")}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {content.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="py-12 md:py-16 border-t border-line scroll-mt-16"
          >
            <div className="site-container">
              <h2 id={`${section.id}-title`} className="type-page-title mb-8">{section.title}</h2>
              {section.blocks.map(renderBlock)}
            </div>
          </section>
        ))}

        <section id="domande" aria-labelledby="domande-title" className="py-12 md:py-16 border-t border-line scroll-mt-16">
          <div className="site-container">
            <h2 id="domande-title" className="type-page-title mb-8">{t("services.faqTitle")}</h2>
            <div className="max-w-3xl">
              {content.faqs.map(({ question, answer }) => (
                <details key={question} className="border-b border-line py-5">
                  <summary className="cursor-pointer text-lg font-medium">{question}</summary>
                  <p className="mt-4 text-muted leading-relaxed">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div className="dev-panel rounded-lg p-6 md:p-12">
              <h2 className="type-page-title">{content.closing.title}</h2>
              <p className="text-muted leading-relaxed mt-4 max-w-3xl">{content.closing.text}</p>
              <p className="leading-relaxed mt-4 max-w-3xl">
                <strong className="font-medium">{t("services.clearPrices.title")}</strong>{" "}
                <span className="text-muted">{t("services.clearPrices.body")}</span>
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={mailHref()} data-analytics-service={service.id} className="btn btn-dev">
                  {content.cta}
                </a>
                <WhatsAppButton area="dev" message={content.whatsapp} service={service.id} />
              </div>
              <PlainAddress emails={[DEV_EMAIL]} className="mt-4" />
            </div>
          </div>
        </section>

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
