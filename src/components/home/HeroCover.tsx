import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";
import Logo from "../utils/Logo";
import { HERO_WIDTHS, variantSrcSet } from "../../lib/photos";

// The opening screen: who the site belongs to, over the desk photograph, and
// an arrow down to the two services. The photograph now shows at every width,
// so it loads with high priority everywhere.
export default function HeroCover() {
  const { t } = useTranslation();

  return (
    <section className="hero-cover">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/assets/other/hero-1024.webp"
          srcSet={variantSrcSet("/assets/other/hero.webp", HERO_WIDTHS)}
          sizes="100vw"
          alt=""
          width={2048}
          height={1365}
          fetchPriority="high"
        />
      </div>
      <div className="hero-veil" aria-hidden="true" />

      <div className="relative z-10 flex flex-col items-center">
        <Logo variant="mix" className="w-[clamp(4.5rem,min(14vh,24vw),8rem)] h-[clamp(4.5rem,min(14vh,24vw),8rem)]" />
        <h1 className="type-cover-title mt-6">{t("hero.name")}</h1>
        <p className="type-lead text-fg mt-3">{t("hero.role")}</p>
      </div>

      <a href="#home-services" className="hero-scroll" aria-label={t("hero.scroll")}>
        <FiChevronDown aria-hidden="true" className="w-6 h-6" />
      </a>
    </section>
  );
}
