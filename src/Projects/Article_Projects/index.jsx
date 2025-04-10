import styles from './Article_Projects.module.css'
import React, {useState} from 'react';
import { useContext } from 'react';
import { CreateContext } from '../../Context/CreateContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Icons //
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Article_Projects ({Title, Description, Img, Technologies, urls}) {

    const [disabled, setDisabled] = useState(true);
    let array = [], counter = 0;
    const { CreateIcons } = useContext(CreateContext);

    for(let i of Technologies) {
        array.push(CreateIcons(i, counter));
        counter++;
    }

    const toggleDisabled = () => {
        setTimeout(() => {
            setDisabled(!disabled);
        }, 700);
    }

    return(
        <article className={styles.Container__Projects} onMouseOver={toggleDisabled}>
            <div className={styles.Container__Projects_InfoProject}>
                <div className={styles.Container__Projects_divImg}>
                    <LazyLoadImage src={Img}/>
                </div>
                <div className={styles.Container__Projects_divContent}>
                 <h3>{Title}</h3>
                    <p>{Description}</p>
                    <ul> { array.map(icon => icon) }
                    </ul>
                </div>
            </div>
            <div className={styles.Container__Projects_LinksProject}>
                    <button disabled={disabled} onClick={() => window.open(urls[0], '_blank')}><FaLink/></button>
                    <button disabled={disabled} onClick={() => window.open(urls[1], '_blank')}><FaGithub/></button>
            </div>
        </article>
    )
}

export { Article_Projects }