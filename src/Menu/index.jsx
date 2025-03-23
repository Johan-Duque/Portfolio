import React from "react";
import styles from './Menu.module.css'

function Menu () {
    return (
        <header className={styles.Header}>
            <nav className={styles.Menu}>
                <div className={styles.Menu__div}>  
                    <a href="#1">Inicio</a>
                    <a href="#2">Experiencia</a>
                    <a href="#3">Proyectos</a>
                    <a href="#4">Habilidades</a>
                </div>
            </nav>
        </header>
    )
}

export { Menu }