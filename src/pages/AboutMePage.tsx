import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from '../components/utils/Back2Home';

import { timeline } from "../data/timeline";
import { skills } from "../data/skills";

export default function AboutMePage() {
  const openCven = () => {
    window.open('/cv/cv_en.pdf', '_blank')
  }
  const openCvit = () => {
    window.open('/cv/cv_it.pdf', '_blank')
  }

  return (
    <div className="app">
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
                    About Me
                  </h1>
                  <div className="h-px bg-gray-300 w-24 mb-8"></div>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      I'm Simone Colli, a Computer Science master's student passionate about
                      building software solutions and exploring creativity through photography.
                      My path combines the analytical rigor of programming with the expressive
                      power of visual storytelling.
                    </p>
                    
                    <p>
                      Throughout my studies and projects, I have worked on areas ranging from
                      web development and parallel computing to bioinformatics and open-source
                      collaboration. At the same time, photography allows me to capture authentic
                      moments and translate emotions into images.
                    </p>
                    <p>
                      Based in Italy, I spend my time contributing to collaborative projects,
                      tutoring students, experimenting with new technologies, and telling stories
                      through my camera lens. Years as a competitive athlete have taught me
                      resilience, discipline, and perseverance—values I now bring into both my
                      academic and creative work.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all" onClick={openCven}>
                      Download CV (en)
                    </button>

                    <button className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all" onClick={openCvit}>
                      Download CV (it)
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

        {/* Skills */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-4">Skills & Expertise</h2>
                <div className="h-px bg-gray-300 w-16 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="tech-minimal-card">
                    <h3 className="font-medium mb-4 text-center">{skillGroup.category}</h3>
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

        {/* Timeline */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-4">Journey</h2>
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
                        'bg-purple-600 border-purple-600'
                      }`}></div>
                      {index !== timeline.length - 1 && (
                        <div className="w-px h-16 bg-gray-200 mt-2"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <h3 className="font-medium mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
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
