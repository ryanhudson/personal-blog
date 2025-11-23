import matter from 'gray-matter';
import { BlogPost } from '../types';

// Fetches and parses markdown files from the public/posts directory
const parseMarkdownPost = (slug: string, markdown: string): BlogPost => {
  const { data, content } = matter(markdown);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString().split('T')[0],
    excerpt: data.excerpt || '',
    content,
    tags: data.tags || [],
    readTime: data.readTime || '5 min read',
    coverImage: data.coverImage || 'https://picsum.photos/800/400?grayscale',
  };
};

export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    // Fetch the list of post slugs
    const response = await fetch('/posts/posts.json');
    const slugs: string[] = await response.json();

    // Fetch all posts in parallel
    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const res = await fetch(`/posts/${slug}.md`);
        const markdown = await res.text();
        return parseMarkdownPost(slug, markdown);
      })
    );

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    if (!response.ok) return undefined;

    const markdown = await response.text();
    return parseMarkdownPost(slug, markdown);
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return undefined;
  }
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  const posts = await getAllPosts();
  return posts.slice(0, 2);
};