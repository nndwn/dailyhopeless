import React from "react";
import Converter from "./sectionOne";
import TextArtikel from "./sectionTwo";

const Main = ({data, html}) => {
    return (
        <>
            <Converter/>
            <TextArtikel data={data}>
                <div 
                    dangerouslySetInnerHTML={{ __html: html}}
                    itemProp="articleBody"
                    />
            </TextArtikel>
        </>
    )
}

export default Main