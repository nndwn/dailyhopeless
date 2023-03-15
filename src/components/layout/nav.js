import React, { Fragment} from "react";

const Nav = ({data, ul, li}) => {
    return(
    <ul className={ul}>
        {data.menu.map(node => (
            <Fragment key={node.name}>
                <li className={li}>
                    <a href={`#${node.link}`}>{node.name}</a>
                </li>
            </Fragment>
        ))}
        <li className="currentLine" style={{left: "40px", width: "50px"}}></li>
    </ul>
)}

export default Nav