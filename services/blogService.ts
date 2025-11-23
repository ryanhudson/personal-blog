import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

// In a real GitHub Pages implementation, this service would fetch raw Markdown files
// from the public/ directory using the Fetch API.
// Example: await fetch(`/posts/${slug}.md`).then(res => res.text())

export const getAllPosts = async (): Promise<BlogPost[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return BLOG_POSTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return BLOG_POSTS.find((post) => post.slug === slug);
};

export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
  const posts = await getAllPosts();
  return posts.slice(0, 2);
};