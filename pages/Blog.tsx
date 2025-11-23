import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../services/blogService';
import { BlogPost } from '../types';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data);
      setFilteredPosts(data);
      
      // Extract unique tags
      const tags = Array.from(new Set(data.flatMap(post => post.tags)));
      setAllTags(tags);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    let result = posts;

    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag) {
      result = result.filter(post => post.tags.includes(selectedTag));
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedTag, posts]);

  return (
    <div className="max-w-3xl mx-auto pt-12 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">The Archive</h1>
        <p className="text-gray-400">Thoughts on technology, design, and the future.</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 space-y-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-gray-600"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedTag === null
                ? 'bg-white text-black'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                tag === selectedTag
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Post List */}
      <div className="space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
               <div className="p-6 rounded-2xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500 py-20">
            No posts found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;