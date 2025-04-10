import React, { useContext } from 'react'
import { useEffect, useRef } from 'react'
import styles from './Sections.module.css'
import { CreateContext } from '../Context/CreateContext';

function Sections ({id, children}) {

    const {toggleSectionId, sectionId} = useContext(CreateContext);
    const sectionRef = useRef(null); 
    const rootMarginValue = sectionId < 4 ? '-50% 100px -50% 100px' : '-70% 100px -30% 100px'; // Ejemplo de otro valor

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              toggleSectionId(parseInt(entry.target.id, 10));
            }
          });
        },
        {
          rootMargin: rootMarginValue,
        }
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.disconnect();
        }
      };
    }, [toggleSectionId]); // Agrega toggleSectionId como dependencia 
  

    return (
        <section className={styles.Sections} id={id} ref={sectionRef}>
        {children}
      </section>
    )
}

export { Sections }