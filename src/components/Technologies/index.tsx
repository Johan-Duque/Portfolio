import type { ReactNode } from "react";
import { useLanguage } from "../../Hooks";
import styles from "./Technologies.module.css";

import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpringboot} from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { RiNpmjsFill } from "react-icons/ri";

type TechnologyType = [ReactNode, string];

interface TechnologyCategory {
  name: string;
  technologies: TechnologyType[];
  icon: string;
}

function TechnologiesComponent() {
  const { t } = useLanguage();

  const technologyCategories: TechnologyCategory[] = [
    {
      name: 'Front-End',
      technologies: [
        [<FaHtml5 />, "HTML"],
        [<FaCss3Alt />, "CSS"],
        [<BiLogoJavascript />, "JavaScript"],
        [<BiLogoTypescript />, "TypeScript"],
        [<FaReact />, "React"],
      ],
      icon: "🎨",
    },
    {
      name: 'Backend',
      technologies: [
        [<BiLogoPostgresql />, "SQL"],
        [<FaJava />, "Java"],
        [<FaPython />, "Python"],
        [<SiCplusplus />, "C++ / C"],
        [<SiSpringboot />, "Springboot"],
      ],
      icon: "⚙️",
    },
    {
      name: t("languaje") == 'en' ? 'Tools' : 'Herramientas',
      technologies: [
        [<RiNpmjsFill />, "NPM"],
        [<FaGitAlt />, "Git"],
        [<SiVite />, "Vite"],
        [<VscVscode />, "VsCode"],
        [<FaGithub />, "GitHub"],
      ],
      icon: "🛠️",
    },
  ];

  return (
    <section id="technologies" className={styles.technologies}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t("technologies.title")}</h2>

        <div className={styles.categoriesGrid}>
          {technologyCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{category.icon}</span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>

              <div className={styles.technologiesList}>
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className={styles.technologyItem}>
                    <span className={styles.technologyName}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export { TechnologiesComponent };
