import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutMePage() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "Next.js"]
    },
    {
      category: "Backend", 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"]
    },
    {
      category: "Tools",
      items: ["Git", "Figma", "VS Code", "Photoshop", "Lightroom"]
    },
    {
      category: "Photography",
      items: ["Portrait", "Street", "Landscape", "Architecture", "Event"]
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Computer Science Studies",
      description: "Currently pursuing my degree in Computer Science, focusing on software engineering and AI.",
      type: "education"
    },
    {
      year: "2023",
      title: "Freelance Photography",
      description: "Started offering professional photography services for events and portraits.",
      type: "work"
    },
    {
      year: "2022",
      title: "First Photography Exhibition",
      description: "Showcased my street photography collection at a local gallery.",
      type: "achievement"
    },
    {
      year: "2021",
      title: "Web Development Journey",
      description: "Began learning web development and built my first React applications.",
      type: "education"
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Hero Section */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto fade-in">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                    About Me
                  </h1>
                  <div className="h-px bg-gray-300 w-24 mb-8"></div>
                  
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      I'm Simone Colli, a Computer Science student with a passion for creating 
                      digital solutions and capturing life through photography. My journey bridges 
                      the technical precision of coding with the creative expression of visual storytelling.
                    </p>
                    
                    <p>
                      Currently based in Italy, I spend my time building web applications, 
                      experimenting with new technologies, and exploring the world through my camera lens. 
                      I believe in the power of clean code, minimal design, and authentic moments.
                    </p>
                    
                    <p>
                      When I'm not coding or editing photos, you'll find me reading about emerging 
                      technologies, traveling to new places, or working on personal projects that 
                      challenge my creativity and technical skills.
                    </p>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button className="px-8 py-3 bg-black text-white border border-black hover:bg-transparent hover:text-black transition-all">
                      Download CV
                    </button>
                    <button className="px-8 py-3 border border-gray-300 hover:border-black hover:text-black transition-all">
                      Get in Touch
                    </button>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="lg:order-first">
                  <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
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

        {/* Skills Section */}
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
                    <ul className="space-y-2">
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

        {/* Timeline Section */}
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

        {/* Values Section */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light tracking-tight mb-4">What I Value</h2>
                <div className="h-px bg-gray-300 w-16 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">01</span>
                  </div>
                  <h3 className="font-medium mb-3">Clean Code</h3>
                  <p className="text-sm text-gray-600">
                    Writing maintainable, readable, and efficient code that stands the test of time.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">02</span>
                  </div>
                  <h3 className="font-medium mb-3">User Experience</h3>
                  <p className="text-sm text-gray-600">
                    Creating intuitive and beautiful interfaces that users love to interact with.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">03</span>
                  </div>
                  <h3 className="font-medium mb-3">Continuous Learning</h3>
                  <p className="text-sm text-gray-600">
                    Staying curious and always learning new technologies and techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
