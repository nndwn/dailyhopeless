import React from "react";
import { Link } from "gatsby";
import TemplateData from "../templateData";

const Logo = ({div, circle, path, h1, data}) => {
    const { title } = TemplateData()
    return (
        <div className={div}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 125.5 125.5">
                <circle cx="62.75" cy="62.75" r="62.75" className={circle} />
                    <path d="M123.83,61.49a5,5,0,0,1,6.39,1.85l0.05,0.09a4.93,4.93,0,0,1-2,7,33,33,0,0,0,0,59.11,4.93,4.93,0,0,1,2,7l-0.05.09a5,5,0,0,1-6.39,1.85A43,43,0,0,1,123.83,61.49ZM79.58,109.8A10.6,10.6,0,1,1,69,120.41,10.6,10.6,0,0,1,79.58,109.8ZM69,80.62A10.6,10.6,0,1,0,79.58,70,10.6,10.6,0,0,0,69,80.62Z" transform="translate(-37.25 -37.25)" className={path} />
            </svg>
            <h1 className={h1}>
                <Link to={"/"+`${data.lang}`}>{title}</Link>
            </h1>
        </div>
    )
}

export default Logo