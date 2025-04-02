import React from "react";
import styles from './Technologies.module.css'
import { Div_Sections } from '../Sections/Divs_Sections'

// ICONS //
import { Technologi } from "./Technologi";
import { AiOutlineBulb } from "react-icons/ai";
import { CreateContext } from "../Context/CreateContext";

function Technologies () {

    // JSON // 
    const { Data_JSON, language } = React.useContext( CreateContext ); 
    const Languages_Info = Data_JSON.Languages;
    const Tools_Info = Data_JSON.Tools;

    return (
        <Div_Sections>
            <div className={styles.Technologies__Container}>
                <h2 className={styles.Technologies__Title}>{language == 'Spanish' ? 'Habilidades' : 'Skills'}<AiOutlineBulb/> </h2>
                <div className={styles.Technologies__Content}>
                    <div className={styles.Technologies__Content_Languages}>
                        {Languages_Info.map(skill => {
                            return(
                                <Technologi key={skill.id} Name={skill.nombre} background_color={skill.background_color} width={skill.width} color_i={skill.color} description={skill.description}/>
                            )
                        })}
                    </div>
                    <div className={styles.Technologies__Content_Tools}>
                    {Tools_Info.map(skill => {
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