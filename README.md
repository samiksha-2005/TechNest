# TechNest

A modern, responsive corporate website template built with React and Vite.

## Overview

TechNest is a lightweight portfolio / corporate website starter using Vite and React. It provides a clean layout, page transitions, and reusable components for building a professional web presence quickly.

## Features

- Clean, responsive layout and navigation
- Page transitions and scroll effects
- Reusable UI components (Navbar, Footer, MagneticButton, etc.)
- Image asset organization and simple routing

## Tech Stack

- Framework: React
- Bundler: Vite
- Styling: CSS (utility and component-based files)
- Tooling: npm / Node.js

## Getting Started

Prerequisites:

- Node.js 16+ (recommended)

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Project Structure

```
├── public/                 # Static files
├── src/
│   ├── assets/             # Images and media
│   ├── components/         # Reusable React components
│   └── pages/              # Page components (Home, About, Contact, etc.)
├── index.html
├── package.json
└── vite.config.js
```

Key files:

- `src/pages` — page-level components such as Home.jsx, About.jsx
- `src/components` — shared components like `Navbar.jsx`, `Footer.jsx`

## Deployment

This project can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.). Typical steps:

1. Build: `npm run build`
2. Upload the `dist/` output folder to your host or connect your repo to a CI provider that runs the build.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description of the change.

## License

Specify your license here (e.g., MIT) or include a `LICENSE` file.

## Contact

For questions or collaboration, open an issue or contact the repository owner.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
