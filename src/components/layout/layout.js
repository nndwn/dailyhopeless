import React from "react";
import Css from "../rootCss";
import Header from "./header/header";
import Main from "./content/main";


const Layout = ({page, children}) => (
    <Css>
        <Header data={page}/>
        <Main data={page}/>
        {children}
    </Css>
)

export default Layout