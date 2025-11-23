import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pt-12">
      <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
        <div className="w-full md:w-1/3">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border bg-surface relative">
             <img src="https://picsum.photos/400/400?grayscale" alt="Profile" className="w-full h-full object-cover" />
          </div>
          
          <div className="mt-6 flex justify-center md:justify-start gap-4">
             <button className="p-2 rounded-full bg-card hover:bg-border text-muted hover:text-main transition-colors">
               <Github size={20} />
             </button>
             <button className="p-2 rounded-full bg-card hover:bg-border text-muted hover:text-main transition-colors">
               <Twitter size={20} />
             </button>
             <button className="p-2 rounded-full bg-card hover:bg-border text-muted hover:text-main transition-colors">
               <Mail size={20} />
             </button>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-main mb-6">Hi, I'm [Your Name]</h1>
          
          <div className="space-y-6 text-muted leading-relaxed text-lg">
            <p>
              I am a Full Stack Developer with a passion for building beautiful, functional, and accessible web applications. I specialize in React, TypeScript, and Node.js.
            </p>
            <p>
              Recently, I've been diving deep into the world of Artificial Intelligence, specifically exploring how Large Language Models (LLMs) can be integrated into everyday software to create more "agentic" experiences.
            </p>
            <p>
              When I'm not coding, I'm usually reading sci-fi novels, tinkering with home automation, or hiking.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-main mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Gemini API', 'PostgreSQL', 'Docker'].map(tech => (
                <span key={tech} className="px-3 py-1.5 rounded bg-card border border-border text-muted text-sm font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;