import React from "react";
import styles from './Experience.module.css'
import { Div_Sections } from '../Sections/Divs_Sections'

// ICONS //
import { FaFileCode } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { Experience_Article } from "./Experience_Article";
import { CreateContext } from '../Context/CreateContext'

function Experience () {

    // JSON //
    const { Data_JSON, language } = React.useContext( CreateContext ); 
    const Experiences_Info = Data_JSON.Experience;

    return (
      <Div_Sections> 
          <div className={styles.timeline}>
            <div class={styles.timeline_row}>

              <div class={styles.timeline_column}>
                <h2 class={styles.title}>{language == 'Spanish' ? 'Experiencia Front-End' : 'Front-End Experience'}<FaFileCode/></h2>

                <div class={styles.timeline_box}>

                {Experiences_Info[0].Programming_Experience.map((exp, index) => {
                  return( <Experience_Article Title={exp.Title} Content={exp.Content} key={index}></Experience_Article> )
                })}
                </div>
            </div>

            <div class={styles.timeline_column}>
                <h2 class={styles.title}>{language == 'Spanish' ? 'Experiencia Laboral' : 'Work Experience'} < GrUserWorker /></h2>

                <div class={styles.timeline_box}>


                {Experiences_Info[1].Work_Experience.map((exp, index) => {
                    return( <Experience_Article Title={exp.Title} Content={exp.Content} key={index}></Experience_Article> )
                })}

                </div>
              </div>

            </div>
          </div>

      </Div_Sections>
    )
}

export { Experience }
 