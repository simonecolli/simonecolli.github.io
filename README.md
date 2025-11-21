# Personal Website

A modern, minimalist personal portfolio website showcasing projects, skills, and professional experience. Built with React, TypeScript, and Tailwind CSS featuring a clean, tech-focused design.

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Build Tool**: Vite 7
- **Icons**: React Icons
- **Linting**: ESLint with TypeScript support

## Website Structure

```txt
personal-website/
├── public/              # Static assets (images, CV)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── home/        # Homepage-specific components
│   │   └── utils/       # Utility components (ProjectCard, WorkInProgress, etc.)
│   ├── data/            # Data files (projects, skills, timeline)
│   ├── pages/           # Page components (Home, Projects, About, Blog)
│   ├── App.tsx          # Main app component with routing
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

> All data related to projects, timeline, and skills are stored in dedicated files within the `src/data/` folder.

## Deployment

The website is deployed to GitHub Pages using automated CI/CD. Deployment is triggered automatically when changes are pushed to the main branch.
