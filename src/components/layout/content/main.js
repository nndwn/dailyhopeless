import React, {useEffect, useState } from "react";
import Headline from "./headline";
import About from "./about";
import Services from "./services";
import NavMobile from "./navmobile";
import Contact from "./contact";


const Main =({data}) => {
    const [widthscreen, setWidthscreen] = useState(true)
    const width = () => {
        const widthOut =  window.outerWidth
        setWidthscreen(widthOut < 992)
    }
    useEffect (()=>{
        window.addEventListener("resize",width)
    },[])
    return(
    <main>
        <Headline data={data}/>
        <About data={data}/>
        {widthscreen  && (<NavMobile data={data}/>)}
        <Services data={data}/>
        <Contact data={data}/>
    </main>
)}

export default Main