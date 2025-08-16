import React from 'react';
import { useLanguage } from '../../Hooks';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {t('home.title')} <span className={styles.name}>Johan</span>
            </h1>
            <h2 className={styles.subtitle}>{t('home.subtitle')}</h2>
            <p className={styles.description}>{t('home.description')}</p>
            <button onClick={scrollToAbout} className={styles.ctaButton}>
              {t('home.cta')}
            </button>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.avatar}>
              <div className={styles.avatarCircle}>
                <span className={styles.avatarText}>JD</span>
              </div>
            </div>
            <div className={styles.floatingElements}>
              <div className={styles.element} style={{ '--delay': '0s' } as React.CSSProperties}>
                <span>React</span>
              </div>
              <div className={styles.element} style={{ '--delay': '1s' } as React.CSSProperties}>
                <span>TypeScript</span>
              </div>
              <div className={styles.element} style={{ '--delay': '2s' } as React.CSSProperties}>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};

export { Hero };

