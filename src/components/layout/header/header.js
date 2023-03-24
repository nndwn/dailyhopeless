import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql,useStaticQuery } from "gatsby";
import Logo from "../logo";
import Nav, { Currentline } from "../nav";
import Icons from "../icons";
import { css } from "@emotion/react";
import { mq } from "../../rootCss";

const Header = ({data, scroll}) => {
    const query = useStaticQuery(graphql`
        query {
            allLang {
                nodes {
                  lang
                  id
                }
            }
        }
    `)
    const [toggle, setToggle] = useState(false)
    const show = () => {
        setToggle(!toggle);
      };
    const lang = query.allLang.nodes
    return(
        <div className="nav container-fluid position-lg-fixed p-0 bg-lg-white z-1000 position-absolute top">
            <header className="mx-lg-9 mx-3 position-relative">
                    <nav className={`d-flex items-center py-3 ${scroll ? "resize": ""}`}>
                        <Logo 
                            size= {35}
                            style= {css`
                                display: flex;
                                justify-content: flex-start;
                                flex: 1 0 0;
                                align-items: center;
                                circle {
                                    fill: var(--white);
                                }
                                h1 {
                                    margin-left: 1rem;
                                    font-size: 1.5rem;
                                    color: var(--white);
                                }
                                ${mq[2]}{
                                    & circle {
                                        fill:var(--yellow);
                                    }
                                    & h1 {
                                        color:var(--dark);
                                    }
                                }
                            `}
                        />
                        <Nav 
                            menu={data.menu}
                            style={css`
                                display: none;
                                ${mq[2]}{
                                    width: 26.3rem;
                                    font-family: var(--font-custom);
                                    display: block;
                                    text-transform: capitalize;
                                    text-align: center;
                                    font-size: 1.25rem;
                                    position: relative;
                                    li {
                                        margin-right: 5rem;
                                        display: inline-block;
                                    }
                                    li:nth-last-of-type(-n+2) {
                                        margin-right: 0;
                                    }
                                }
                            `}> 
                            <Currentline style={{left: "40px", width: "50px"}}/>
                        </Nav>
                        <div className="d-flex justify-content-end flex-grow-1 flex-basis-0" id="lang">
                            <div className="d-flex align-items-center cursor-pointer dropmenu items-center" onClick={show} tabIndex={0} onKeyDown={show} role='button'>
                                <Icons
                                    icon= "language"
                                    className="fill-lg-dark fill-white"
                                    size= {25}
                                />
                                <span className="uppercase font-custom self-center fs-4 pl-2  pl-2 pr-3 color-white color-lg-dark">
                                    {data.lang}
                                </span>
                            </div>
                        </div>
                    </nav>
                    {toggle && (
                        <ul className="lang-menu">
                            {lang.map(node => (
                                <li key={node.id}><Link to={`/${node.lang}`}>{node.lang}</Link></li>
                            ))}                            
                        </ul>
                    )}
                </header>
            </div>
    )
}

export default Header