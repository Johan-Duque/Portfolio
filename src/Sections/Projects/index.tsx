import { Carousel, ProjectCard } from "../../Components";
import { useLanguage } from "../../Hooks";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
  {
    title: "Distribuciones Pereira",
    description: t('languaje') == 'en' ? 'Landing Page for the company "Distribuciones Pereira" built with React 19. Form handling was implemented using React Hook Form and ZOD + Lazy Loading' : 'Landing Page para la empresa "Distribuciones Pereira" hecha con React 19. Se aplico el manejo de formularios con React Hook Form y ZOD + Lazy Loading',
    image: "https://i.ibb.co/GvTJZdKc/img-responsive.png",
    technologies: ["TypeScript", "React", "Vite", "GitHub"],
    liveUrl: "https://johan-duque.github.io/DistribucionesPereira-2025",
    githubUrl: "https://github.com/Johan-Duque/DistribucionesPereira-2025",
  },
  {
    title: t('languaje') == 'en' ? 'Quantum Chemistry' : 'Química Cuántica',
    description: t('languaje') == 'en' ? 'Research on quantum energy and the behavior of photons. To communicate my findings, I created an interactive report with React that visualizes the data' : 'Investigación sobre la energía cuántica y el comportamiento de fotones. Para comunicar mis hallazgos, creé un informe interactivo con React que visualiza los datos.',
    image: "https://i.ibb.co/HptHzJyd/Captura-de-pantalla-76.png",
    technologies: ["JavaScript", "React", "Vite", "GitHub"],
    liveUrl: "https://johan-duque.github.io/web-quimica/",
    githubUrl: "https://github.com/Johan-Duque/web-quimica",
  },
  {
    title: t('languaje') == 'en' ? 'Clinical Laboratory Software' : 'Software Laboratorio Clínico',
    description: t('languaje') == 'en' ? 'Research on quantum energy and the behavior of photons. To communicate my findings, I created an interactive report with React that visualizes the data' : 'Desarrollo de un software de gestión para un Laboratorio Clínico como proyecto final de programación. Implementé Lenguaje C para el desarrollo principal',
    image: "https://i.ibb.co/JY2C1Hq/Captura-de-pantalla-67.png",
    technologies: ["C", "Git", "GitHub", "VsCode"],
    liveUrl: "https://drive.google.com/file/d/14hYHlk7XCVjCkj0zKhsM1tqYquvABWjS/view",
    githubUrl: "https://github.com/Johan-Duque/Clinical-Laboratory",
  },
];

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>{t("projects.title")}</h2>
      <Carousel>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgUrl={project.image}
            title={project.title}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </Carousel>
    </section>
  );
}

export { Projects };
