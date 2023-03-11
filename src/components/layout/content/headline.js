import React, { Fragment } from "react";
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const Headline = ({data}) => (
        <section id="mvArea" className="position-relative d-lg-flex items-lg-center">
        <div className="mvTxt mx-3 mx-lg-9 color-white position-absolute opacity-1">
            {data.headline.map(node => {
                const text = node.h2.split(' ')
                const last = text.pop()
                const h2 = text.join(' ')
                return (
                <Fragment key={node.h1}>
                    <h2 className="font-custom fs-9 capitalize">{node.h1}</h2>
                    <h3 className="fs-4 fs-lg-8">{h2}<span className="color-yellow"> {last}</span></h3>
                </Fragment>
                )
            })}
        </div>
        <ul className="mvList position-lg-absolute position-relative list-style-none col-12">
            {data.slide.map(node => (
                <Fragment key={node.alt}>
                    <li className="position-absolute top opacity-0 col-12">
                        <GatsbyImage
                            image={getImage(node.image)}
                            alt= {node.alt}
                            className="mvImg"
                        />
                    </li>
                </Fragment>
            ))}
        </ul>
    </section>
)


export default Headline