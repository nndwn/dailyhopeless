import React from "react"
import { css } from "@emotion/react";
import { color } from "../rootCss";
import { graphql, useStaticQuery } from "gatsby";

const Menu = ({menu, children, style}) => {
    return(
    <ul css={style}>
        {menu.map(node => (
            <React.Fragment key={node.name}>
                <li>
                    <a href={`#${node.link}`}>{node.name}</a>
                </li>
            </React.Fragment>
        ))}
        {children}
    </ul>
)}

export const Currentline = () => (
    <li className="currentLine" css={css`
        background-color: ${color.yellow};
        bottom: 0;
        height: 0.25rem;
        position: absolute;
        transition: all .2s ease-in;
    `}></li>
) 

export const Datamenu = () => {
    const query = useStaticQuery(graphql`
        query {
            allLang {
                nodes {
                    menu {
                    link
                    name
                    }
                }
            }
        }
    `)
    return query.allLang.nodes
}

export default Menu