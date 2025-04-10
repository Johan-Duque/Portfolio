import React, { useContext } from "react";
import { CreateContext } from "../../Context/CreateContext";
import styles from './Technologi.module.css'

function Technologi ({ name, background_color, width, color_i, description}) {
    const { CreateIcons } = useContext(CreateContext);
    const icon = CreateIcons(name); 
    return (
        <div className={styles.Technologi__Container} style={{ backgroundColor: background_color, gridColumn: width, color: color_i}}>
            <div className={styles.Technologi__Container_Front}>
            {icon}
            <h3>{ name }</h3>
            </div>
            <div className={styles.Technologi__Container_Back}>
                <p>{description}</p>
            </div>
        </div>
    );
}

export { Technologi }
