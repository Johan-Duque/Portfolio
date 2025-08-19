import styles from './Loading.module.css'
import { useLanguage } from '../../Hooks';

function Loading () {

 const { t } = useLanguage();

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
                <span className={styles.Loading__title}>{t('language') == 'en' ? 'Loading' : 'Cargando' } . . .</span>
            </div>
        </div>
    </div>
    </div>
  )
  
}

export { Loading };