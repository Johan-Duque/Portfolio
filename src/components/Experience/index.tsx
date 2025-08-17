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

function ExperienceComponent() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of enterprise web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      id: 2,
      company: 'Digital Innovations',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client websites and web applications. Collaborated with design and UX teams to implement responsive interfaces.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Git', 'Heroku']
    },
    {
      id: 3,
      company: 'StartUp Ventures',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Built user interfaces for mobile and web applications. Worked closely with product managers to implement new features and improve user experience.',
      technologies: ['React Native', 'JavaScript', 'CSS3', 'Redux', 'Firebase']
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('experience.title')}</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                {index < experiences.length - 1 && <div className={styles.markerLine}></div>}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <h3 className={styles.jobTitle}>{exp.position}</h3>
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={styles.jobPeriod}>{exp.period}</span>
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

