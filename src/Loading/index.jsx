import styles from './Loading.module.css'
import React, {useContext} from 'react';
import { CreateContext } from '../Context/CreateContext';

function Loading () {

    const {language} = useContext(CreateContext);

  return (
    <div className={styles.body_loading}>
        <div className={styles.container}>
            <div className={styles.cube}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <div className={styles.loading}>
            <div>
                <span className={styles.Loading__title}>{language == 'Spanish' ? 'Cargando' : 'Loading' } . . .</span>
            </div>
        </div>
    </div>
    </div>
  )
  
}

export { Loading };