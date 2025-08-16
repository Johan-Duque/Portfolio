import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Navigation.module.css';
import { SiGamedeveloper } from "react-icons/si";

const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>JD <SiGamedeveloper></SiGamedeveloper></span>
        </div>
        
        <ul className={styles.navLinks}>
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className={styles.navLink}
            >
              {t('nav.home')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className={styles.navLink}
            >
              {t('nav.about')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('experience')}
              className={styles.navLink}
            >
              {t('nav.experience')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className={styles.navLink}
            >
              {t('nav.projects')}
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('technologies')}
              className={styles.navLink}
            >
              {t('nav.technologies')}
            </button>
          </li>
        </ul>

        <div className={styles.languageToggle}>
          <button
            className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={`${styles.langBtn} ${language === 'es' ? styles.active : ''}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

