import React from "react";
import Css from "./rootCss";


const Layout = ({lang, children}) => (
    <Css>
    <h1>{lang}</h1>
        {children}
    </Css>
)

export default Layout