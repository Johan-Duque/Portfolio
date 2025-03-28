import styles from './Articles.module.css'

// Icons //
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

function Article ({Title, Description, Img, Technologies}) {

    return(
        <article className={styles.Container__Projects}>
            <div className={styles.Container__Projects_InfoProject}>
                <div className={styles.Container__Projects_divImg}>
                    <img src={Img} alt="" />
                </div>
                <div className={styles.Container__Projects_divContent}>
                 <h3>{Title}</h3>
                    <p>{Description}</p>
                    <ul>
                        {
                        Technologies.map(Technologi => {
                            let array = [];
                                if (Technologi === 'HTML')array.push(<FaHtml5 color='#ff7300'/>);
                                if (Technologi === 'CSS') array.push(<FaCss3Alt color='#0022ff'/>);
                                if (Technologi === 'JS') array.push(<SiJavascript color='#fbff00'/>);
                                if (Technologi === 'C') array.push(<FaCopyright color='#0088ff'/>);
                                if (Technologi === 'GIT') array.push(<FaGitAlt color='#ff0000'/>);
                                if (Technologi === 'GITHUB') array.push(<FaGithub color='var(--color-6)'/>);
                                if (Technologi === 'REACT') array.push(<FaReact color='#00949f'/>);
                                if (Technologi === 'VITE') array.push(<SiVite color='#b314b6'/>);
                            return array; // Para manejar el caso en que no coincida con ninguna opción
                         }) 
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.Container__Projects_LinksProject}>
                <div className={styles.LinksProject__Link}>
                    <a href="https://johan-duque.github.io/web-quimica/" target='blank'><FaLink/></a>
                </div>
                <div className={styles.LinksProject__GitHub}>
                    <a href="https://github.com/Johan-Duque" target='blank'><FaGithub/></a>
                </div>
            </div>
        </article>
    )
}

export { Article }