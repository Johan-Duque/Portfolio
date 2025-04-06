import React from "react";
import styles from './Projects.module.css'
import { Div_Sections } from '../Sections/Divs_Sections'

// ICONS //
import { Article } from "./Articles";
import { FaCode } from "react-icons/fa6";
import { CreateContext } from "../Context/CreateContext";

function Projects () {

    // JSON // 
    const { Data_JSON, language } = React.useContext( CreateContext ); 
    const Projects_Info = Data_JSON.Projects[0];
    const Projects_Global = Data_JSON.Projects[1];
    
    return (      
      <Div_Sections>
        <div className={styles.test_pc}>
        <div className={styles.Projects__Container}>
        <h2 className={styles.Projects__Title}>{language == 'Spanish' ? 'Proyectos' : 'Projects'}<FaCode/> </h2>
        <div className={styles.test_p}></div>
        {Projects_Info.map((project, index) => {
          return( <Article Title={project.name} Description={project.description} Img={Projects_Global[index].img} Technologies={Projects_Global[index].Technologies} urls={Projects_Global[index].urls} key={index}></Article> )
        })}
        </div>
        </div>
      </Div_Sections>
    )
}

export { Projects }