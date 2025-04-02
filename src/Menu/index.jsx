import React, { useContext } from "react";
import styles from './Menu.module.css';
import Spanish from '../../public/spain.png';
import English from '../../public/united-kingdom.png';
import { CreateContext } from "../Context/CreateContext";

// ICONS //
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Menu() {

    const {
        theme,
        toggleTheme,
        language,
        togglelanguage
    } = useContext( CreateContext );

  return (
    <header className={styles.Header}>
      <nav className={styles.Menu}>
        <div className={styles.Menu__div}>
          <a href="#1">{language == 'Spanish' ? 'Inicio' : 'Home'}</a>
          <a href="#2">{language == 'Spanish' ? 'Experiencia' : 'Experience'}</a>
          <a href="#3">{language == 'Spanish' ? 'Proyectos' : 'Projects'}</a>
          <a href="#4">{language == 'Spanish' ? 'Habilidades' : 'Skills'}</a>
          <button onClick={toggleTheme} className={styles.Menu__Button_Theme}>
            {theme === 'Dark' ? (
              <MdDarkMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Dark}`} />
            ) : (
              <MdLightMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Light}`} />
            )}
          </button>
          <button onClick={togglelanguage} className={styles.Menu__Button_Language}>
            {language === 'Spanish' ? (
                <img src={Spanish} alt="Spanish" />
            ) : (
                <img src={English} alt="English" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export { Menu };
