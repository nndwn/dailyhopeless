import React from "react";
import { Footerr, Socialmedia } from "../../components/footer";
import { footerdark } from "./style";
import Data from "../../components/Data";

const Footer = () => {
    return (

        <Footerr style={footerdark} data={Data().primary}>
            <Socialmedia data={Data().primary.socialmedia}/>
        </Footerr>
    )
}
export default Footer