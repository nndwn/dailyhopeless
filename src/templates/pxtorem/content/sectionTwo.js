import React from "react";
import { sectionTwo } from "../style";

const TextArtikel = ({data,children}) => {
    return (
        <section css={sectionTwo}>
            <article 
                itemScope
                itemType="http://schema.org/Article"
                >
                <h1 itemProp="headline" >{data.title}</h1>
                <span>Published {data.date}</span>
                {children}
            </article>
        </section>
    )
}

export default TextArtikel
