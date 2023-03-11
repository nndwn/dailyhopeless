import React, { Fragment } from "react";
import { Link } from "gatsby";

const Nav = ({data, ul, li}) => (
    <ul className={ul}>
        {data.menu.map(node => (
            <Fragment key={node.name}>
                <li className={li}>
                    <Link to={"#"+`${node.name}`}>{node.name}</Link>
                </li>
            </Fragment>
        ))}
        <li className="currentLine"></li>
    </ul>
)

export default Nav