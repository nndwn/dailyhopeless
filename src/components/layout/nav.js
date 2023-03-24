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

export const Currentline = () => (
    <li className="currentLine" css={css`
        background-color: var(--yellow);
        bottom: 0;
        height: 0.25rem;
        position: absolute;
        transition: all .2s ease-in;
    `}></li>
) 

export default Nav