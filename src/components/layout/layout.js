import React,{useEffect, useState} from "react";
import Css from "../rootCss";
import Header from "./header/header";
import Main from "./content/main";
import Footer from "./footer/footer";


const Layout = ({page, children}) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const handleScroll = () => {
        const scroll = window.scrollY
        setScrollPosition(scroll)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true})
    })
    return(
    <Css>
        <Header data={page} scroll={scrollPosition}/>
        <Main data={page} scroll={scrollPosition}/>
        <Footer data={page}/>
        {children}
    </Css>
)}

export default Layout