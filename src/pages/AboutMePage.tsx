import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from '../components/utils/Back2Home';
import SEO from "../components/SEO";

import JourneyPath from "../components/about/JourneyPath";
import { skills } from "../data/skills";

export default function AboutMePage() {
  // Present the bio, CV downloads, timeline and grouped skills.
  const { t } = useTranslation();

  const openCven = () => {
    window.open('/cv/cv_en.pdf', '_blank')
  }
  const openCvit = () => {
    window.open('/cv/cv_it.pdf', '_blank')
  }

  return (
    <div className="app">
      <SEO
        titleKey="about.pageTitle"
        descriptionKey="seo.about.description"
        keywordsKey="seo.about.keywords"
        path="/about"
      />
      <Header />
      <main className="main-content pt-20">
        <section className="site-section">
          <div className="site-container">
            <div className="max-w-4xl mx-auto fade-in">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                    {t('about.pageTitle')}
                  </h1>
                  <div className="h-px bg-line w-24 mb-8"></div>

                  <div className="space-y-6 text-muted leading-relaxed">
                    <p>{t('about.bio1')}</p>
                    <p>{t('about.bio2')}</p>
                    <p>{t('about.bio3')}</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button className="px-8 py-3 bg-fg text-bg border border-fg hover:bg-transparent hover:text-fg transition-all" onClick={openCven}>
                      {t('about.downloadCvEn')}
                    </button>

                    <button className="px-8 py-3 bg-fg text-bg border border-fg hover:bg-transparent hover:text-fg transition-all" onClick={openCvit}>
                      {t('about.downloadCvIt')}
                    </button>
                  </div>
                </div>

                <div className="lg:order-first">
                  <div className="aspect-[3/4] bg-fg/5 relative overflow-hidden rounded-md">
                    <img
                      src="/profile.jpg"
                      alt="Simone Colli"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="type-page-title mb-4">{t('about.journey')}</h2>
                <div className="h-px bg-line w-16 mx-auto"></div>
              </div>

              <JourneyPath />
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="type-page-title mb-4">{t('about.skillsTitle')}</h2>
                <div className="h-px bg-line w-16 mx-auto"></div>
              </div>

              <div className="space-y-8">
                {skills.filter((g) => !g.secondary).map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-sm font-medium mb-3">
                      {t(skillGroup.category)}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="tag">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-line">
                <h3 className="text-sm font-medium text-muted mb-8">
                  {t('about.skillsSecondary')}
                </h3>
                <div className="space-y-8">
                  {skills.filter((g) => g.secondary).map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <h4 className="text-sm font-medium mb-3">
                        {t(skillGroup.category)}
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="tag">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
