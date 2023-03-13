import React from "react";
import Css from "../rootCss";
import Header from "./header/header";
import Main from "./content/main";
import Footer from "./footer/footer";
import Example from "../test";


const Layout = ({page, children}) => (
    <Css>
        <Header data={page}/>
        <Main data={page}/>
        <Footer data={page}/>
        {children}
    </Css>
)

export default Layout