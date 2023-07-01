import React from "react";
import { bodyArticle } from "./style";


const PrivacyFormat = ({children}) => (
    <section css = {bodyArticle}>
        <article>
            {children}
        </article>
    </section>

)
export default PrivacyFormat;