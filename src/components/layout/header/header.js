import React, { useState } from "react";
import { Link } from "gatsby";
import { graphql,useStaticQuery } from "gatsby";
import Logo from "../logo";
import Nav from "../nav";
import Icons from "../icons";

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
                            link={data.lang}
                            div = "d-flex justify-content-start flex-grow-1 flex-basis-0"
                            circle= "fill-lg-yellow fill-white"
                            path = "fill-dark"
                            h1= "pl-3 uppercase font-custom fs-5 color-white color-lg-dark"
                        />
                        <Nav 
                            data={data}
                            ul="navigationPC navigation capitalize font-custom d-lg-block fs-4 capitalize d-none position-relative text-center list-style-none"
                            li="d-inline-block"
                        /> 
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