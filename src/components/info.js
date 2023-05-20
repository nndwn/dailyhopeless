import React from "react";
import Icons from "./icons";

const Info = ({text}) => (
    <div>
        <div>
            <Icons
                icon={"info"}
                size={25}
            />
            <p dangerouslySetInnerHTML={{__html: text}}/>
        </div>
    </div>
)
export default Info