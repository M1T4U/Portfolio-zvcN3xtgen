
import React from 'react';
import { ProjectItem } from '../types';
import AnimatedVisibility from './AnimatedVisibility';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const delayClass = `delay-${index * 150}`;
  return (
    <AnimatedVisibility 
      className="w-full" 
      delay={delayClass}
      initialClasses="opacity-0 scale-90"
      finalClasses="opacity-100 scale-100"
    >
      <div className="bg-slate-800/80 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-sky-500/40 border border-slate-700 hover:border-sky-600/60 flex flex-col h-full">
        {project.imageComponent ? (
          <div className="w-full h-48 bg-slate-700/30 flex items-center justify-center overflow-hidden p-2">
            {project.imageComponent}
          </div>
        ) : project.imageUrl ? (
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        ) : (
          <div className="w-full h-48 bg-slate-700 flex items-center justify-center text-slate-500">
            No Image
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold text-sky-300 mb-3">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-200 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-sky-500/20 text-sky-300 px-2.5 py-1 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {(project.liveLink || project.repoLink) && (
             <div className="mt-auto pt-4 border-t border-slate-700/50 flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium inline-flex items-center"
                  >
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-300 transition-colors text-sm font-medium inline-flex items-center"
                  >
                    View Code
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                     </svg>
                  </a>
                )}
            </div>
          )}
        </div>
      </div>
    </AnimatedVisibility>
  );
};

export default ProjectCard;