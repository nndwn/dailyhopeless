import React from "react";
import Headline from "./headline";
import About from "./about";
import Services from "./services";
import NavMobile from "./navmobile";
import Contact from "./contact";

const Main =({data}) => (
    <main>
        <Headline data={data}/>
        <About data={data}/>
        <NavMobile data={data}/>
        <Services data={data}/>
        <Contact data={data}/>
    </main>
)

export default Main