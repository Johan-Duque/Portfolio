import { useLanguage } from '../../Hooks';
import styles from './About.module.css';

import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosHourglass } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";

function AboutComponent() {
  const { t } = useLanguage();

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
         
          <div className={styles.leftColumn}>
            <div className={styles.aboutSection}>
              <div className={styles.titleContainer}>
                <div className={styles.profileImage}>
                    <img src="https://i.ibb.co/zTJdCf30/Foto-Personal.jpg" alt="Personal Photo" />
                </div>
                <h2 className={styles.title}>{t('languaje') == 'en' ? 'About Me' : 'Sobre Mi'}</h2>
              </div>
              <div className={styles.aboutContent}>
                <p className={styles.descriptionAbout}>
                  {t('about.description_1')}
                </p>
                <p className={styles.descriptionAbout}>
                  {t('about.description_2')}
                </p>
                <div className={styles.buttonRow}>
                  <a href={ t('languaje') == 'en' ? 'https://docs.google.com/document/d/14fZXEZoCCXrdMKUc7acDuAE51R37ATjG/edit?usp=sharing&ouid=111385114366457343190&rtpof=true&sd=true' : 'https://docs.google.com/document/d/17u_4RzUgfRf-UocXM7h4UoN2zKnYDcHQ/edit?usp=sharing&ouid=111385114366457343190&rtpof=true&sd=true'} target="_blank" rel="noopener noreferrer" className={styles.externalButton}>
                    CV <PiReadCvLogoFill />
                  </a>
                  <a href="https://www.linkedin.com/in/johan-omar-duque-pereira-05160733a/" target="_blank" rel="noopener noreferrer" className={styles.externalButton}>
                    LinkedIn <FaLinkedin />
                  </a>
                  <a href="https://github.com/Johan-Duque" target="_blank" rel="noopener noreferrer" className={styles.externalButton}>
                    Github <FaGithub />
                  </a>
                  <a href="mailto:jhoandp1995@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.externalButton}>
                  {t('languaje') == 'en' ? 'Gmail' : 'Correo'} <SiGmail />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.educationSection}>
              <h2 className={styles.educationTitle}>{t('languaje') == 'en' ? 'Education' : 'Educacion'}</h2>
              <div className={styles.educationList}>

                <div className={styles.educationItem}>
                  <div className={styles.educationHeader}>
                    <h3 className={styles.institutionName}>{t('about.university')}</h3>
                    <span className={styles.period}><IoIosHourglass/> 2022 - {t('languaje') == 'en' ? 'Currently' : 'Actualmente'}</span>
                  </div>
                  <h4 className={styles.degree}><PiCertificate/> {t('about.university_degree')}</h4>
                </div>

                <div className={styles.educationItem}>
                  <div className={styles.educationHeader}>
                    <h3 className={styles.institutionName}>{t('about.platzi')}</h3>
                    <span className={styles.period}><IoIosHourglass/> 2024 - {t('languaje') == 'en' ? 'Currently' : 'Actualmente'}</span>
                  </div>
                  <h4 className={styles.degree}><PiCertificate/> {t('about.platzi_degree')}</h4>
                </div>

                {/* Certificaciones */}
                  <a href="https://drive.google.com/drive/folders/17fASDgzDkv51QvjHII05LULkgNXhuRNz?usp=sharing" target='blanck' 
                  className={`${styles.educationItem} ${styles.certificationsLink}`}>
                    {t('languaje') == 'en' ? 'Certifications' : 'Certificaciones'} <AiFillSafetyCertificate />
                  </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { AboutComponent };

