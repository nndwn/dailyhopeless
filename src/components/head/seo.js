import React from "react";
import TemplateData from "../templateData";

const Seo = ({data, children}) => {
    const {
        title,
        siteUrl,
        color,
    } = TemplateData()
    return (
        <>
            <title>{title}</title>
            {/* standart seo */}
            <meta name="description" content={data.description} />
            <meta property="keyword" content={data.keyword}/>
            <meta name="title" content={title}/>
            <meta name="robots" content="index, follow"/>
            <meta name="language" content={data.language}/>
            <meta name="msapplication-TileColor" content={color}/>
            <meta content={color} name="theme-color"/>
            <meta content={color} name="msapplication-navbutton-color"/>
            {/* og seo */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={siteUrl}/>
            <meta property="og:image" content={siteUrl+data.banner.publicURL} />
            {/* twitter seo */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@nndwn" />
        </>
    )
}

export default Seo