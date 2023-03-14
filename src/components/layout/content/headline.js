import React, { useState, useEffect } from "react";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const Headline = ({data}) => {
    const h1 = data.headline[0].h1
    const text = data.headline[0].h2.split(' ')
    const last = text.pop()
    const h2 = text.join(' ')
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const scroll = window.scrollY;
        setScrollPosition(scroll);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll,{ passive: true });
    }, [])
    return(
    <section id="mvArea" className={`position-relative d-lg-flex items-lg-center ${scrollPosition ? "resize": ""}`}  style={{overflow:"hidden"}}>
        <div className="mvTxt mx-3 mx-lg-9 color-white position-absolute opacity-1">
            <h2 className="font-custom fs-9 capitalize">{h1}</h2>
            <h3 className="fs-4 fs-lg-8">{h2}<span className="color-yellow"> {last}</span></h3>
        </div>
        <ul className="mvList position-lg-absolute position-relative list-style-none" style={{width:"101%"}}>
            {data.slide.map(node => (
                    <li className="position-absolute top opacity-0 col-12" key={node.alt}>
                        <GatsbyImage
                            image={getImage(node.image)}
                            alt= {node.alt}
                            className="mvImg"
                            loading="eager"
                        />
                    </li>
            ))}
        </ul>
    </section>
)}


export default Headline