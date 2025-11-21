import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import ProjectCard from "../components/utils/ProjectCard";

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
                <ProjectCard
                  key={index}
                  project={project}
                  showYear={true}
                  showLinks={true}
                />
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
