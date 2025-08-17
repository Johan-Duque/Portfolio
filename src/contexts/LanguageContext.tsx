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
    'home.description': 'Passionate about creating innovative digital solutions and turning ideas into reality through code.',
    'home.cta': 'Get to know me',
    
    // About section
    'about.description_1': 'My name is Johan Omar Duque Pereira. I can use Front-End related technologies such as JavaScript, HTML, CSS, React, and TypeScript. Additionally, I also know how to use more Backend-oriented languages like Python, Java, C, and C++.',

    'about.description_2': "I am a Computer Engineering student. I currently work on self-taught projects. Additionally, I continue studying Engineering at my university. I also keep learning through courses at the Platzi academy, where I've learned technologies like TypeScript and React",

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
    "home.description": "Apasionado por crear soluciones digitales innovadoras y convertir ideas en realidad a través del código.",
    "home.cta": "Conóceme",
    // About section
    "about.title": "Sobre mí",
    "about.description_1": "Mi nombre es Johan Omar Duque Pereira. Puedo usar tecnologías relacionadas con Front-End como JavaScript, HTML, CSS, React y TypeScript. Además, también sé cómo usar lenguajes más orientados a Backend como Python, Java, C y C++.",
    "about.description_2": "Soy estudiante de Ingeniería en Computación. Actualmente trabajo en proyectos autodidactas. Además, continúo estudiando Ingeniería en mi universidad. También sigo aprendiendo a través de cursos en la academia Platzi, donde he aprendido tecnologías como TypeScript y React.",

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

