import { useLanguage } from "../../Hooks";
import styles from "./Hero.module.css";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              {t("home.title")} <span className={styles.name}>Johan</span>
            </h1>
            <h2 className={styles.subtitle}>{t("home.subtitle")}</h2>
            <p className={styles.description}>{t("home.description")}</p>

            <div className={styles.containerButtons}>
              <button onClick={scrollToAbout} className={styles.ctaButton}>
                {t("languaje") == "en" ? "Get to know me" : "Conóceme"}
              </button>

              <a
                href={
                  t("languaje") == "en"
                    ? "https://docs.google.com/document/d/14fZXEZoCCXrdMKUc7acDuAE51R37ATjG/edit"
                    : "https://docs.google.com/document/d/17u_4RzUgfRf-UocXM7h4UoN2zKnYDcHQ/edit"
                }
                target="_blank"
                className={styles.ctaButton}
              >
                CV <FaDownload></FaDownload>
              </a>
            </div>
          </div>

          <div className={styles.visualContent}>
            <div className={styles.avatar}>
              <div className={styles.avatarCircle}>
                <FaReact className={styles.reactIcon} />
              </div>
            </div>
            <div className={styles.floatingElements}>
              <div
                className={styles.element}
                style={{ "--start-rotation": "0deg" } as React.CSSProperties}
              >
                <div className={styles.iconWrapper1}>
                  <BiLogoTypescript />
                </div>
              </div>
              <div
                className={styles.element}
                style={{ "--start-rotation": "90deg" } as React.CSSProperties}
              >
                <div className={styles.iconWrapper2}>
                  <FaNodeJs />
                </div>
              </div>
              <div
                className={styles.element}
                style={{ "--start-rotation": "180deg" } as React.CSSProperties}
              >
                <div className={styles.iconWrapper3}>
                  <FaCss3 />
                </div>
              </div>
              <div
                className={styles.element}
                style={{ "--start-rotation": "270deg" } as React.CSSProperties}
              >
                <div className={styles.iconWrapper4}>
                  <div>
                    <FaHtml5 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
        
      </div>
    </section>
  );
}

export { Hero };
