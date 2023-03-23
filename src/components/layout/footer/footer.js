import React from "react";
import Logo from "../logo";
import Icons from "../icons";
import TemplateData from "../../templateData";
import { css } from "@emotion/react";

const Footer = ({data}) => {
    const {
        title,
        location,
        country,
        author
    } = TemplateData()
    const year =  new Date().getFullYear()
    return(
        <footer className="mt-9">
            <div className="d-flex justify-content-center flex-column items-center">
                <Logo
                    link={data.lang}
                    size={35}
                    style={css`
                        display: flex;
                        background-color:var(--yellow);
                        padding: 0.5rem 1rem;
                        margin-bottom: 2.5rem;
                        circle {
                            fill: var(--dark);
                        }
                        path {
                            fill: var(--yellow);
                        }
                        h1 {
                            font-size: 1.5rem;
                            margin-left: 1rem;
                        }
                    `}
                />
                <ul className="list-style-none d-flex my-4">
                    {
                        data.social.map(node => (
                            <li key={node.name} className="mx-2">
                                <a href={node.link} aria-label={node.name}>
                                    <Icons 
                                        icon={node.name}
                                        size={30}
                                    />
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <footer className="col-12  px-3">
                    <div className="d-flex justify-content-center items-center footer py-3 flex-column flex-lg-row ">
                        <div className="d-flex items-center">
                            <Icons 
                                icon="copyright"
                                size={12}
                            />
                            <span className="capitalize">{year}. {title}. {location}, {country}. </span>
                        </div>
                        <div className="d-flex items-center">
                            <span className="d-block d-lg-inline"> {data.footer} </span>
                            <Icons 
                                icon="heart"
                                size={12}
                                className="mx-1"
                            />
                            <span> {author} </span>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
)}
export default Footer