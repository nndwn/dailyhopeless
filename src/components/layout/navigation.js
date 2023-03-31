import React from "react";
import { graphql, useStaticQuery, Link} from "gatsby";
import Icons from "./icons";
import { css } from "@emotion/react";
import { color } from "../rootCss";

export const Navigation = ({children, style}) => {
    return(
    <div css={style}>
        <header>
            {children}
        </header>
    </div>
)}

export const ButtonLanguage = ({toggle, set, children,style}) => {

    const show = () => {
        set(!toggle);
      };
    return (
        <div >
            <div onClick={show} tabIndex={0} onKeyDown={show} role='button'>
            <Icons
                icon= "language"
                style={style}
                size= {25}/>
               {children}
            </div>
        </div>
     
    )
}

export const Menulanguage = ({toggle, right}) => {
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
    return (
        <>
            {toggle && (
                <ul css={css`
                    position: absolute;
                    right: ${right};
                    list-style: none;
                    background-color: ${color.white};
                    padding: 1rem 1.25rem;
                    text-align: center;
                    border: 1px solid ${color.dark};
                    font-family: anton;
                    text-transform: uppercase;
                `}>
                    {lang.map(node => (
                        <li key={node.id}><Link to={`/${node.lang}`}>{node.lang}</Link></li>
                    ))}                            
                </ul>
            )}
        </>
    )
}