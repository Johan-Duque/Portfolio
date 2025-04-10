import React, { useContext, useEffect, useState } from "react";
import styles from './Menu.module.css';
import Spanish from '../../public/spain.png';
import English from '../../public/united-kingdom.png';
import { CreateContext } from "../Context/CreateContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// ICONS //
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const NavLink = ({ href, isActive, children, onCloseMenu }) => (
  <a href={href} style={{ color: isActive ? 'var(--color-4)' : 'var(--color-6)' }} onClick={onCloseMenu}>
    {children}
  </a>
);

function Menu() {
  const [responsive_className, setResponsive_className] = useState(false);

  const {
    theme,
    toggleTheme,
    language,
    togglelanguage,
    sectionId
  } = useContext(CreateContext);

  const [linkColors, setLinkColors] = useState({
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  });

  useEffect(() => {
    setLinkColors({
      a: sectionId === 1 ? 'var(--color-4)' : 'var(--color-6)',
      b: sectionId === 2 ? 'var(--color-4)' : 'var(--color-6)',
      c: sectionId === 3 ? 'var(--color-4)' : 'var(--color-6)',
      d: sectionId === 4 ? 'var(--color-4)' : 'var(--color-6)',
      e: sectionId === 5 ? 'var(--color-4)' : 'var(--color-6)',
    });
  }, [sectionId]);

  const handleHamburgerClick = () => {
    setResponsive_className(!responsive_className);
  };

  const [window_Width, setWindow_Width] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindow_Width(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <header className={styles.Header}>
      <nav className={styles.Menu}>
        <div className={styles.Menu__div}>

          <div className={`${styles.Menu__div_Sections}`}>
            <TbMenuDeep className={styles.Menu__Hamburger} onClick={handleHamburgerClick}/>
            <div className={styles.div_Sections_Links} style={window_Width < 550 ? { transform: `translateX(${responsive_className ? 0 : 100}%)`} : { transform: `translateX(0%)`} }>
              <button onClick={handleHamburgerClick} className={styles.button__closeMenu}> <IoMdClose /> </button>
              <NavLink href="#1" isActive={linkColors.a === 'var(--color-4)'} onCloseMenu={handleHamburgerClick}>{language === 'Spanish' ? 'Inicio' : 'Home'}</NavLink>
              <NavLink href="#2" isActive={linkColors.b === 'var(--color-4)'} onCloseMenu={handleHamburgerClick}>{language === 'Spanish' ? 'Experiencia' : 'Experience'}</NavLink>
              <NavLink href="#3" isActive={linkColors.c === 'var(--color-4)'} onCloseMenu={handleHamburgerClick}>{language === 'Spanish' ? 'Proyectos' : 'Projects'}</NavLink>
              <NavLink href="#4" isActive={linkColors.d === 'var(--color-4)'} onCloseMenu={handleHamburgerClick}>{language === 'Spanish' ? 'Habilidades' : 'Skills'}</NavLink>
              <NavLink href="#5" isActive={linkColors.e === 'var(--color-4)'} onCloseMenu={handleHamburgerClick}>{language === 'Spanish' ? 'Certificaciones' : 'Certifications'}</NavLink>
            </div>
          </div>

          <div className={styles.Menu__div_Buttons}>
            <button onClick={toggleTheme} className={styles.Menu__Button_Theme}>
              {theme === 'Dark' ?
                <MdDarkMode  className={styles.DarkMode_Icon} style={{color: 'var(--color-4)'}}/> :
                <MdLightMode className={styles.LightMode_Icon} style={{color: 'var(--color-4)'}} />
              }
            </button>

            <button onClick={togglelanguage} className={styles.Menu__Button_Language}>
              <LazyLoadImage src={language === 'Spanish' ? Spanish : English} alt={language} />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

export { Menu };


/*

import React, { useContext, useEffect, useState } from "react";
import styles from './Menu.module.css';
import Spanish from '../../public/spain.png';
import English from '../../public/united-kingdom.png';
import { CreateContext } from "../Context/CreateContext";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// ICONS //
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const NavLink = ({ href, isActive, children }) => (
  <a href={href} style={{ color: isActive ? 'var(--color-4)' : 'var(--color-6)' }}>
    {children}
  </a>
); 

const ThemeToggleButton = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className={styles.Menu__Button_Theme}>
    {theme === 'Dark' ? (
      <MdDarkMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Dark}`} />
    ) : (
      <MdLightMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Light}`} />
    )}
  </button>
);

const LanguageToggleButton = ({ language, togglelanguage }) => (
  <button onClick={togglelanguage} className={styles.Menu__Button_Language}>
    <LazyLoadImage src={language === 'Spanish' ? Spanish : English} alt={language} />
  </button>
);

const ResponsiveMenu = ({ isOpen, onClose, linkColors, language }) => (
  <div className={`${styles.Responsive__Hamburger_View}`} style={{ transform: `translateX(${isOpen ? 0 : 100}%)` }}>
    <button onClick={onClose}> <IoMdClose /> </button>
    <NavLink href="#1" isActive={linkColors.a === 'var(--color-4)'}>{language === 'Spanish' ? 'Inicio' : 'Home'}</NavLink>
    <NavLink href="#2" isActive={linkColors.b === 'var(--color-4)'}>{language === 'Spanish' ? 'Experiencia' : 'Experience'}</NavLink>
    <NavLink href="#3" isActive={linkColors.c === 'var(--color-4)'}>{language === 'Spanish' ? 'Proyectos' : 'Projects'}</NavLink>
    <NavLink href="#4" isActive={linkColors.d === 'var(--color-4)'}>{language === 'Spanish' ? 'Habilidades' : 'Skills'}</NavLink>
    <NavLink href="#5" isActive={linkColors.e === 'var(--color-4)'}>{language === 'Spanish' ? 'Certificaciones' : 'Certifications'}</NavLink>
  </div>
);

function Menu() {
  const [responsive_className, setResponsive_className] = useState(false);

  const {
    theme,
    toggleTheme,
    language,
    togglelanguage,
    sectionId
  } = useContext(CreateContext);

  const [linkColors, setLinkColors] = useState({
    a: null,
    b: null,
    c: null,
    d: null,
    e: null
  });

  useEffect(() => {
    setLinkColors({
      a: sectionId === 1 ? 'var(--color-4)' : 'var(--color-6)',
      b: sectionId === 2 ? 'var(--color-4)' : 'var(--color-6)',
      c: sectionId === 3 ? 'var(--color-4)' : 'var(--color-6)',
      d: sectionId === 4 ? 'var(--color-4)' : 'var(--color-6)',
      e: sectionId === 5 ? 'var(--color-4)' : 'var(--color-6)',
    });
  }, [sectionId]);

  const handleHamburgerClick = () => {
    setResponsive_className(!responsive_className);
  };

  return (
    <header className={styles.Header}>
      <nav className={styles.Menu}>
        <div className={styles.Menu__div}>
          <NavLink href="#1" isActive={linkColors.a === 'var(--color-4)'}>{language === 'Spanish' ? 'Inicio' : 'Home'}</NavLink>
          <NavLink href="#2" isActive={linkColors.b === 'var(--color-4)'}>{language === 'Spanish' ? 'Experiencia' : 'Experience'}</NavLink>
          <NavLink href="#3" isActive={linkColors.c === 'var(--color-4)'}>{language === 'Spanish' ? 'Proyectos' : 'Projects'}</NavLink>
          <NavLink href="#4" isActive={linkColors.d === 'var(--color-4)'}>{language === 'Spanish' ? 'Habilidades' : 'Skills'}</NavLink>
          <NavLink href="#5" isActive={linkColors.e === 'var(--color-4)'}>{language === 'Spanish' ? 'Certificaciones' : 'Certifications'}</NavLink>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <LanguageToggleButton language={language} togglelanguage={togglelanguage} />
        </div>

        <div className={styles.Menu__div_Responsive}>
        
          <div className={styles.div_Responsive__Buttons}>
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <LanguageToggleButton language={language} togglelanguage={togglelanguage} />
          </div>

         
          <div className={`${styles.div_Responsive__Hamburger}`} onClick={handleHamburgerClick}>
            <TbMenuDeep />

            <ResponsiveMenu
              isOpen={responsive_className}
              onClose={handleHamburgerClick}
              linkColors={linkColors}
              language={language}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export { Menu };

*/