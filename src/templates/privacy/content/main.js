import React from "react";
import PrivacyFormat from "./article";

const Main =({data, html})=> {
    return (
        <>
            <PrivacyFormat>
                <div dangerouslySetInnerHTML={{__html: html}}
                    itemProp="articleBody"
                />
            </PrivacyFormat>
        </>
    )

}
export default Main;
