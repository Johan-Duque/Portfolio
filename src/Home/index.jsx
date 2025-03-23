import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import Foto from '../imgs/foto-portfolio.jpg'
import styles from './Home.module.css'

function Home () {
    return (
        <Div_Sections>
            <div className={styles.Container_Presentation}>
               <div className={styles.Container_Presentation__img}> 
                    <img src={Foto}  alt="Foto-Presentacion" />
                        </div>
                            <div className={styles.Container_Presentation__div}> 
                                <h1>Johan Duque - Desarrollador Front-End</h1>
                                <p>Soy estudiante de Ingeniería Informática, se usar tecnologías relacionadas con el Front-End como Java Script, HTML, CSS, React y TypeScript. Además, también se usar lenguajes como Python, Java, C y C++.
                                </p>
                                <button>Linkedin</button> 
                                <button>GitHub</button> 
                                <button>Descargar CV</button>
                            </div>
                        </div>
        </Div_Sections>
    )
}

export { Home }