# Portfolio 

This is a personal portfolio website showcasing my skills, projects, and experience as a Front-end Developer. The website is built with modern web technologies to provide a responsive and engaging user experience.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite:** A fast build tool that provides a lightning-fast development experience.
-   **HTML5:** The standard markup language for creating web pages.
-   **CSS3:** The styling language used for describing the presentation of a document written in HTML.

## Libraries Used

-   `react`: Core React library.
-   `react-dom`: React package for working with the DOM.
-   `react-icons`: A collection of popular SVG icons as React components.

## Application Structure

The project follows a component-based architecture, organizing the codebase into reusable and modular pieces.

```
Portfolio/
├── public/                 # Static assets (images, favicon)
├── src/                    # Main application source code
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.tsx            # Entry point of the application
│   ├── vite-env.d.ts       # Vite environment type definitions
│   ├── assets/             # Static assets specific to components
│   ├── Components/         # Reusable UI components
│   │   ├── About/          # About section component
│   │   ├── Carousel/       # Image carousel component
│   │   ├── Error/          # Error display component
│   │   ├── Experience/     # Experience section component
│   │   ├── Footer/         # Footer component
│   │   ├── Hero/           # Hero section component
│   │   ├── Loading/        # Loading indicator component
│   │   ├── Navigation/     # Navigation bar component
│   │   ├── ProjectCard/    # Individual project card component
│   │   └── Technologies/   # Technologies section component
│   ├── Contexts/           # React Contexts for global state management
│   │   ├── LanguageContext.tsx
│   │   └── LanguageContextValue.ts
│   ├── Hooks/              # Custom React Hooks for reusable logic
│   │   └── index.ts        # Exports custom hooks (e.g., useLanguage)
│   └── Sections/           # Major sections of the portfolio
│       ├── About/          # About section
│       ├── Experience/     # Experience section
│       ├── Footer/         # Footer section
│       ├── Home/           # Home section
│       ├── Projects/       # Projects section
│       └── Technologies/   # Technologies section
├── .gitignore              # Specifies intentionally untracked files to ignore
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package-lock.json       # Dependency lock file
├── package.json            # Project metadata and dependencies
├── tsconfig.app.json       # TypeScript configuration for application code
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js environment
└── vite.config.ts          # Vite configuration
```
