import React from "react";
import Icons from "../icons";

const Button = ({name, pop, icon, link, iconsize}) => (
    <div className="position-relative d-flex">
        <a href={link} className="bg-yellow p-3 button self-start items-center d-flex pop user-select-none capitalize" >
            <span>{name}</span>
                <Icons 
                    size={iconsize}
                    icon={icon}
                /> 
        </a>
        { pop !== null ? 
        <div id="Nopages" className="position-absolute popleft px-2 py-3 bg-white opacity-0">
            <span>{pop}</span>
        </div>
        : ""
        }
    </div>
)

export default Button