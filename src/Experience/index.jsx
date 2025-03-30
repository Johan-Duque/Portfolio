import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Experience.module.css'
import { FaFileCode } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineWork } from "react-icons/md";

function Experience () {
    return (
      <Div_Sections> 
        <div className={styles.test_ex}>
        <h2 className={styles.Experience__Title1}>Experiencia <MdOutlineWork/></h2>
          <div className={styles.Experience__Container}>       
              <div className={`${styles.Experience__Container_Divs} ${styles.Experience__Container_Developer}`}>
                <h3 className={styles.Experience__Titles}>Programador / Desarrollador <FaFileCode/> </h3>
                  <h4><li>Laboratorio Clinico</li></h4>
                    <p>Desarrollo de un software de un Laboratorio Clínico como proyecto final de programacion, fue un trabajo grupal con otros 2 compañeros donde debíamos usar únicamente Lenguaje C. Usamos otras tecnologías como Git y GitHub para facilitar el desarrollo. <a href="https://www.linkedin.com/in/johan-omar-duque-pereira-05160733a/overlay/1739400221673/single-media-viewer/?profileId=ACoAAFUp130BvW9Ye3cXgHG7Zn-Kl2IOKIkqr-E" target="blank">Ver mas...</a>
                    </p>
                  <h4><li>Trabajo sobre Fotones y Energia cuantica</li></h4>
                    <p>Trabajo de química, relacionado con la energía cuántica y los fotones. además, de ver la historia de científicos como Max Plank y Albert Einstein. <a href="https://johan-duque.github.io/web-quimica/" target="blank">Ver mas...</a>
                    </p>
              </div>

              <div className={`${styles.Experience__Container_Divs} ${styles.Experience__Container_Employee}`}>
                <h3 className={styles.Experience__Titles}>Laboral / Presencial < GrUserWorker /> </h3>
                  <h4><li>Sellador de Bolsas</li></h4>
                    <p>Trabajé para la empresa de mi padre como sellador de bolsas plásticas en una empresa dedicada a la
                    producción de materiales plásticos. <a href="https://www.instagram.com/mavipa.ca?igsh=MTFqa2ZwNDJkcW95Zw==" target="blank">Ver mas...</a></p>
                  <h4><li>Dependiente</li></h4>
                    <p>Trabajé como dependiente de uno de los negocios de mi madre enfocado en la venta de dulces para postres, ayudando también en el apartado del inventario. <a href="https://www.instagram.com/omka.tumarca?igsh=MXAxa2dybnkzeDFmeQ==" target="blank">Ver mas...</a> </p>
              </div>    
          </div>
        </div>
      </Div_Sections>
    )
}

export { Experience }
 