import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto pt-12">
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          A collection of experiments, tools, and applications I've built. 
          Ranging from simple web apps to complex AI integrations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;