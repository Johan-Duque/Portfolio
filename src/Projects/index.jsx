import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Projects.module.css'

function Projects () {
    return (
        <Div_Sections>
            <h2> Proyectos </h2>
                <div className={styles.Projects}>
                    <h3>Laboratorio Clinico</h3>
                </div>
        </Div_Sections>        
    )
}

export { Projects }