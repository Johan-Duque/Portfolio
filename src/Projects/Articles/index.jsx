import styles from './Articles.module.css'
import React from 'react';
import { useContext } from 'react';
import { CreateContext } from '../../Context/CreateContext'

// Icons //
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Article ({Title, Description, Img, Technologies}) {

    let array = [], counter = 0;
    const { CreateIcons } = useContext(CreateContext);

    for(let i of Technologies) {
        array.push(CreateIcons(i, counter));
        counter++;
    }

    return(
        <article className={styles.Container__Projects}>
            <div className={styles.Container__Projects_InfoProject}>
                <div className={styles.Container__Projects_divImg}>
                    <img src={Img} alt="" />
                </div>
                <div className={styles.Container__Projects_divContent}>
                 <h3>{Title}</h3>
                    <p>{Description}</p>
                    <ul> { array.map(icon => icon) }
                    </ul>
                </div>
            </div>
            <div className={styles.Container__Projects_LinksProject}>
                    <a href="https://johan-duque.github.io/web-quimica/" target='blank'><FaLink/></a>
                    <a href="https://github.com/Johan-Duque" target='blank'><FaGithub/></a>
            </div>
        </article>
    )
}

export { Article }