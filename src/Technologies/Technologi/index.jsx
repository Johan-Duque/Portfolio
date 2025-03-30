import React from "react";
import styles from './Technologi.module.css'

import { useContext } from "react";
import { context_icons } from "../../Context/context_icons";

function Technologi ({ Name, background_color, width, color_i, description}) {
    const { CreateIcons } = useContext(context_icons);
    const icon = CreateIcons(Name); 
    return (
        <div className={styles.Technologi__Container} style={{ backgroundColor: background_color, gridColumn: width, color: color_i}}>
            <div className={styles.Technologi__Container_Front}>
            {icon}
            <h3>{ Name }</h3>
            </div>
            <div className={styles.Technologi__Container_Back}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export { Technologi }

/*

, {
        "id": 9,
        "nombre": "SQL",
        "background_color": "#07234b",
        "color": "#fff",
        "description": "Aprendí un poco de SQL en un curso de YouTube, en donde los fundamentes de las bases de datos"
      }

*/