import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Cpu, Globe } from 'lucide-react';
import { getFeaturedPosts } from '../services/blogService';
import { PROJECTS } from '../constants';
import { BlogPost } from '../types';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getFeaturedPosts();
      setLatestPosts(posts);
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 flex flex-col justify-center min-h-[60vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-primary/20 blur-[120px] rounded-full -z-10" />
        
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            OPEN FOR COLLABORATION
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Future Web
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            I'm a frontend engineer and AI enthusiast obsessed with building polished, performant user interfaces and exploring the frontiers of generative AI.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Work
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Features / Interests */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Sparkles, title: 'AI Engineering', desc: 'Integrating LLMs into practical workflows.' },
          { icon: Cpu, title: 'System Design', desc: 'Architecting scalable frontend applications.' },
          { icon: Globe, title: 'Web3 & Future', desc: 'Exploring decentralized technologies.' }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <item.icon className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Latest Posts */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Latest Writing</h2>
          <Link to="/blog" className="text-sm text-primary hover:text-indigo-400 flex items-center gap-1">
            Read all posts <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid gap-8">
          {latestPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
              <article className="flex flex-col md:flex-row gap-6 md:items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="md:w-1/3 aspect-video rounded-lg overflow-hidden bg-gray-800">
                  {post.coverImage && (
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="md:w-2/3 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-2 pt-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">#{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-primary hover:text-indigo-400 flex items-center gap-1">
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter(p => p.featured).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;