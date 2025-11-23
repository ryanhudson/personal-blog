import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-background py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DevLog. Built with React & Tailwind.
          </p>
          <p className="text-gray-600 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
            Crafted with <Heart size={10} className="text-red-500" /> and Artificial Intelligence
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;