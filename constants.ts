import { BlogPost, Project } from './types';

// In a real scenario, these markdown strings would be fetched from /public/posts/*.md
const POST_1_CONTENT = `
# The Future of AI Agents

Artificial Intelligence is moving beyond simple chat interfaces. The next frontier is **Agency**.

## What are AI Agents?

Unlike passive models that wait for a prompt, agents can:
1. Perceive their environment
2. Make decisions
3. Take actions using tools

> "The future is not just about smarter models, but about models that can *do* things."

### The Stack

We are seeing a new stack emerge:
- **Orchestration:** LangChain, AutoGen
- **Memory:** Vector databases (Pinecone, Weaviate)
- **Tools:** APIs, browsing capabilities

I'm currently experimenting with the Gemini API to build a personal research assistant that reads my emails and summarizes daily tech news.
`;

const POST_2_CONTENT = `
# Building a Static Site with React & Markdown

Why use a complex CMS when you can just push Markdown to GitHub?

## The Architecture

This website is built using:
- **React 18**: For the UI components.
- **Tailwind CSS**: For rapid styling.
- **React Markdown**: To render these posts.

\`\`\`typescript
const renderPost = (content: string) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
\`\`\`

It's fast, secure, and free to host.
`;

const POST_3_CONTENT = `
# Project Log: Neural Style Transfer

I've been working on a new project involving computer vision.

The goal is to take the artistic style of one image and apply it to the content of another. 

*Status: Work in Progress*
`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'future-of-ai-agents',
    title: 'The Future of AI Agents',
    date: '2024-05-15',
    excerpt: 'Exploring how LLMs are evolving from chatbots into autonomous agents capable of executing complex tasks.',
    content: POST_1_CONTENT,
    tags: ['AI', 'Future', 'Tech'],
    readTime: '5 min read',
    coverImage: 'https://picsum.photos/800/400?grayscale',
  },
  {
    slug: 'building-static-site',
    title: 'Building a Static Site with React',
    date: '2024-04-22',
    excerpt: 'A deep dive into the architecture of this very website, using React, TypeScript, and Markdown.',
    content: POST_2_CONTENT,
    tags: ['React', 'Web Dev', 'Tutorial'],
    readTime: '8 min read',
    coverImage: 'https://picsum.photos/800/401?grayscale',
  },
  {
    slug: 'neural-style-transfer',
    title: 'Project Log: Neural Style Transfer',
    date: '2024-03-10',
    excerpt: 'Weekly update on my computer vision experiments using TensorFlow and Python.',
    content: POST_3_CONTENT,
    tags: ['Projects', 'CV', 'Python'],
    readTime: '3 min read',
    coverImage: 'https://picsum.photos/800/402?grayscale',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'EcoTrack AI',
    description: 'An application using computer vision to identify recyclable materials in real-time.',
    technologies: ['Python', 'TensorFlow', 'React Native'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    repoUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'CryptoDash',
    description: 'Real-time cryptocurrency dashboard with predictive analytics using simple LSTM models.',
    technologies: ['React', 'D3.js', 'Node.js'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Portfolio V1',
    description: 'My previous portfolio site built with plain HTML/CSS.',
    technologies: ['HTML', 'CSS', 'JS'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    featured: false,
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
};
