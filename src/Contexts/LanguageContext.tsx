import React, { useState, useEffect, type ReactNode } from 'react';
import { LanguageContext } from './LanguageContextValue';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {

    'language' : 'en',

    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.technologies': 'Technologies',
    
    'home.title': 'Hi, I\'m',
    'home.subtitle': 'Front-End Developer',
    'home.description': 'Student of Computer Engineering with experience in web applications and programming.',
    
    'about.description_1': "My name is Johan Omar Duque Pereira. I'm a computer engineering student with experience in Front-End technologies such as JavaScript, HTML, CSS, React, and TypeScript. I also have a solid grasp of Git and GitHub, and I'm proficient in databases using SQL",
    'about.description_2': "My skills also extend to Back-End development with Python, Java, C, and C++. I combine my university studies with work on self-taught projects and continuous learning on platforms like Platzi, where I've gained a deeper understanding of key technologies like TypeScript and React",

    'about.university' : "Experimental University of Táchira",
    'about.university_degree' : "Computer Engineering",

    'about.platzi' : "Platzi Academy",
    'about.platzi_degree' : "Full-Stack Developer",

  },
  es: {
   "language": "es",

  "nav.home": "Inicio",
  "nav.about": "Sobre Mí",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.technologies": "Tecnologías",

  "home.title": "Hola, soy",
  "home.subtitle": "Desarrollador Front-End",
  "home.description": "Estudiante de Ingeniería en Informática con experiencia en aplicaciones web y programación.",

  "about.description_1": "Mi nombre es Johan Omar Duque Pereira. Soy estudiante de Ingeniería en Informática con experiencia en tecnologías Front-End como JavaScript, HTML, CSS, React y TypeScript. También tengo un sólido manejo de Git y GitHub, y soy competente en el uso de bases de datos con SQL.",

  "about.description_2": "Mis habilidades también se extienden al desarrollo Back-End con Python, Java, C y C++. Combino mis estudios universitarios con el trabajo en proyectos de autoaprendizaje y el aprendizaje continuo en plataformas como Platzi, donde he adquirido un conocimiento más profundo de tecnologías clave como TypeScript y React.",

  "about.university": "Universidad Nacional Experimental del Táchira",
  "about.university_degree": "Ingeniería en Informática",

  "about.platzi": "Platzi Academy",
  "about.platzi_degree": "Desarrollador Full-Stack"
  }

};

export function LanguageProvider({ children }: { children: ReactNode }): React.ReactElement {

  const [language, setLanguage] = useState<'en' | 'es'>(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('Language');
      return storedLang === 'es' ? 'es' : 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('Language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

