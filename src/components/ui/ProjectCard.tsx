import React from 'react';
import { Project } from '@/types';

const ProjectCard: React.FC<Project> = ({ title, description, tech, link }) => {
  return (
    <div className="p-6 rounded-lg shadow-sm bg-white hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-transparent hover:border-teal-300 dark:bg-slate-800 dark:hover:border-teal-800">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 mb-4 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span 
            key={t} 
            className="px-2 py-1 rounded-full text-sm bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
          >
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a 
          href={link} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:underline flex items-center gap-1 dark:text-teal-400"
        >
          View Project <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;