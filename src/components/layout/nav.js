import React, { Fragment } from "react";

const Nav = ({data, ul, li}) => (
    <ul className={ul}>
        {data.menu.map(node => (
            <Fragment key={node.name}>
                <li className={li}>
                    <a href={`#${node.name}`}>{node.name}</a>
                </li>
            </Fragment>
        ))}
        <li className="currentLine"></li>
    </ul>
)

export default Nav