import { ProjectsComponent } from "../../Components";
import { useLanguage } from "../../Hooks";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, and payment integration.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    image: "/project2.jpg",
    technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode.",
    image: "/project3.jpg",
    technologies: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Framer Motion",
      "Vite",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  const { t } = useLanguage();

  return (
    <ProjectsComponent/>
  );
}

export { Projects };
