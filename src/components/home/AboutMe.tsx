import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="tech-minimal-section">
      <div className="tech-minimal-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">{t('home.aboutMe.title')}</h2>
          <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
          <div className="flex justify-center">
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              {t('home.aboutMe.description')}
            </p>
          </div>
        </div>
      </div>
      {/* View all*/}
      <div className="text-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
        >
          {t('home.aboutMe.discoverMore')}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
