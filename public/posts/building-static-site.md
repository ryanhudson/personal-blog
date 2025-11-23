---
title: Building a Static Site with React
date: 2024-04-22
excerpt: A deep dive into the architecture of this very website, using React, TypeScript, and Markdown.
tags: [React, Web Dev, Tutorial]
readTime: 8 min read
coverImage: https://picsum.photos/800/401?grayscale
---

# Building a Static Site with React & Markdown

Why use a complex CMS when you can just push Markdown to GitHub?

## The Architecture

This website is built using:
- **React 18**: For the UI components.
- **Tailwind CSS**: For rapid styling.
- **React Markdown**: To render these posts.

```typescript
const renderPost = (content: string) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
```

It's fast, secure, and free to host.
