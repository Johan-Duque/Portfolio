import { ExperienceComponent } from "../../Components";
import { useLanguage } from "../../Hooks";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

function Experience() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Distribuciones Pereira",
      position: t('languaje') == 'en' ? 'Front-End Developer' : 'Desarrollador Fron-End',
      period: `${t('languaje') == 'en' ? 'June 2025 - August 2025' : 'Junio 2025 - Agosto 2025'}`,
      description: `${t('languaje') == 'en' ? 'reated a modern web application for "Distribuciones Pereira" using React, TypeScript, and Vite. The project highlights component architecture, form handling with React Hook Form + ZOD, and performance optimization with Lazy Loading and Error Boundaries' : 'Creé una aplicación web moderna para "Distribuciones Pereira" con React, TypeScript y Vite. El proyecto destaca la arquitectura de componentes, el manejo de formularios con React Hook Form + ZOD y la optimización del rendimiento con Lazy Loading y Error Boundaries'}`,
      technologies: ["HTML", "CSS", "TypeScript", "React", "Vite", "Git", "GitHub"],
    },
      {
      id: 2,
      company: "Unet",
      position: t('languaje') == 'en' ? 'Front-End Developer' : 'Desarrollador Fron-End',
      period: `${t('languaje') == 'en' ? 'June 2025 - August 2025' : 'Junio 2025 - Agosto 2025'}`,
      description: `${t('languaje') == 'en' ? 'I conducted research on quantum energy and photon behavior. I developed an interactive report with React to visualize the findings and successfully published it on GitHub Pages.' : 'Realicé una investigación sobre energía cuántica y el comportamiento de fotones. Desarrollé un informe interactivo con React para visualizar los hallazgos y lo publiqué exitosamente en GitHub Pages.'}`,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vite", "Git", "GitHub"],
    },
     {
      id: 3,
      company: "Unet",
      position: t('languaje') == 'en' ? 'C Developer' : 'Desarrollador C',
      period: t('languaje') == 'en' ? 'February 2023 - April 2023' : 'Febrero 2023 - Abril 2023',
      description: `${t('languaje') == 'en' ? 'I led the co-development of a management software for a Clinical Laboratory as a final programming project. I implemented C Language for the main development.' : 'Lideré el co-desarrollo de un software de gestión para un Laboratorio Clínico como proyecto final de programación. Implementé Lenguaje C para el desarrollo principal'}`,
      technologies: ["C", "Git", "GitHub", "VsCode"],
    },
  ];

  return <ExperienceComponent itemsExperience={experiences} />;
}

export { Experience };
