import { useLanguage } from '../../Hooks';
import styles from './Experience.module.css';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

interface props {
  itemsExperience: ExperienceItem[]
}

function ExperienceComponent({itemsExperience} : props) {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('experience.title')}</h2>
        
        <div className={styles.timeline}>
          
          {itemsExperience.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < itemsExperience.length - 1 && <div className={styles.markerLine}></div>}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>{exp.position}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.jobPeriod}>{exp.period}</span>
                  </div>
                </div>
                
                <p className={styles.jobDescription}>{exp.description}</p>
                
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
};

export { ExperienceComponent };

