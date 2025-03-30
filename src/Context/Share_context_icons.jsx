import React, { Children } from "react";
import { context_icons } from "./context_icons";

import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

function Share_context_icons ({ children }) {

    const Technologie_List = {
        JavaScript: ['Fa', 'Js'],
        HTML: ['Fa', 'Html5'],
        CSS: ['Fa', 'Css3'],
        React: ['Fa', 'React'],
        TypeScript: ['Si', 'Typescript'],
        Git: ['Fa', 'GitAlt'],
        GitHub: ['Fa', 'Github'],
        Java: ['Fa', 'Java'],
        "C / C++": ['Fa', 'Copyright'],
        Python: ['Fa', 'Python'],
        VisualStudio: ['Bi', 'LogoVisualStudio'],
        SQL: ['Fa', "Database"],
        Vite: ['Si', "Vite"]
    };
    
    const CreateIcons = (name) => {
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
    
            if (IconComponent) return React.createElement(IconComponent);
            return null; // Return null if IconComponent is not found.
        }
        return null; // Return null if the technology name isn't found.
    };

    return (
        <context_icons.Provider value={{ CreateIcons }}>
            {children}
        </context_icons.Provider>
    );
}

export { Share_context_icons };




