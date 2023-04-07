import React from "react";
import { Footerr, Socialmedia } from "../../components/layout/footer";
import Logo from "../../components/layout/logo";
import { footer } from "./style";

const Footer = () => {
    return(
        <Footerr style={footer}>
            <Logo
                size={35}
            />
            <Socialmedia/>
        </Footerr>
)}
export default Footer