import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Technologies.module.css';

interface TechnologyCategory {
  name: string;
  technologies: string[];
  icon: string;
}

const Technologies: React.FC = () => {
  const { t } = useLanguage();

  const technologyCategories: TechnologyCategory[] = [
    {
      name: t('technologies.frontend'),
      technologies: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      name: t('technologies.backend'),
      technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel', 'Java', 'Spring Boot'],
      icon: '⚙️'
    },
    {
      name: t('technologies.database'),
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase', 'SQLite'],
      icon: '🗄️'
    },
    {
      name: t('technologies.tools'),
      technologies: ['Git', 'Docker', 'AWS', 'Heroku', 'Vercel', 'Figma', 'Postman', 'VS Code'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('technologies.title')}</h2>
        
        <div className={styles.categoriesGrid}>
          {technologyCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
              
              <div className={styles.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.technologyItem}>
                    <span className={styles.technologyName}>{tech}</span>
                    <div className={styles.technologyBar}>
                      <div 
                        className={styles.technologyProgress} 
                        style={{ 
                          width: `${Math.random() * 30 + 70}%`,
                          animationDelay: `${techIndex * 0.1}s`
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.skillsSummary}>
          <div className={styles.summaryCard}>
            <h3>Skills Overview</h3>
            <p>I'm constantly learning and expanding my skill set to stay up-to-date with the latest technologies and best practices in web development.</p>
            <div className={styles.skillLevels}>
              <div className={styles.skillLevel}>
                <span className={styles.levelLabel}>Advanced</span>
                <div className={styles.levelBar}>
                  <div className={styles.levelProgress} style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className={styles.skillLevel}>
                <span className={styles.levelLabel}>Intermediate</span>
                <div className={styles.levelBar}>
                  <div className={styles.levelProgress} style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className={styles.skillLevel}>
                <span className={styles.levelLabel}>Learning</span>
                <div className={styles.levelBar}>
                  <div className={styles.levelProgress} style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

