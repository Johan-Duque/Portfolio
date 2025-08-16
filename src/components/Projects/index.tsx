import React from 'react';
import { useLanguage } from '../../Hooks';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectsComponent: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and progress tracking.',
      image: '/project2.jpg',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'JWT'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and dark mode.',
      image: '/project3.jpg',
      technologies: ['React', 'TypeScript', 'CSS Modules', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('projects.title')}</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className={styles.projectOverlay}>
                  <div className={styles.projectLinks}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} className={styles.projectLink}>
                        {t('projects.view')}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className={styles.projectLink}>
                        {t('projects.github')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewMoreSection}>
          <button className={styles.viewMoreButton}>
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export { ProjectsComponent };

