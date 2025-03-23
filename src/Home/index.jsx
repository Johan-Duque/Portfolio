import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import Foto from '../imgs/foto-portfolio.jpg'
import styles from './Home.module.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

function Home () {
    return (
        <Div_Sections>
            <div className={styles.Container_Presentation}>
               <div className={styles.Container_Presentation__img}> 
                    <img src={Foto}  alt="Foto-Presentacion" />
                        </div>
                            <div className={styles.Container_Presentation__div}>
                                <h1>Johan Duque - <b> Desarrollador Front-End</b> </h1> 
                                <div className={styles.Container_Presentation_Decoration}></div> 
                                <p>Soy estudiante de Ingeniería Informática, se usar tecnologías relacionadas con el Front-End como <b><em> Java Script, HTML, CSS, React y TypeScript </em></b>. Además, también se usar lenguajes mas orientados al Backend como <b><em>Python, Java, C y C++</em></b>.
                                </p>
                                <div className={styles.Container_Presentation_Decoration}></div> 
                                <button><a href="https://www.linkedin.com/in/johan-omar-duque-pereira-05160733a/" target="blank">Linkedin <FaLinkedin/></a></button> 
                                <button><a href="https://github.com/Johan-Duque" target="blank">GitHub <FaGithub/></a></button> 
                                <button><a href="https://www.linkedin.com/posts/johan-omar-duque-pereira-05160733a_cv-curriculum-johan-duque-activity-7295604852770971648-ylg-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFUp130BvW9Ye3cXgHG7Zn-Kl2IOKIkqr-E" target="blank">CV <SiReaddotcv/></a></button> 
                            </div>
                        </div>
        </Div_Sections>
    )
}

export { Home }