import React, { Fragment } from "react";
import { Link } from "gatsby";
import { graphql,useStaticQuery } from "gatsby";
import Logo from "../logo";
import Nav from "../nav";

const Header = ({data}) => {
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
    const lang = query.allLang.nodes
    return(
        <div className="nav container-fluid position-lg-fixed p-0 bg-lg-white z-1000 position-absolute top">
            <header className="mx-lg-9 mx-3 position-relative">
                    <nav className="d-flex items-center py-3">
                        <Logo 
                            data={data}
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
                            <div className="d-flex align-items-center cursor-pointer dropmenu items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"
                                    className="fill-lg-dark fill-white">
                                    <path
                                        d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                                    <path
                                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                                </svg>
                                <span
                                    className="uppercase font-custom self-center fs-4 pl-2  pl-2 pr-3 color-white color-lg-dark">
                                    {data.lang}
                                </span>
                            </div>
                        </div>
                    </nav>
                </header>
                <ul className="lang-menu">
                    {lang.map(node => (
                        <Fragment key={node.id}>
                            <li><Link to={"/"+`${node.lang}`}>{node.lang}</Link></li>
                        </Fragment>
                    ))}                            
                </ul>
            </div>
    )
}

export default Header