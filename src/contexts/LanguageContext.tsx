import React, { createContext, useState, type ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  en: {

    'languaje' : 'en',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    
    // Home section
    'home.title': 'Hi, I\'m',
    'home.subtitle': 'Front-End Developer',
    'home.description': 'Student of Computer Engineering with experience in web applications and programming.',
    
    // About section
    'about.description_1': "My name is Johan Omar Duque Pereira. I'm a computer engineering student with experience in Front-End technologies such as JavaScript, HTML, CSS, React, and TypeScript. I also have a solid grasp of Git and GitHub, and I'm proficient in databases using SQL",

    'about.description_2': "My skills also extend to Back-End development with Python, Java, C, and C++. I combine my university studies with work on self-taught projects and continuous learning on platforms like Platzi, where I've gained a deeper understanding of key technologies like TypeScript and React",

    'about.university' : "Experimental University of Táchira",
    'about.university_degree' : "Computer Engineering",

    'about.platzi' : "Platzi Academy",
    'about.platzi_degree' : "Full-Stack Developer",
    
    // Experience section
    'experience.title': 'Experience',
    'experience.current': 'Present',
    
    // Projects section
    'projects.title': 'My Projects',
    'projects.view': 'View Project',
    'projects.github': 'View Code',
    
    // Technologies section
    'technologies.title': 'Technologies & Tools',
    'technologies.frontend': 'Frontend',
    'technologies.backend': 'Backend',
    'technologies.database': 'Database',
    'technologies.tools': 'Tools',
    
    // Common
    'download.cv': 'Download CV',
    'contact.me': 'Contact Me',
  },
  es: {
    "languaje": "es",
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    // Home section
    "home.title": "Hola, soy",
    "home.subtitle": "Desarrollador Front-End",
    "home.description": "Estudiante de Ingeniería en Informática con experiencia en aplicaciones web y programación.",
    // About section
    "about.title": "Sobre mí",
    "about.description_1": "Mi nombre es Johan Omar Duque Pereira. Soy estudiante de Ingeniería en Informática con experiencia en tecnologías Front-End como JavaScript, HTML, CSS, React y TypeScript. Además, tengo un sólido manejo de Git y GitHub, y domino bases de datos con SQL.",
    "about.description_2": "Mis habilidades también se extienden al desarrollo Back-End con Python, Java, C y C++. Combino mis estudios universitarios con el trabajo en proyectos autodidactas y el aprendizaje continuo en plataformas como Platzi, donde he profundizado en tecnologías clave como TypeScript y React.",

    "about.university": "Universidad Experimental del Táchira",
    "about.university_degree": "Ingeniería En Informática",
    "about.platzi": "Academia Platzi",
    "about.platzi_degree": "Desarrollador Full-Stack",
    // Experience section
    "experience.title": "Experiencia",
    "experience.current": "Actualidad",
    // Projects section
    "projects.title": "Mis Proyectos",
    "projects.view": "Ver proyecto",
    "projects.github": "Ver código",
    // Technologies section
    "technologies.title": "Tecnologías y herramientas",
    "technologies.frontend": "Frontend",
    "technologies.backend": "Backend",
    "technologies.database": "Base de datos",
    "technologies.tools": "Herramientas",
    // Common
    "download.cv": "Descargar CV",
    "contact.me": "Contáctame"
  }

};

export function LanguageProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

