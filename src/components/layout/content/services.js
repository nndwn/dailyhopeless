import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "./button";
import Icons from "../icons";

const Services = ({data}) => {
    return (
        <section className=" maincontent">
        {data.services.map((node, index) =>{
            let oddevent =  index % 2 === 0 
            return (
            <div className={oddevent ?"bg-grey-20": "" } key={node.title}>
                <div className="content py-8">
                    <div className="mx-lg-9 mx-3 d-flex position-relative py-9 flex-wrap">
                        <div className={`datatext col-lg-5 col-12 d-flex flex-column justify-content-center order-2 ${oddevent ?" order-lg-1 pr-7": " pl-7"}` }>
                            <div className="mb-6">
                                <h1 className="font-custom fs-9 my-3">{node.title}</h1>
                                <p className="truncate color-grey">{node.description}</p>
                            </div>
                            <Button 
                                name={data.textbutton}
                                pop ={data.popbutton}
                                icon = "more"
                                link = "#"
                                iconsize= {16}
                            />
                        </div>
                        <div className={`image-right col-lg-7 col-12 position-relative imagecontent order-1 " ${oddevent ?" order-lg-2": ""}`}>
                            <div className={`position-absolute bg-yellow p-3 ${oddevent ?" icon-right": " icon-left"}`}>
                            <Icons
                                size={40}
                                icon= {node.icon}
                            />
                            </div>
                                <GatsbyImage
                                    image={getImage(node.image)}
                                    alt= {node.alt}
                                    className="imggatsby"
                                    loading="eager"
                                    imgClassName="img"
                                />
                            <p className="position-absolute text color-white fs-2 ">
                            {node.credit}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
   )})}
    </section>
    )
}

export default Services