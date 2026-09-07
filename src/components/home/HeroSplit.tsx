import { useTranslation } from "react-i18next";
import Logo from "../utils/Logo";

const TITLE_CLASS = "type-hero-title";
const TEXT_CLASS = "type-lead text-fg mt-3 max-w-xl";

export default function HeroSplit() {
  // Present development and photography side by side over the hero image.
  const { t } = useTranslation();

  return (
    <section className="hero-split relative min-h-svh flex pt-24 pb-12 lg:pt-40 lg:pb-16">
      <div className="hero-bg" aria-hidden="true">
        <img src="/assets/other/hero.webp" alt="" width={2048} height={1365} />
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
          <a href="#home-dev" className="btn btn-dev hero-halo-btn mt-6 lg:mt-0 lg:self-end">
            {t("hero.devCta")}
          </a>
        </div>

        <div className="hero-half hero-half-photo order-3 lg:order-none flex flex-col items-end text-right lg:justify-between lg:pl-40 py-6 lg:pt-0 lg:pb-[28vh]">
          <div className="hero-halo flex flex-col items-end">
            <h2 className={`font-display ${TITLE_CLASS}`}>{t("hero.photoTitle")}</h2>
            <p className={TEXT_CLASS}>{t("hero.photoText")}</p>
          </div>
          <a href="#home-photo" className="btn btn-photo hero-halo-btn mt-6 lg:mt-0 lg:self-start">
            {t("hero.photoCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
