import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionBackground from "./SectionBackground";

export default function AboutSplit() {
  // Introduce Simone and link to the full bio.
  const { t } = useTranslation();

  return (
    <section className="site-section-full relative overflow-hidden">
      <SectionBackground fade="left">
        <img
          src="/assets/other/me.webp"
          alt={t("home.aboutMe.imageAlt")}
          width={708}
          height={708}
          loading="lazy"
          className="about-portrait"
        />
      </SectionBackground>

      <div className="site-container relative z-10">
        <div className="max-w-2xl">
          <h2 className="type-section-title">
            {t("home.aboutMe.title")}
          </h2>
          <div className="h-px bg-line w-32 mt-3 mb-4" />
          <p className="type-body text-muted">
            {t("home.aboutMe.description")}
          </p>
          <Link to="/about" className="btn btn-neutral mt-6">
            {t("home.aboutMe.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
