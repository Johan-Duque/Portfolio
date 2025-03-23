import React from "react";
import styles from './Div_Sections.module.css'

function Div_Sections ({children}) {
    return (
        <div className={styles.Div_Sections}>
            {children}
        </div>
    )
}

export { Div_Sections }