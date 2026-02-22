import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    status: string;
    tags: string[];
    year?: string;
    github?: string;
    demo?: string;
  };
  showYear?: boolean;
  showLinks?: boolean;
  compact?: boolean;
  basePath?: string;
}

export default function ProjectCard({
  project,
  showYear = false,
  showLinks = false,
  compact = false,
  basePath = "projects"
}: ProjectCardProps) {
  const { t } = useTranslation();

  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Link to={`/${basePath}/${project.slug}`} className="tech-minimal-card group hover:cursor-pointer block h-[400px] flex flex-col">
      {/* Project Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
            {t(project.status)}
          </span>
          {showYear && project.year && (
            <span className="text-xs text-gray-500">{project.year}</span>
          )}
        </div>
        <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-blue-600 transition-colors">
          <div className="w-2 h-2 bg-transparent group-hover:bg-blue-600 rounded-full transition-colors"></div>
        </div>
      </div>

      {/* Project Content */}
      <h3 className="text-xl font-medium mb-3 group-hover:text-blue-600 transition-colors">
        {t(project.title)}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
        {truncateDescription(t(project.description))}
      </p>

      {!compact && <div className="h-1 my-4"></div>}

      {/* Tags */}
      <div className={`flex flex-wrap gap-2 ${compact ? 'bt-auto align-baseline' : 'mb-6'}`}>
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
      {showLinks && (
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{t('common.github')}</span>
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
              onClick={(e) => e.stopPropagation()}
            >
              <span>{t('common.liveDemo')}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      )}
    </Link>
  );
}
