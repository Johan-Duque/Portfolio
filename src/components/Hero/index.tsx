import { useLanguage } from '../../Hooks';
import styles from './Hero.module.css';

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

function Hero() {
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
                <FaReact className={styles.reactIcon} />
              </div>
            </div>
            <div className={styles.floatingElements}>
              <div className={styles.element} style={{ '--delay': '0s' } as React.CSSProperties}>
                <span><BiLogoTypescript/></span>
              </div>
              <div className={styles.element} style={{ '--delay': '2s' } as React.CSSProperties}>
                <span><FaNodeJs /></span>
              </div>
              <div className={styles.element} style={{ '--delay': '4s' } as React.CSSProperties}>
                <span><FaCss3 /></span>
              </div>
              <div className={styles.element} style={{ '--delay': '6s' } as React.CSSProperties}>
                <span><FaHtml5 ></FaHtml5></span>
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

