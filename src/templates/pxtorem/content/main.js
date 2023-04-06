import React from "react";
import Converter from "./sectionOne";
import TextArtikel from "./sectionTwo";

const Main = ({data}) => {
    return (
        <>
            <Converter/>
            <TextArtikel data={data}/>
        </>
    )
}

export default Main