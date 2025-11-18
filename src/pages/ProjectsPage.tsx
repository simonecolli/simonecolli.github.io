import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/Back2Home";

// data
import { projects } from "../data/projects";

export default function ProjectsPage() {

  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Page Header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Projects
              </h1>
              <div className="h-px bg-gray-300 w-24 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A collection of software projects, experiments, and ideas brought to life. 
                Each project represents a step in my journey as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="tech-minimal-card group">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {project.status}
                      </span>
                      <span className="text-xs text-gray-500">{project.year}</span>
                    </div>
                    <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-600 transition-colors">
                      <div className="w-2 h-2 bg-transparent group-hover:bg-blue-600 rounded-full transition-colors"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <h3 className="text-xl font-medium mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>GitHub</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live demo</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Back2Home />
      </main>
      <Footer />
    </div>
  );
}
