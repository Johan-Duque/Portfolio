import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  en: {
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
    'about.title': 'About Me',
    'about.description': 'I am a passionate Fron-End Developer with experience in modern web technologies. I love learning new things and solving complex problems.',
    'about.skills': 'Skills',
    'about.education': 'Education',
    'about.interests': 'Interests',
    
    // Experience section
    'experience.title': 'Work Experience',
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
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.technologies': 'Tecnologías',
    
    // Home section
    'home.title': 'Hola, soy',
    'home.subtitle': 'Desarrollador Full Stack',
    'home.description': 'Apasionado por crear soluciones digitales innovadoras y convertir ideas en realidad a través del código.',
    'home.cta': 'Conoce más sobre mí',
    
    // About section
    'about.title': 'Sobre Mí',
    'about.description': 'Soy un Desarrollador Full Stack apasionado con experiencia en tecnologías web modernas. Me encanta aprender cosas nuevas y resolver problemas complejos.',
    'about.skills': 'Habilidades',
    'about.education': 'Educación',
    'about.interests': 'Intereses',
    
    // Experience section
    'experience.title': 'Experiencia Laboral',
    'experience.current': 'Presente',
    
    // Projects section
    'projects.title': 'Mis Proyectos',
    'projects.view': 'Ver Proyecto',
    'projects.github': 'Ver Código',
    
    // Technologies section
    'technologies.title': 'Tecnologías y Herramientas',
    'technologies.frontend': 'Frontend',
    'technologies.backend': 'Backend',
    'technologies.database': 'Base de Datos',
    'technologies.tools': 'Herramientas',
    
    // Common
    'download.cv': 'Descargar CV',
    'contact.me': 'Contáctame',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

