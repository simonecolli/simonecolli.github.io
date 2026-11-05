import Link from "../utils/LocalizedLink";
import { useTranslation } from "react-i18next";

// The portrait is cut out, so it rests straight on the background with no
// frame. On a phone it sits above the text; from 1024px up it stands at the
// bottom right of the section, inside the right half only, so it can never
// slide under the text whatever the width.
export default function AboutSplit() {
  const { t } = useTranslation();
  const paragraphs = t("home.aboutMe.description", { returnObjects: true }) as string[];

  return (
    <section className="site-section-full relative overflow-hidden">
      <div className="site-container">
        <img
          src="/assets/other/me.webp"
          alt={t("home.aboutMe.imageAlt")}
          width={708}
          height={708}
          loading="lazy"
          className="about-portrait"
        />
        <div className="about-text relative z-10">
          <h2 className="type-section-title">
            {t("home.aboutMe.title")}
          </h2>
          <div className="h-px bg-line w-32 mt-3 mb-4" />
          <div className="space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <Link to="/about/" className="btn btn-neutral mt-6">
            {t("home.aboutMe.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
