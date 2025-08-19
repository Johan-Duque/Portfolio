# Portafolio 

Este es un sitio web de portafolio personal que muestra mis habilidades, proyectos y experiencia como desarrollador Front-End. El sitio web está construido con tecnologías web modernas para proporcionar una experiencia de usuario receptiva y atractiva.

## Tecnologías Utilizadas

-   **React:** Una biblioteca de JavaScript para construir interfaces de usuario.
-   **TypeScript:** Un superconjunto tipado de JavaScript que compila a JavaScript plano.
-   **Vite:** Una herramienta de construcción rápida que proporciona una experiencia de desarrollo ultrarrápida.
-   **HTML5:** El lenguaje de marcado estándar para crear páginas web.
-   **CSS3:** El lenguaje de estilo utilizado para describir la presentación de un documento escrito en HTML.

## Librerías Utilizadas

-   `react`: Librería principal de React.
-   `react-dom`: Paquete de React para trabajar con el DOM.
-   `react-icons`: Una colección de iconos SVG populares como componentes de React.

## Estructura de la Aplicación

El proyecto sigue una arquitectura basada en componentes, organizando el código en piezas reutilizables y modulares.

```
Portfolio/
├── public/                 # Activos estáticos (imágenes, favicon)
├── src/                    # Código fuente principal de la aplicación
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos globales
│   ├── main.tsx            # Punto de entrada de la aplicación
│   ├── vite-env.d.ts       # Definiciones de tipo del entorno Vite
│   ├── assets/             # Activos estáticos específicos de los componentes
│   ├── Components/         # Componentes de interfaz de usuario reutilizables
│   │   ├── About/          # Componente de la sección Acerca de
│   │   ├── Carousel/       # Componente de carrusel de imágenes
│   │   ├── Error/          # Componente de visualización de errores
│   │   ├── Experience/     # Componente de la sección Experiencia
│   │   ├── Footer/         # Componente de pie de página
│   │   ├── Hero/           # Componente de la sección Hero
│   │   ├── Loading/        # Componente indicador de carga
│   │   ├── Navigation/     # Componente de barra de navegación
│   │   ├── ProjectCard/    # Componente de tarjeta de proyecto individual
│   │   └── Technologies/   # Componente de la sección Tecnologías
│   ├── Contexts/           # Contextos de React para la gestión del estado global
│   │   ├── LanguageContext.tsx
│   │   └── LanguageContextValue.ts
│   ├── Hooks/              # Hooks de React personalizados para lógica reutilizable
│   │   └── index.ts        # Exporta hooks personalizados (ej. useLanguage)
│   └── Sections/           # Secciones principales del portafolio
│       ├── About/          # Sección Acerca de
│       ├── Experience/     # Sección Experiencia
│       ├── Footer/         # Sección Pie de página
│       ├── Home/           # Sección Inicio
│       ├── Projects/       # Sección Proyectos
│       └── Technologies/   # Sección Tecnologías
├── .gitignore              # Especifica archivos no rastreados intencionalmente para ignorar
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Archivo HTML principal
├── package-lock.json       # Archivo de bloqueo de dependencias
├── package.json            # Metadatos y dependencias del proyecto
├── tsconfig.app.json       # Configuración de TypeScript para el código de la aplicación
├── tsconfig.json           # Configuración base de TypeScript
├── tsconfig.node.json      # Configuración de TypeScript para el entorno Node.js
└── vite.config.ts          # Configuración de Vite
```