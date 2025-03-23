import React, { useState } from "react";
import styles from './Menu.module.css'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Menu () {

    if (localStorage.getItem('Theme') === null) {
        localStorage.setItem('Theme', 'Dark');
    } 

    const Theme = localStorage.getItem('Theme');
    let mode_value = null;

    (Theme == 'Dark') ? mode_value = true : mode_value = false;

    const [mode, setMode] = useState(mode_value);

    const setTheme = () => {
        setMode(!mode);
    }

    const DarkMode = () => {
        document.documentElement.style.setProperty('--color-6', '#fff');
        document.documentElement.style.setProperty('--color-5', '#4493F8');
        document.documentElement.style.setProperty('--color-4', '#598BCD');
        document.documentElement.style.setProperty('--color-3', '#627EA2');
        document.documentElement.style.setProperty('--color-2', '#5C6878');
        document.documentElement.style.setProperty('--color-1', '#43474D');
        document.documentElement.style.setProperty('--color-0', '#000515');
    }

    const LightMode = () => {
        document.documentElement.style.setProperty('--color-0', '#fff');
        document.documentElement.style.setProperty('--color-1', '#4493F8');
        document.documentElement.style.setProperty('--color-2', '#598BCD');
        document.documentElement.style.setProperty('--color-3', '#627EA2');
        document.documentElement.style.setProperty('--color-4', '#006dff');
        document.documentElement.style.setProperty('--color-5', '#43474D');
        document.documentElement.style.setProperty('--color-6', '#000515');
    }
 
    return (
        <header className={styles.Header}>
            <nav className={styles.Menu}>
                <div className={styles.Menu__div}>  
                    <a href="#1">Inicio</a>
                    <a href="#2">Experiencia</a>
                    <a href="#3">Proyectos</a>
                    <a href="#4">Habilidades</a>
                    <button onClick={setTheme}> 
                        {(mode == true) ? DarkMode() : LightMode()} 
                        {(mode == true) ? <MdDarkMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Dark}`}/> : <MdLightMode className={`${styles.Menu__Icons} ${styles.Menu__Icons_Light}`}/>} 
                        {(mode == true) ? localStorage.setItem('Theme', 'Dark') : localStorage.setItem('Theme', 'Light')}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export { Menu }