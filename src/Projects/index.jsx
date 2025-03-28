import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Projects.module.css'
import { Article } from "./Articles";
import ProjectsData from './Info_Projects.json';
import { FaCode } from "react-icons/fa6";

function Projects () {
    
    return (      
      <Div_Sections>
        <h2 className={styles.Projects__Title}>Proyectos <FaCode/> </h2>
        <div className={styles.Projects__Container}>

        {ProjectsData.proyects.map(project => {
            return(
                <Article Title={project.nombre} Description={project.descripcion} Img={project.img} Technologies={project.tecnologías} key={project.id}></Article>
            )
        })}

        </div>
      </Div_Sections>
    )
}

export { Projects }