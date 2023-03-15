import React from "react";

const About = ({data}) => (
    
    <section id={"mainTitleArea" } className="col-12 position-absolute px-3 px-lg-9 opacity-0"> 
        <h3 className="text-center color-lg-dark color-white fs-7 font-custom">{data.headline[0].h1}</h3>
        <p className="text-center mt-lg-5 mt-9 color-grey fs-4 px-lg-9">{data.description}</p>
</section>
)
export default About