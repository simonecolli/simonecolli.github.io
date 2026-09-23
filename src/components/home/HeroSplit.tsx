import Link from "../utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import Logo from "../utils/Logo";
import { useMailHref } from "../../hooks/useMailHref";
import { FEATURED_CASE_SLUG } from "../../data/projects";
import { HERO_WIDTHS, variantSrcSet } from "../../lib/photos";

// .hero-bg is display: none below 1024px, but a hidden <img> still downloads.
// Below that width the <picture> falls back to this inline pixel, so phones
// fetch nothing and the high priority only applies where the photo shows.
const BLANK_PIXEL = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

const TITLE_CLASS = "type-hero-title";
const TEXT_CLASS = "type-lead text-fg mt-3 max-w-xl";
const LINK_CLASS = "hero-link text-sm font-medium text-fg underline underline-offset-4";

// Two halves over one photograph, split by a hairline the mark covers at the
// centre. text-fg on the paragraphs is not redundant: @layer base paints every
// <p> in the muted grey, which over the photograph reaches only 4.80 contrast.
// The halos behind each block carry the rest.
export default function HeroSplit() {
  const { t } = useTranslation();
  const devMail = useMailHref("dev");
  const photoMail = useMailHref("photo");

  return (
    <section className="hero-split relative lg:min-h-svh flex pt-24 pb-12 lg:pt-40 lg:pb-16">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={variantSrcSet("/assets/other/hero.webp", HERO_WIDTHS)}
            sizes="100vw"
          />
          <img src={BLANK_PIXEL} alt="" width={2048} height={1365} fetchPriority="high" />
        </picture>
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="site-container relative z-10 w-full grid grid-cols-1 lg:grid-cols-2">
        <div
          className="hero-divider hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-line"
          aria-hidden="true"
        />

        <div className="hero-mark hero-halo order-last lg:order-none lg:absolute lg:left-1/2 lg:bottom-10 lg:-translate-x-1/2 px-12 pt-10 pb-10 flex flex-col items-center text-center z-10">
          <Logo variant="mix" className="w-[clamp(5rem,min(16vh,30vw),10rem)] h-[clamp(5rem,min(16vh,30vw),10rem)]" />
          <h1 className="text-lg font-medium tracking-tight mt-4">{t("hero.name")}</h1>
          <p className="text-base text-fg mt-1">{t("hero.role")}</p>
        </div>

        <div className="hero-half hero-half-dev order-3 lg:order-none flex flex-col items-start text-left lg:justify-between lg:pr-40 py-6 lg:pt-0 lg:pb-[28vh]">
          <div className="hero-halo flex flex-col items-start">
            <h2 className={`font-mono ${TITLE_CLASS}`}>{t("hero.devTitle")}</h2>
            <p className={TEXT_CLASS}>{t("hero.devText")}</p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3 mt-6 lg:mt-0 lg:self-end">
            <a href={devMail} className="btn btn-dev hero-halo-btn">
              {t("hero.devCta")}
            </a>
            <Link to={`/projects/${FEATURED_CASE_SLUG}/`} className={LINK_CLASS}>
              {t("hero.devLink")}
            </Link>
          </div>
        </div>

        <div className="hero-half hero-half-photo order-3 lg:order-none flex flex-col items-end text-right lg:justify-between lg:pl-40 py-6 lg:pt-0 lg:pb-[28vh]">
          <div className="hero-halo flex flex-col items-end">
            <h2 className={`font-display ${TITLE_CLASS}`}>{t("hero.photoTitle")}</h2>
            <p className={TEXT_CLASS}>{t("hero.photoText")}</p>
          </div>
          <div className="flex flex-col items-end lg:items-start gap-3 mt-6 lg:mt-0 lg:self-start">
            <a href={photoMail} className="btn btn-photo hero-halo-btn">
              {t("hero.photoCta")}
            </a>
            <Link to="/photography/" className={LINK_CLASS}>
              {t("hero.photoLink")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
