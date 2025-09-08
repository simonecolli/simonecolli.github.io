import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "PanDelos-plus",
      description: "PanDelos-plus: a parallel algorithm for computing sequence homology in pangenomic analysis",
      tags: ["Research", "C++", "Python", "Docker"],
      status: "Completed"
    },
    {
      title: "Quantum Portfolio Optimization",
      description: "A research project focused on optimizing portfolio allocation, enhancing traditional methods for improved risk-return management.",
      tags: ["Research", "Quantum Computing", "Finance", "Python", "Exam"],
      status: "Completed"
    },
    {
      title: "MazeProject",
      description: "An application developed in occasion of the European Researchers' Night 2022.",
      tags: ["JavaScript", "CSS", "HTML"],
      status: "Completed"
    }
  ];

  return (
    <section className="tech-minimal-section">
      <div className="tech-minimal-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Selected Projects
          </h2>
          <div className="h-px bg-gray-300 w-24 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {projects.map((project, index) => (
            <div key={index} className="tech-minimal-card group hover:cursor-pointer">
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {project.status}
                </span>
                <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-600 transition-colors">
                  <div className="w-2 h-2 bg-transparent group-hover:bg-blue-600 rounded-full transition-colors"></div>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-medium mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="h-1 my-4"></div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 bt-auto align-baseline">
                {project.tags.map((tag, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 border border-gray-200 rounded text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View all*/}
        <div className="text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
