import React, {useContext, useEffect} from "react";
import { Div_Sections } from "../Sections/Divs_Sections"
import { CreateContext } from '../Context/CreateContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Certifications.module.css'

// Icons //

import { FaEye } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

function Certifications () {

    // JSON //
    const { Data_JSON, language, sectionId} = useContext( CreateContext ); 
    const Certifications_JSON = Data_JSON.Certifications;
    let counter = 0;
    
    for(let i of Data_JSON.Certifications) {
      if(i.img) counter++;
    }

    useEffect(() => {
      sectionId == 5 ? 
      document.documentElement.style.setProperty('--animation-certifications', 'continue') : 
      document.documentElement.style.setProperty('--animation-certifications', 'paused');
    }, [sectionId])

    return (
        <Div_Sections>
        <h2 className={styles.Certifications__Title}> {language == 'Spanish' ? 'Certificaciones' : 'Certifications'} <GrCertificate/></h2>

<div
  className={styles.slider} 
  reverse="true"
  style={{
    '--width': '300px',
    '--height': '250px',  
    '--quantity': `${counter++}`, 
  }}
>
  <div className={styles.list}> 
    {Certifications_JSON.map((element, index) => (
      element.img && (
        <div
          key={index}
          className={`${styles.item} ${styles.item_imgs}`} 
          style={{ '--position': index + 1 }}
        >

          <LazyLoadImage
            alt={element.name}
            src={element.img} 
            afterLoad={(img) => {
             img.style.zIndex = '2 !important';
            }}
          />
            <a href={element.url} target="blank"><FaEye/></a>
            
        </div>
      )
    ))}
  </div>
</div>

        </Div_Sections>
    );
  }

export default Certifications;