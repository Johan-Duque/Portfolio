import { Carousel, ProjectCard } from "../../Components";
import { useLanguage } from "../../Hooks";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface containerInterface {
  width?: string;
  display?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  padding?: string;
  background?: string;
  minHeight?: string;

}

interface TitleProps {
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginBottom?: string;
  background?: string;
  webkitBackgroundClip?: string;
  webkitTextFillColor?: string;
  backgroundClip?: string;
}

const containerStyles: containerInterface = {
  "width": "100%",
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "center",
  "justifyContent": "center",
  "padding": "6rem 0",
  "background": "var(--background-color)",
  "minHeight": "100vh"
}

const titleStyles: TitleProps = {
  fontSize: "3rem",
  fontWeight: "700",
  color: "var(--content-color)",
  textAlign: "center",
  marginBottom: "2rem",
  background: "linear-gradient(45deg, var(--color-5), var(--color-4))",
  webkitBackgroundClip: "text",
  webkitTextFillColor: "transparent",
  backgroundClip: "text"
}

function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
  {
    title: "Distribuciones Pereira",
    description: t('language') == 'en' ? 'Landing Page for the company "Distribuciones Pereira" built with React 19. Form handling was implemented using React Hook Form and ZOD + Lazy Loading' : 'Landing Page para la empresa "Distribuciones Pereira" hecha con React 19. Se aplico el manejo de formularios con React Hook Form y ZOD + Lazy Loading',
    image: "https://i.ibb.co/GvTJZdKc/img-responsive.png",
    technologies: ["TypeScript", "React", "Vite", "GitHub"],
    liveUrl: "https://distribuciones-pereira.vercel.app",
    githubUrl: "https://github.com/Johan-Duque/Distribuciones-Pereira",
  },
  {
    title: t('language') == 'en' ? 'Quantum Chemistry' : 'Química Cuántica',
    description: t('language') == 'en' ? 'Research on quantum energy and the behavior of photons. To communicate my findings, I created an interactive report with React that visualizes the data' : 'Investigación sobre la energía cuántica y el comportamiento de fotones. Para comunicar mis hallazgos, creé un informe interactivo con React que visualiza los datos.',
    image: "https://i.ibb.co/HptHzJyd/Captura-de-pantalla-76.png",
    technologies: ["JavaScript", "React", "Vite", "GitHub"],
    liveUrl: "https://johan-duque.github.io/web-quimica/",
    githubUrl: "https://github.com/Johan-Duque/web-quimica",
  },
  {
    title: t('language') == 'en' ? 'Clinical Laboratory Software' : 'Software Laboratorio Clínico',
    description: t('language') == 'en' ? 'Development of a management software for a Clinical Laboratory as a final programming project. I implemented the C Language for the core development' : 'Desarrollo de un software de gestión para un Laboratorio Clínico como proyecto final de programación. Implementé Lenguaje C para el desarrollo principal',
    image: "https://i.ibb.co/JY2C1Hq/Captura-de-pantalla-67.png",
    technologies: ["C", "Git", "GitHub", "VsCode"],
    liveUrl: "https://drive.google.com/file/d/14hYHlk7XCVjCkj0zKhsM1tqYquvABWjS/view",
    githubUrl: "https://github.com/Johan-Duque/Clinical-Laboratory",
  },
];

  return (
    <section id="projects" style={{...containerStyles}}>
      <h2 style={{...titleStyles}}>{t("language") == 'en' ? 'My Projects' : 'Mis Proyectos'}</h2>
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
