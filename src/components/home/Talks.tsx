import { Link } from "react-router-dom";
import { talks } from "../../data/talks";
import ProjectCard from "../utils/ProjectCard";

export default function Talks() {

  return (
    <section className="tech-minimal-section">
      <div className="tech-minimal-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight mb-4">
            Favorite talks
          </h2>
          <div className="h-px bg-gray-300 w-24 mx-auto"></div>
        </div>

        {/* Talks Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {talks.filter(talk => talk.favourite).map((talk, index) => (
            <ProjectCard
              key={index}
              project={talk}
              compact={true}
              basePath="talks"
            />
          ))}
        </div>

        {/* View all*/}
        <div className="text-center">
          <Link
            to="/talks"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            View all talks
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
