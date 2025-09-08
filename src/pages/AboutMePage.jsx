import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutMePage() {
  const openCven = () => {
    window.open('/cv/cv_en.pdf', '_blank')
  }
  const openCvit = () => {
    window.open('/cv/cv_it.pdf', '_blank')
  }
  const skills = [
    {
      category: "Main computer languages",
      items: ["C++", "Python", "Java", "JavaScript", "HTML", "CSS", "Bash"]
    },
    {
      category: "other computer languages",
      items: ["C", "C#", "Objective-C", "PHP", "LaTeX", "Markdown", "StrictDoc", "Matlab", "YAML"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Operative systems",
      items: ["Windows 8, 10, 11, Server 2019", "Linux", "MAC OSX"]
    },
    {
      category: "Environments",
      items: ["Visual Studio Code", "Eclipse", "Android Studio", "Xcode", "Jupiter notebook", "Google Colab"]
    },
    {
      category: "Frameworks and other tools",
      items: ["JQuery", "Bootstrap", "Tailwind", "React", "Laravel", "Flask", "nginx", "Apache web server", "Git", "Hyper-V", "Oracle virtual box", "Docker", "Kubernetes", "Masterwood", "AutoCAD"]
    },
    {
      category: "Creative instruments",
      items: ["Microsoft Office", "Darktable", "Adobe Lightroom Classic", "Adobe Photoshop", "Adobe Premiere Pro", "Davinci Resolve", "Audacity"]
    },
    {
      category: "Soft skills",
      items: ["Problem solving", "Critical thinking", "Time management", "Adaptability", "Flexibility", "Collaboration", "Creativity", "Organization", "Teamwork", "Stress management", "Self-development", "Resilience", "Patience", "Punctuality", "Perseverance"]
    },
    {
      category: "Languages",
      items: ["Italian (native)", "English (Intermediate)"]
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Teaching Assistant & Seminars",
      description: "Tutor for Operating Systems and Software Engineering courses at University of Parma. Speaker in seminars on tutoring and Python programming with graphical libraries.",
      type: "work"
    },
    {
      year: "2024",
      title: "Bachelor's Degree in Computer Science",
      description: "Graduated with thesis on a parallel algorithm for pangenomic sequence analysis. Started Master's degree in Computer Science at University of Parma.",
      type: "education"
    },
    {
      year: "2024",
      title: "Internship in Bioinformatics",
      description: "Developed parallel software for pangenome analysis using C++, Python, and Bash.",
      type: "work"
    },
    {
      year: "2024",
      title: "Open Source Collaboration",
      description: "Founded and maintained unipr-org, an organization for collaborative open-source projects among university students.",
      type: "achievement"
    },
    {
      year: "2023",
      title: "Freelance Tutor & Photographer",
      description: "Tutoring in C, C++, Java, Python, algorithms, and web development. Provided photography services for events.",
      type: "work"
    },
    {
      year: "2022",
      title: "MazeProject - Science Outreach",
      description: "Created a web application to visualize graph search algorithms for European Researchers’ Night.",
      type: "project"
    },
    {
      year: "2021",
      title: "Cybersecurity Training",
      description: "Completed CyberChallenge.it, a national program in cybersecurity and CTF competitions.",
      type: "education"
    },
    {
      year: "2007 - 2023",
    title: "Artistic Roller Skating Athlete",
    description: "Competitive high-level athlete, learning resilience, discipline, and teamwork.",
    type: "achievement"
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

                {/* Profile Image */}
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
                  <h3 className="font-medium mb-3">Continuous learning</h3>
                  <p className="text-sm text-gray-600">
                    Staying curious and always learning new technologies and techniques.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">02</span>
                  </div>
                  <h3 className="font-medium mb-3">Problem solving & innovation</h3>
                  <p className="text-sm text-gray-600">
                    Developing creative and high-performance solutions in complex domains.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sm font-medium">03</span>
                  </div>
                  <h3 className="font-medium mb-3">Collaboration</h3>
                  <p className="text-sm text-gray-600">
                    Working with other professionals to achieve the best possible results through teamwork and knowledge sharing.
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
