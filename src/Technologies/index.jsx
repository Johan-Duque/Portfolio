import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Technologies.module.css'
import Foto from '../imgs/foto-portfolio.jpg'
import json from './Info_Technologi.json'
import { Technologi } from "./Technologi";
import { AiOutlineBulb } from "react-icons/ai";

function Technologies () {
    return (
        <Div_Sections>
            <div className={styles.Technologies__Container}>
                <h2 className={styles.Technologies__Title}>Habilidades <AiOutlineBulb/> </h2>
                <div className={styles.Technologies__Content}>
                    <div className={styles.Technologies__Content_Languages}>
                        {json.Lenguage.map(skill => {
                            return(
                                <Technologi key={skill.id} Name={skill.nombre} background_color={skill.background_color} width={skill.width} color_i={skill.color} description={skill.description}/>
                            )
                        })}
                    </div>
                    <div className={styles.Technologies__Content_Tools}>
                    {json.Tool.map(skill => {
                            return(
                                <Technologi key={skill.id} Name={skill.nombre} background_color={skill.background_color} width={skill.width} color_i={skill.color} description={skill.description}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Div_Sections>
    )
}

export { Technologies }