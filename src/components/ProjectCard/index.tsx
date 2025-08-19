import { useLanguage  } from '../../Hooks';
import styles from './ProjectCard.module.css'

interface props {
    imgUrl: string,
    title: string,
    liveUrl?: string,
    githubUrl?: string,
    description: string,
    technologies: string[], 
}

function ProjectCard({imgUrl, title, liveUrl, githubUrl, description, technologies} : props) {

  const { t } = useLanguage();

  return (
        <div className={styles.projectCard}>
          <div className={styles.projectImage}>
            <div className={styles.imagePlaceholder}>
             
             <img src={imgUrl} alt={title} className={styles.image}/>
            </div>
            <div className={styles.projectOverlay}>
              <div className={styles.projectLinks}>
                {liveUrl && (
                  <a href={liveUrl} target='_blank' className={styles.projectLink}>
                     {t("language") == 'en' ? 'View Project' : 'Ver Proyecto'}
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target='_blank' className={styles.projectLink}>
                    {t("language") == 'en' ? 'View Code' : 'Ver Codigo'}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className={styles.projectContent}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>

            <div className={styles.projectTechnologies}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
  );
}

export { ProjectCard };
