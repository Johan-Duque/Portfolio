import React from "react";
import { Home } from "../Home";
import { Experience } from "../Experience";
import { Projects } from "../Projects";
import { Technologies } from "../Technologies";
import { Sections } from "../Sections";
import { Menu } from "../Menu";
import { Context } from "../Context/Context";
import { Certifications } from "../Certifications";

function App() {
    return (
        <>
            <Context>
                <Menu />
                <Sections id="1">
                    <Home />
                </Sections>
                <Sections id="2">
                    <Experience />
                </Sections>
                <Sections id="3">
                    <Projects />
                </Sections>
                <Sections id="4">
                    <Technologies />
                </Sections>
                <Sections id="5">
                    <Certifications/>
                </Sections>
            </Context>
        </>
    );
}

export default App;