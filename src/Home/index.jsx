import React, { useRef, useEffect} from "react"; // Importa useRef y useEffect
import { Div_Sections } from '../Sections/Divs_Sections';
import styles from './Home.module.css';
import { CreateContext } from '../Context/CreateContext'

// Icons //
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

// Presentation //
import Typed from 'typed.js';
import { FaAngleDoubleRight } from "react-icons/fa";


function Home() {

    // JSON //
    const { Data_JSON, language } = React.useContext( CreateContext ); 
    const Home_Info = Data_JSON.Home;

    // Ref Type Effect //
    const el = useRef(null); 

    useEffect(() => {
        if (el.current) { 
            const typed = new Typed(el.current, {
                strings: Home_Info[0].Card[1].Types, 
                typeSpeed: 70,
                loop: true, 
                loopCount: Infinity, 
            });
            return () => {
                typed.destroy();
            };
        }
    }, [language]);

    const data = {
        Img_Back: Home_Info[0].Card[0].Img,
        About_Me: Home_Info[0].Card[0].Title,
        Content_Back: Home_Info[0].Card[0].Content,
        Urls_Back: Home_Info[0].Card[0].Urls,
        Content_Front: Home_Info[0].Card[1].Content,
    }
    
    return (
        <Div_Sections>
            <div className={styles.Container_Presentation}>
                <div className={styles.Container_Presentation__Info}>
                    <div className={styles.Container_Presentation__Info_img}>
                        <img src={data.Img_Back} alt="Foto-Presentacion" />
                        <span>{data.About_Me}<FaAngleDoubleRight/></span>
                    </div>
                    <div className={styles.Container_Presentation__Info_AboutMe}>
                        <h2>{data.About_Me}<FaUserCircle /></h2>
                        <p>{data.Content_Back[0]} <b><em><a href={data.Img_Back[0]} target="blank">{data.Content_Back[1]}</a></em></b>{data.Content_Back[2]} <b><em><a href={data.Urls_Back[1]} target="blank">{data.Content_Back[3]}</a></em></b> {Home_Info[0].Card[0].Content[4]}</p>
                    </div>
                </div>

                <div className={styles.Container_Presentation__div}>
                    <h1>Johan Duque - <b ref={el}> </b> </h1>
                    <div className={styles.Container_Presentation_Decoration}></div>
                    <p>{data.Content_Front[0]} <b><em> {data.Content_Front[1]} </em></b> {data.Content_Front[2]} <b><em>{data.Content_Front[3]}</em></b>
                    </p>
                    <div className={styles.Container_Presentation_Decoration}></div>
                    <div className={styles.Container_Presentation_Buttons}>
                        <button><a href={Home_Info[0].Card[1].Urls[0]} target="blank">Email<MdEmail /></a></button>
                        <button><a href={Home_Info[0].Card[1].Urls[1]} target="blank">Linkedin <FaLinkedin /></a></button>
                        <button><a href={Home_Info[0].Card[1].Urls[2]} target="blank">GitHub <FaGithub /></a></button>
                        <button><a href={Home_Info[0].Card[1].Urls[3]} target="blank">CV <SiReaddotcv /></a></button>
                    </div>
                </div>
            </div>
        </Div_Sections>
    );
}

export { Home };