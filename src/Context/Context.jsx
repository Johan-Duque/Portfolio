import React, { Children, useEffect, useState  } from "react";
import { CreateContext } from "./CreateContext";
import json_information from "./information.json";

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

function Context ({ children }) {

    // Icons //
    const Technologie_List =  json_information.Technologie_List[0];
    
    const CreateIcons = (name, index) => {
        if (Technologie_List.hasOwnProperty(name)) { // Check if the name exists as a key.
            const [prefix, iconName] = Technologie_List[name];
            let IconComponent = null;
    
            switch (prefix) {
                case 'Fa':
                    IconComponent = FaIcons[`Fa${iconName}`];
                    break;
                case 'Si':
                    IconComponent = SiIcons[`Si${iconName}`];
                    break;
                case 'Bi':
                    IconComponent = BiIcons[`Bi${iconName}`];
                    break;
                default:
                    return null; // Return null if prefix is not recognized.
            }
    
            if (IconComponent) return React.createElement(IconComponent, { key: index});
            return null; // Return null if IconComponent is not found.
        }
        return null; // Return null if the technology name isn't found.
    };

    // LocalStorage //

    const useLocalStorage = (Category, DefaultValue) => {
      const storedValue = localStorage.getItem(Category);
      const initialValue = storedValue !== null ? storedValue : DefaultValue;
    
      const [value, setValue] = useState(initialValue);
    
      useEffect(() => {
        localStorage.setItem(Category, value);
      }, [Category, value]);
    
      return [value, setValue];
    };

    // Toggle Theme //

    const [theme, setTheme] = useLocalStorage('Theme', 'Dark');

    const toggleTheme = () => {
      setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    };

      useEffect(() => {
        if (theme === 'Dark') {
          document.documentElement.style.setProperty('--color-6', '#fff');
          document.documentElement.style.setProperty('--color-5', '#4493F8');
          document.documentElement.style.setProperty('--color-4', '#00abf0');
          document.documentElement.style.setProperty('--color-3', '#627EA2');
          document.documentElement.style.setProperty('--color-2', '#5C6878');
          document.documentElement.style.setProperty('--color-1', '#43474D');
          document.documentElement.style.setProperty('--color-0', '#000515');
          document.documentElement.style.setProperty('--background-color', 'linear-gradient(-45deg, #000, #21232d, var(--color-0))');
          document.documentElement.style.setProperty('--content-color', 'rgb(188, 196, 209)');
        } else {
          document.documentElement.style.setProperty('--color-0', '#fff');
          document.documentElement.style.setProperty('--color-1', '#4493F8');
          document.documentElement.style.setProperty('--color-2', '#598BCD');
          document.documentElement.style.setProperty('--color-3', '#627EA2');
          document.documentElement.style.setProperty('--color-4', '#006dff');
          document.documentElement.style.setProperty('--color-5', '#43474D');
          document.documentElement.style.setProperty('--color-6', '#000515');
          document.documentElement.style.setProperty('--background-color', 'linear-gradient(-45deg, #f9f9f9, #f8f8ff, #e0f2f7)');
          document.documentElement.style.setProperty('--content-color', 'rgb(43, 45, 48)');
        }
      }, [theme]);

    // Toggle Language //
    
    const [language, setlanguage] = useLocalStorage('Language', 'Spanish');
    
      const togglelanguage = () => {
        setlanguage(language === 'Spanish' ? 'English' : 'Spanish');
      };

      // Export JSON // 

      const Data_JSON = language === 'Spanish' ? 
        {
          "Home" : json_information.Spanish.Home,
          "Experience" : json_information.Spanish.Experience,
          "Projects": json_information.Spanish.Projects,
          "Languages": json_information.Spanish.Languages, 
          "Tools": json_information.Spanish.Tools
        } :
        {
          "Home" : json_information.English.Home,
          "Experience" : json_information.English.Experience,
          "Projects": json_information.English.Projects,
          "Languages": json_information.English.Languages, 
          "Tools": json_information.English.Tools
        };  

      // Intersaction // 

       const [sectionId, setSectionId] = useState(1);

       const toggleSectionId = (id) => {
        setSectionId(id);
      };

      // url json // 

      useEffect(() => {
        fetch('https://drive.google.com/uc?export=download&id=1cm-K6rg4RUaVqjc8DTIoUwZxcYsuN5h6')
        .then(response => response.json())
        .then(data => {
          // Aquí puedes trabajar con los datos JSON
          console.log(data);
        })
        .catch(error => {
          console.error('Error al obtener el archivo JSON:', error);
        });
      }, [theme]);      
          
    return (
        <CreateContext.Provider value={{ 
          CreateIcons, 
          toggleTheme, 
          theme, 
          togglelanguage, 
          language, 
          Data_JSON, 
          sectionId, 
          toggleSectionId
          }}>
            {children}
        </CreateContext.Provider>
    );
} 
export { Context }; 




