import React from "react";
import TemplateData from "../templateData";

const Seo = ({children, title, robots, keyword, desc, lang,language}) => {
    const capitalize = str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    const {
        title : titledefault,
        siteUrl,
        color,
        banner
    } = TemplateData()
    const seo = {
        title: title || titledefault,
        robots:  robots || "index , follow",
        keyword: keyword || null,
        desc: desc || null,
        lang : lang || "en" ,
        language: language || "english"
    }
    return (
        <>
            <Html data={seo.lang}/>
            <title>{capitalize(seo.title)}</title>
            {/* standart seo */}
            <meta name="description" content={seo.desc} />
            <meta property="keyword" content={seo.keyword}/>
            <meta name="title" content={seo.title}/>
            <meta name="robots" content={seo.robots}/>
            <meta name="language" content={seo.language}/>
            <meta name="msapplication-TileColor" content={color}/>
            <meta content={color} name="theme-color"/>
            <meta content={color} name="msapplication-navbutton-color"/>
            {/* og seo */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={seo.desc} />
            <meta property="og:url" content={siteUrl}/>
            <meta property="og:image" content={siteUrl+banner} />
            {/* twitter seo */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@nndwn" />
        </>
    )
}

const Html = ({children, data}) => (
    <html lang={data}>
       {children}
    </html>
)
export default Seo