import React, { useContext } from 'react'
import { useEffect, useRef } from 'react'
import styles from './Sections.module.css'
import { CreateContext } from '../Context/CreateContext';

function Sections ({id, children}) {

    const {toggleSectionId} = useContext(CreateContext);
    const sectionRef = useRef(null); 

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
          rootMargin: '-50% 100px -50% 100px',
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