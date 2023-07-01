import { css } from "@emotion/react";
import { mq, color } from "../../../components/rootCss";


export const bodyArticle = css`
    article {
        width: 100%;
        padding : 0 2rem;
        div {
            padding-top: 7rem;
        }
        ul {
            padding-left: 3rem;
        }
        h1 {
            font-size: 2rem;
            font-family: anton, sans-serif;
        }
        h2 {
            font-family: anton, sans-serif;
            font-size: 2rem;
        }
        p {
            margin: 1rem 0 2rem 0;
        }
    }
    ${mq[2]}{
        article {
            padding: 0 15rem;
            h1 {
                font-size: 2.5rem;
            }
        }
    }
`