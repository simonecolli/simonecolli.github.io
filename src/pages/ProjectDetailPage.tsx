import { useParams, Navigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Back2Home from "../components/utils/Back2Home";
import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content pt-20">
        {/* Project header */}
        <section className="tech-minimal-section">
          <div className="tech-minimal-container">
            <div className="max-w-4xl mx-auto fade-in">
              {/* Back button */}
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors mb-8"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to projects
              </Link>

              {/* Project title */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                  {project.title}
                </h1>
                <div className="h-px bg-gray-300 w-24 mb-6"></div>
              </div>

              {/* Project description */}
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 border border-gray-200 rounded text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="px-8 py-3 bg-white text-black border border-gray-300 hover:bg-transparent hover:text-black transition-all flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View on GitHub</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="px-8 py-3 border border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
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
