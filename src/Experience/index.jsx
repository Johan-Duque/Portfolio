import React from "react";
import { Div_Sections } from '../Sections/Divs_Sections'
import styles from './Experience.module.css'

function Experience () {
    return (
      <Div_Sections>
          <div className={styles.Experience__Container}>
            <h2 className={styles.Experience__Title1}>Experiencia</h2>
               <h3 className={styles.Experience__Title2}>Progrmador / Desarrollador</h3>
                  <h4>Laboratorio Clinico</h4>
                    <p>Desarrollo de un software de un Laboratorio Clínico como proyecto final de programacion, fue un trabajo grupal con otros 2 compañeros donde debíamos usar únicamente Lenguaje C. Usamos otras tecnologías como Git y GitHub para facilitar el desarrollo
                    </p>
                  <h4>trabajo sobre Fotones y Energia cuantica</h4>
                    <p>Trabajo de química, relacionado con la energía cuántica y los fotones. además, de ver la historia de científicos como Max Plank y Albert Einstein
                    </p>

               <h3 className={styles.Experience__Title3}>Laboral - Presencial</h3>
                  <h4>Sellador de Bolsas</h4>
                    <p>Trabajé para la empresa de mi padre como sellador de bolsas plásticas en una empresa dedicada a la
                    producción de materiales plásticos</p>
                  <h4>Dependiente</h4>
                    <p>Trabajé como dependiente de uno de los negocios de mi madre enfocado en la venta de dulces para postres, ayudando también en el apartado del inventario </p>
          </div>
      </Div_Sections>
    )
}

export { Experience }
 