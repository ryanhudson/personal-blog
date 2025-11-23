import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md dark:shadow-none">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-main mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-1 rounded-md bg-background text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-main transition-colors"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-main transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;