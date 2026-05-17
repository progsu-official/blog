# PROGSU Blog

The official blog for PROGSU, newsletters, event recaps, technical writeups, and updates from Georgia State University's programming club.

## About

PROGSU is Georgia State University's programming club. This blog is where we publish: member writeups, event recaps, technical deep-dives, and anything worth sharing with the GSU CS community. Signed, dated, free.

### What's Inside

- **Writeups**: Technical posts from members
- **Recaps**: Event and meeting summaries
- **Resources**: Curated links, tools, and reading lists
- **Updates**: Club news and announcements

## Technology Stack

- **Astro**: Static site generator with server-side rendering
- **Tailwind CSS**: Utility-first styling
- **MDX**: Markdown with component support
- **Vercel**: Deployment and hosting

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/progsu-official/blog.git
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

### Development Commands

```bash
npm run dev        # Start development server with hot reload
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run fmt        # Format code with Prettier
```

## Project Structure

```
blog/
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Site navigation
│   │   ├── Footer.astro       # Site footer
│   │   ├── PostCard.astro     # Post listing card
│   │   ├── Search.astro       # Search modal
│   │   └── SearchBar.astro    # Floating search bar
│   ├── content/
│   │   ├── config.ts          # Content collection schema
│   │   └── posts/             # MDX blog posts
│   ├── layouts/
│   │   ├── Layout.astro       # Base page layout
│   │   └── PostLayout.astro   # Blog post layout
│   ├── pages/
│   │   ├── index.astro        # Homepage (post listing)
│   │   └── posts/
│   │       └── [...slug].astro  # Dynamic post route
│   ├── styles/
│   │   └── global.css         # Global styles + Tailwind
│   └── consts.ts              # Site config and nav links
├── public/                    # Static assets
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── package.json
```

## Contributing

All club members are welcome to contribute, whether that's writing a new post, fixing a typo, or improving the site.

### Writing a Post

Posts are written in MDX and live in `src/content/posts/`. To add one:

1. Create a new `.mdx` file in `src/content/posts/`
2. Add the required frontmatter:
```mdx
---
title: "your post title"
date: 2026-01-01
author: "Your Name"
tags: ["tag1", "tag2"]
description: "a short description of the post."
draft: false
---
```
3. Write your post in Markdown below the frontmatter
4. Submit a pull request

### Contribution Workflow

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a feature branch:
   ```bash
   git checkout -b post/your-post-title
   ```
4. Write your post and preview locally with `npm run dev`
5. Commit with a clear message:
   ```bash
   git commit -m "add: your post title"
   ```
6. Push and open a pull request

## Getting Help

- Join the PROGSU Discord for questions
- Open a GitHub issue for bugs or site feedback
- Reach out to a club officer for write access

---

Built with care by PROGSU. Everyone is welcome to contribute.
