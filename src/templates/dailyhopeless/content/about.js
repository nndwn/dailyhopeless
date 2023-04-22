import React from "react";
import { about } from "../style";

const About = ({data, scroll}) => (
    <section id="mainTitleArea" className={ scroll ? "show":"" } css={about}> 
        <h3>{data.headline[0].h1}</h3>
        <p>{data.description}</p>
</section>
)
export default About