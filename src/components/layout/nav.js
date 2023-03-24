import React, { Fragment} from "react"
import { css } from "@emotion/react";

const Nav = ({menu, children, style}) => {
    return(
    <ul css={style}>
        {menu.map(node => (
            <Fragment key={node.name}>
                <li>
                    <a href={`#${node.link}`}>{node.name}</a>
                </li>
            </Fragment>
        ))}
        {children}
    </ul>
)}

export const Currentline = ({style}) => (
    <li className="currentLine" style={style} css={css`
        background-color: var(--yellow);
        bottom: 0;
        height: 0.25rem;
        position: absolute;
        transition: all .2s ease-in-out;
        
    `}></li>
) 

export default Nav