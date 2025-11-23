# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio website built as a React single-page application. The project uses Vite for development and builds, with React Router for client-side routing. It features a blog section with Markdown rendering, a projects showcase, and theme switching (light/dark mode).

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (starts on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## Architecture

### Routing Strategy
- Uses **HashRouter** (`react-router-dom`) for GitHub Pages compatibility
- Routes: `/` (Home), `/blog` (Blog list), `/blog/:slug` (Individual post), `/projects`, `/about`
- ScrollToTop component in App.tsx:10-17 handles scroll restoration on route changes

### Content Management
- Blog posts are currently defined as **hardcoded constants** in `constants.ts`
- Post content is stored as markdown strings in the constants file
- The `blogService.ts` provides async functions (with simulated delay) to fetch posts
- **Future enhancement**: The service layer is designed to eventually fetch from `/public/posts/*.md` files

### Styling System
- Uses **Tailwind CSS via CDN** (configured in `index.html`)
- Custom CSS variables for theming in `index.html:35-50`
- Dark mode class toggling (`.dark` on `<html>`)
- Theme colors use CSS variables: `--bg-background`, `--bg-surface`, `--text-main`, `--text-muted`, `--card-bg`, `--border-color`

### Component Structure
- `Layout.tsx`: Wrapper with Header, main content area, and Footer
- `Header.tsx`: Navigation and theme toggle
- `MarkdownView.tsx`: Renders blog post markdown using `react-markdown` with `remark-gfm`
- Page components in `/pages`: Home, Blog, BlogPost, Projects, About

### Data Flow
- Type definitions in `types.ts`: BlogPost, Project, NavItem
- Constants in `constants.ts`: BLOG_POSTS, PROJECTS, SOCIAL_LINKS
- Service layer in `services/blogService.ts`: getAllPosts, getPostBySlug, getFeaturedPosts

### Configuration
- Path alias `@/*` resolves to project root (vite.config.ts:18-21, tsconfig.json:21-24)
- Vite exposes `GEMINI_API_KEY` from `.env.local` as `process.env.GEMINI_API_KEY` and `process.env.API_KEY`
- Note: `.env.local` is not committed to the repository

## Key Implementation Details

### Theme Switching
The theme is toggled by adding/removing the `dark` class on the `<html>` element. The CSS variables in `index.html` handle the color transitions.

### Blog Post Loading
Posts are loaded via the service layer which currently returns hardcoded data. Each post has:
- `slug`: URL identifier
- `content`: Markdown string
- `tags`, `date`, `excerpt`: Metadata
- `coverImage`, `readTime`: Display info

### Import Maps
The project uses import maps in `index.html` to load React and dependencies from CDN (`aistudiocdn.com`) for browser-native ESM support.
