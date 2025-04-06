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
    const [Languages_Info, Language_Global] = [Data_JSON.Languages[0], Data_JSON.Languages[1]];
    const [Tools_Info, Tools_Global] = [Data_JSON.Tools[0], Data_JSON.Tools[1]];

    return (
        <Div_Sections>
            <div className={styles.Technologies__Container}>
                <h2 className={styles.Technologies__Title}>{language == 'Spanish' ? 'Habilidades' : 'Skills'}<AiOutlineBulb/> </h2>
                <div className={styles.Technologies__Content}>
                    <div className={styles.Technologies__Content_Languages}>
                        {Languages_Info.map((skill, index) => {
                            return(
                                <Technologi key={index} name={Language_Global[index].name} background_color={Language_Global[index].background_color} width={Language_Global[index].width} color_i={Language_Global[index].color} description={skill.description}/>
                            )
                        })}
                    </div>
                    <div className={styles.Technologies__Content_Tools}>
                    {Tools_Info.map((skill, index) => {
                            return(
                                <Technologi key={index} name={Tools_Global[index].name} background_color={Tools_Global[index].background_color} width={Tools_Global[index].width} color_i={Tools_Global[index].color} description={skill.description}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Div_Sections>
    )
}

export { Technologies }