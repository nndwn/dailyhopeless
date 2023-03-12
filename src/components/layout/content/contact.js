import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TemplateData from "../../templateData";
import Button from "./button";

const Contact = ({data}) => {
    const contact = data.contact[0]
    const email = TemplateData().email
    return (
        <section className="position-relative top-0 left-0 right-0 py-9" id="contact">
            <div className="mx-lg-9 mx-3">
                <div className="d-flex justify-content-center py-9 flex-column flex-lg-row items-center">
                    <p className="color-white fs-5 col-lg-4 text-center text-lg-start py-9 px-4">
                        {contact.text}
                    </p>
                    <Button
                        name={contact.button}
                        link={`mailto:${email}`}
                        iconsize={25}
                    />
                </div>
                <div className="image">
                    <GatsbyImage 
                        image={getImage(contact.image)}
                        alt={contact.alt}
                        className="imggatsby"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact