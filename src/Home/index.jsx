import React, { useRef, useEffect, useState, useContext} from "react"; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Div_Sections } from '../Sections/Divs_Sections';
import { CreateContext } from '../Context/CreateContext';
import styles from './Home.module.css';

// Icons //
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

// Presentation //
import Typed from 'typed.js';

function Home() {

    // JSON //
    const { Data_JSON, language, sectionId } = useContext( CreateContext ); 
    const Home_Info = Data_JSON.Home[0];
    const Home_Global = Data_JSON.Home[1];

    const [typed_string, setTyped_string] = useState({
        content: Home_Info[0].Card[1].Types,
        loopCount: Infinity,
      });
    
      const el = useRef(null);
      const typedRef = useRef(null); 
    
      useEffect(() => {
        if (sectionId !== 1) {
          setTyped_string({ content: [Home_Info[0].Card[1].Types[2]], loopCount: 1 });
        } else {
          setTyped_string({content: Home_Info[0].Card[1].Types, loopCount: Infinity});
        }
      }, [sectionId, language]);
    
      useEffect(() => {
        if (el.current) {
          if (!typedRef.current) {
            typedRef.current = new Typed(el.current, {
              strings: typed_string.content,
              typeSpeed: 70,
              loop: true,
              loopCount: typed_string.loopCount,
            });
          } else {
            typedRef.current.strings = typed_string.content;
            typedRef.current.loopCount = typed_string.loopCount;
            typedRef.current.reset(); 
          }
    
          return () => {
            if (typedRef.current) {
              typedRef.current.destroy();
              typedRef.current = null;
            }
          };
        }
      }, [typed_string, language]);

    const data = {
        Img_Back: Home_Global.img,
        About_Me: Home_Info[0].Card[0].Title,
        Content_Back: Home_Info[0].Card[0].Content,
        Urls_Back: Home_Global.urls_aboutMe,
        Content_Front: Home_Info[0].Card[1].Content,
    }
    
    return (
        <Div_Sections>
            <div className={styles.Container_Presentation}>
                <div className={styles.Container_Presentation__Info}>
                    <div className={styles.Container_Presentation__Info_img}>
                        <LazyLoadImage src={data.Img_Back} alt="Photo"/>
                        <span>{data.About_Me}<FaAngleDoubleRight/></span>
                    </div>
                    <div className={styles.Container_Presentation__Info_AboutMe}>
                        <h2>{data.About_Me}<FaUserCircle /></h2>
                        <p>{data.Content_Back[0]} <b><em><a href={data.Urls_Back[0]} target="blank">{data.Content_Back[1]}</a></em></b>{data.Content_Back[2]} <b><em><a href={data.Urls_Back[1]} target="blank">{data.Content_Back[3]}</a></em></b> {Home_Info[0].Card[0].Content[4]}</p>
                    </div>
                </div>

                <div className={styles.Container_Presentation__div}>
                    <h1>Johan Duque - <b ref={el}> </b> </h1>
                    <div className={styles.Container_Presentation_Decoration}></div>
                    <p>{data.Content_Front[0]} <b><em> {data.Content_Front[1]} </em></b> {data.Content_Front[2]} <b><em>{data.Content_Front[3]}</em></b>
                    </p>
                    <div className={styles.Container_Presentation_Decoration}></div>
                    <div className={styles.Container_Presentation_Buttons}>
                        <button onClick={() => {
                          language == 'Spanish' ? window.open(Home_Global.urls_presentation[0][0], '_blank') : window.open(Home_Global.urls_presentation[0][1], '_blank')
                        }}>
                          {language == 'Spanish' ? 'Descargar': 'Download'} CV <FaFileDownload />
                        </button>
                          <a href={Home_Global.urls_presentation[1]} target="blank"><FaLinkedin /></a>
                          <a href={Home_Global.urls_presentation[2]} target="blank"><FaGithub /></a>
                          <a href={Home_Global.urls_presentation[3]} target="blank"><MdAttachEmail /></a>
                    </div>
                </div>
            </div>
        </Div_Sections>
    );
}

export { Home };