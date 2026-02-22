import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from '../components/utils/Back2Home';
import SEO from "../components/SEO";

import { timeline } from "../data/timeline";
import { skills } from "../data/skills";

export default function AboutMePage() {
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
        {/* Hero */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto fade-in">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                    {t('about.pageTitle')}
                  </h1>
                  <div className="h-px bg-gray-300 w-24 mb-8"></div>

                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>{t('about.bio1')}</p>
                    <p>{t('about.bio2')}</p>
                    <p>{t('about.bio3')}</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all" onClick={openCven}>
                      {t('about.downloadCvEn')}
                    </button>

                    <button className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all" onClick={openCvit}>
                      {t('about.downloadCvIt')}
                    </button>
                  </div>
                </div>

                {/* Profile */}
                <div className="lg:order-first">
                  <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden rounded-md">
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

        {/* Timeline */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-4">{t('about.journey')}</h2>
                <div className="h-px bg-gray-300 w-16 mx-auto"></div>
              </div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    {/* Year */}
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-medium text-gray-900">{item.year}</span>
                    </div>

                    {/* Timeline Line */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full border-2 ${
                        item.type === 'education' ? 'bg-blue-600 border-blue-600' :
                        item.type === 'work' ? 'bg-green-600 border-green-600' :
                        item.type === 'project' ? 'bg-orange-600 border-orange-600' :
                        'bg-purple-600 border-purple-600'
                      }`}></div>
                      {index !== timeline.length - 1 && (
                        <div className="w-px h-16 bg-gray-200 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="font-medium mb-2">{t(item.title)}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{t(item.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-4">{t('about.skillsTitle')}</h2>
                <div className="h-px bg-gray-300 w-16 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="tech-minimal-card">
                    <h3 className="font-medium mb-4 text-center">{t(skillGroup.category)}</h3>
                    <ul className="space-y-2 mt-3">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-gray-600 text-center">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
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
