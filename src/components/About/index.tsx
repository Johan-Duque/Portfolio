import React from 'react';
import { useLanguage } from '../../Hooks';
import styles from './About.module.css';

const AboutComponent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('about.title')}</h2>
        
        <div className={styles.content}>
          <div className={styles.textSection}>
            <p className={styles.description}>{t('about.description')}</p>
            
            {/*
            
              <div className={styles.skillsSection}>
              <h3>{t('about.skills')}</h3>
              <div className={styles.skillsGrid}>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Frontend Development</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Backend Development</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>Database Design</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className={styles.skillItem}>
                  <span className={styles.skillName}>DevOps & CI/CD</span>
                  <div className={styles.skillBar}>
                    <div className={styles.skillProgress} style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            */}

            {

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>{t('about.frontEnd_years')}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1+</span>
                <span className={styles.statLabel}>{t('about.backend_years')}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>{t('about.computerEngineer_years')}</span>
              </div>
            </div>

            }

          </div>
          
          <div className={styles.visualSection}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder}>
                  <span>JD</span>
                </div>
              </div>
              <div className={styles.profileInfo}>
                <h4>Jhoan Developer</h4>
                <p>Full Stack Developer</p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>GitHub</a>
                  <a href="#" className={styles.socialLink}>LinkedIn</a>
                  <a href="#" className={styles.socialLink}>Twitter</a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutComponent };

