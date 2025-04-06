import { Div_Sections } from "../Sections/Divs_Sections"
import Fotos from '../../public/svg portfolio.png'
import styles from './Certifications.module.css'
import React, {useContext} from "react";
import { CreateContext } from '../Context/CreateContext'
import { GrCertificate } from "react-icons/gr";

function Certifications () {

    // JSON //
    const { Data_JSON, CreateIcons, language } = useContext( CreateContext ); 
    const Certifications_JSON = Data_JSON.Certifications;
    let array_icons = [], counter = 0, counter_elements = 0;
    
    for(let i of Data_JSON.Certifications) {
      if(i.icon) {
        array_icons.push(CreateIcons(i.icon, counter));
        counter++;
      }
      if(i.img) counter_elements++;
    }

    console.log(counter_elements);

    return (
        <Div_Sections>
        
        <h2 className={styles.Certifications__Title}> {language == 'Spanish' ? 'Certificaciones' : 'Certifications'} <GrCertificate/></h2>

    {/* Slider ICONS */}
    <div
        className={styles.slider} // Usa styles.slider
        style={{
          '--width': '100px',
          '--height': '50px',
          '--quantity': `${counter++}`,
        }}
      >
        <div className={styles.list}> {/* Usa styles.list */}
          {array_icons.map((element, index) => (
            <div
              key={index}
              className={`${styles.item} ${styles.item_icons}`} // Usa styles.item
              style={{
                '--position': index + 1
              }}
            >
              {element}
            </div>
          ))}
        </div>
    </div>

    {/* Slider IMGS */}

    <div
        className={styles.slider} // Usa styles.slider
        reverse="true"
        style={{
          '--width': '200px',
          '--height': '200px',
          '--quantity': `${counter_elements}`,
        }}
      >
         <div className={styles.list}> {/* Usa styles.list */}
          {Certifications_JSON.map((element, index) => (
            <div
              key={index}
              className={`${styles.item} ${styles.item_icons}`} // Usa styles.item
              style={{
                '--position': index + 1
              }}
            >
              {element.img && <img src={element.img} alt="" />}
            </div>
          ))}
        </div>
    </div>
        </Div_Sections>
    );
  }

export { Certifications }