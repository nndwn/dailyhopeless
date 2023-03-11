import React from "react";
import TemplateData from "../templateData";

const Seo = ({data, children}) => {
    const {
        title,
        siteUrl,
        color,
    } = TemplateData()
    const meta ={
        title : title,
        desc : data.description,
        image : siteUrl+data.banner.publicURL,
        color : color,
        url: siteUrl,
        keyword : data.keyword,
        lang : data.language
    }
    return (
        <>
            <title>{meta.title}</title>
            {/* standart seo */}
            <meta name="description" content={meta.desc} />
            <meta property="keyword" content={meta.keyword}/>
            <meta name="title" content={meta.title}/>
            <meta name="robots" content="index, follow"/>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/> 
            <meta name="language" content={meta.lang}/>
            <meta name="msapplication-TileColor" content={meta.color}/>
            <meta content={color} name="theme-color"/>
            <meta content={color} name="msapplication-navbutton-color"/>
            {/* og seo */}
            <meta property="og:title" content={meta.title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={meta.desc} />
            <meta property="og:url" content={meta.url}/>
            <meta property="og:image" content={meta.image} />
            {/* twitter seo */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@nndwn" />
        </>
    )
}

export default Seo