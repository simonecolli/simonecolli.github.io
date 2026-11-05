import Link from "../utils/LocalizedLink";
import { useTranslation } from "react-i18next";
import { useMailHref } from "../../hooks/useMailHref";
import { FEATURED_CASE_SLUG } from "../../data/projects";

const TITLE_CLASS = "type-hero-title";
const TEXT_CLASS = "type-lead text-fg mt-3";
const LINK_CLASS = "text-sm font-medium text-fg underline underline-offset-4";

// The two services side by side, split by a hairline, right under the cover.
// Stacked below 1024px everything aligns left; side by side the photography
// half mirrors the development one and aligns right.
export default function HeroSplit() {
  const { t } = useTranslation();
  const devMail = useMailHref("dev");
  const photoMail = useMailHref("photo");

  return (
    <section id="home-services" className="site-section scroll-mt-16">
      <div className="site-container relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0">
        <div
          className="hero-divider hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-line"
          aria-hidden="true"
        />

        <div className="flex flex-col items-start text-left lg:pr-16 xl:pr-24">
          <h2 className={`font-mono ${TITLE_CLASS}`}>{t("hero.devTitle")}</h2>
          <p className={TEXT_CLASS}>{t("hero.devText")}</p>
          <div className="flex flex-col items-start gap-4 mt-auto pt-8">
            <a href={devMail} className="btn btn-dev btn-solid">
              {t("hero.devCta")}
            </a>
            <Link to={`/projects/${FEATURED_CASE_SLUG}/`} className={LINK_CLASS}>
              {t("hero.devLink")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start text-left lg:items-end lg:text-right lg:pl-16 xl:pl-24">
          <h2 className={`font-display ${TITLE_CLASS}`}>{t("hero.photoTitle")}</h2>
          <p className={TEXT_CLASS}>{t("hero.photoText")}</p>
          <div className="flex flex-col items-start lg:items-end gap-4 mt-auto pt-8">
            <a href={photoMail} className="btn btn-photo btn-solid">
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
