import React from "react";
import { Footerr, Socialmedia } from "../../components/layout/footer";
import { footerdark } from "./style";

const Footer = () => {
    return (
        <Footerr style={footerdark}>
            <Socialmedia/>
        </Footerr>
    )
}
export default Footer