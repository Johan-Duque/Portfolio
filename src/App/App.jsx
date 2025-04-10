import React, { lazy, Suspense }  from "react";
import { Menu } from "../Menu";
import { Home } from "../Home";
import { Sections } from "../Sections";
import { Loading } from "../Loading";
import { Context } from "../Context/Context";

// Lazys //
const Lazy_Experience = lazy(() => import("../Experience"));
const Lazy_Projects = lazy(() => import("../Projects"));
const Lazy_Technologies = lazy(() => import("../Technologies"));
const Lazy_Certifications = lazy(() => import("../Certifications"));

function App() {
    return (
        <>
            <Context>
                <Menu />
                    <Sections id="1">
                        <Home />
                    </Sections>
              
                    <Suspense fallback={<Loading/>}>    
                        <Sections id="2">        
                            <Lazy_Experience />
                        </Sections>

                        <Sections id="3">      
                            <Lazy_Projects />
                        </Sections>

                        <Sections id="4">      
                            <Lazy_Technologies />
                        </Sections>

                        <Sections id="5">      
                            <Lazy_Certifications />
                        </Sections>
                    </Suspense>
            </Context>
        </>
    );
}

export default App;