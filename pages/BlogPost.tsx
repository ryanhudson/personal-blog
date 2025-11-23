import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { getPostBySlug } from '../services/blogService';
import { BlogPost as BlogPostType } from '../types';
import MarkdownView from '../components/MarkdownView';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const data = await getPostBySlug(slug);
        setPost(data || null);
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-main mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary hover:text-indigo-400 flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-20">
      <Link to="/blog" className="inline-flex items-center gap-2 text-muted hover:text-main mb-8 transition-colors text-sm">
        <ArrowLeft size={16} />
        All Posts
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-4 items-center text-sm text-muted mb-6">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {post.date}
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-700" />
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-main mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card text-muted text-xs border border-border">
              <Tag size={10} />
              {tag}
            </span>
          ))}
        </div>

        {post.coverImage && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-border aspect-[2/1]">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}
      </header>

      <article className="prose dark:prose-invert prose-zinc max-w-none prose-headings:text-main prose-p:text-muted prose-strong:text-main prose-code:text-main">
        <MarkdownView content={post.content} />
      </article>
      
      <hr className="my-12 border-border" />
      
      <div className="flex justify-between items-center">
        <p className="text-muted text-sm">Thanks for reading!</p>
        <div className="flex gap-4">
          <button className="text-muted hover:text-main transition-colors text-sm">Share on Twitter</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;