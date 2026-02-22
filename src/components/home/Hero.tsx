import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="tech-minimal-section pt-32 mt-5">
      <div className="tech-minimal-container">
        <div className="max-w-4xl mx-auto text-center fade-in flex flex-col items-center">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            {t('hero.name')}
          </h1>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gray-300 w-16"></div>
            <p className="text-lg text-gray-600 font-light">
              {t('hero.subtitle')}
            </p>
            <div className="h-px bg-gray-300 w-16"></div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
