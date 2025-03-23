import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Experience.module.css'
import { FaFileCode } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";

function Experience () {
    return (
      <Div_Sections> 
          <div className={styles.Experience__Container}>
            <h2 className={styles.Experience__Title1}>Experiencia</h2>
              <div className={`${styles.Experience__Container_Divs} ${styles.Experience__Container_Developer}`}>
                <h3 className={styles.Experience__Titles}>Programador / Desarrollador <FaFileCode/> </h3>
                  <h4><li>Laboratorio Clinico</li></h4>
                    <p>Desarrollo de un software de un Laboratorio Clínico como proyecto final de programacion, fue un trabajo grupal con otros 2 compañeros donde debíamos usar únicamente Lenguaje C. Usamos otras tecnologías como Git y GitHub para facilitar el desarrollo
                    </p>
                  <h4><li>Trabajo sobre Fotones y Energia cuantica</li></h4>
                    <p>Trabajo de química, relacionado con la energía cuántica y los fotones. además, de ver la historia de científicos como Max Plank y Albert Einstein
                    </p>
              </div>

              <div className={`${styles.Experience__Container_Divs} ${styles.Experience__Container_Employee}`}>
                <h3 className={styles.Experience__Titles}>Laboral / Presencial < GrUserWorker /> </h3>
                  <h4><li>Sellador de Bolsas</li></h4>
                    <p>Trabajé para la empresa de mi padre como sellador de bolsas plásticas en una empresa dedicada a la
                    producción de materiales plásticos</p>
                  <h4><li>Dependiente</li></h4>
                    <p>Trabajé como dependiente de uno de los negocios de mi madre enfocado en la venta de dulces para postres, ayudando también en el apartado del inventario </p>
              </div>    
          </div>
      </Div_Sections>
    )
}

export { Experience }
 