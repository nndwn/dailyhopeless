import { css } from "@emotion/react";
import { mq, color } from "../../components/rootCss";

export const sNav = css`
    width: 100%;
    padding: 0;
    position: absolute;
    z-index: 49;
    background-color: ${color.dark};
    header {
        margin: 0 1rem;
        nav {
            display: flex;
            align-items: center;
            padding: 1rem 0;
        }
    }
    ${mq[2]}{
        header {
            margin:0 3rem;
        }
    }
`
export const sNavLogo = css`
    display: flex;
    justify-content: flex-start;
    flex: 1 0 0;
    circle {
        fill: ${color.yellow}
    }
    path {
        fill: ${color.dark}
    }
    h1 {
        margin-left: 1rem;
        font-size:  1.5rem;
        color: ${color.white};
    }
`
export const sNavEnd = css`
    display: flex;
    justify-content: flex-end;
    flex: 1 0 0;
    .darkmode {
        margin-right: 0.5rem
    }
    .language {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        margin-top: 0.375rem;
        cursor: pointer;
    }
    svg {
        fill: ${color.white}
    }
    ${mq[2]} {
        .darkmode {
            margin-right: 1rem;
        }
        .language {
            margin-right: 1.5rem
        }
    }
`