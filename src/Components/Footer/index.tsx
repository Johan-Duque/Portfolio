import { useLanguage } from '../../Hooks';
import styles from './Footer.module.css';

function FooterComponent() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear}{t('language') == 'en' ? ' Johan Developer. All rights reserved' : ' Johan Developer. Todos los derechos reservados'}</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export { FooterComponent };

