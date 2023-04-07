import { css } from "@emotion/react";
import { mq, mx, color } from "../../components/rootCss";
import { startHeader } from "./animate";

// header
export const sNav = css`
    width: 100%;
    padding: 0;
    position: absolute;
    z-index: 49;
    header {
        margin: 0 1rem;
        position: relative;
        nav {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            .language {
                display: flex;
                justify-content: flex-end;
                flex: 1 0 0;
                > div {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;
                ::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    border-top: 3px solid ${color.white};
                    border-right: 3px solid transparent;
                    border-left: 3px solid transparent;
                }
                span {
                    text-transform: uppercase;
                    font-family: anton;
                    text-align: center;
                    font-size: 1.25rem;
                    padding: 0 1rem 0 0.5rem;
                    color: ${color.white}; 
                    user-select: none;
                }
                svg {
                    fill: ${color.white};
                }
            }
            ul {
                    top: 4.4rem;
                    position: absolute;
                    right: 0;
                    list-style: none;
                    background-color: ${color.white};
                    padding: 1rem 1.25rem;
                    text-align: center;
                    border: 1px solid ${color.dark};
                    font-family: anton;
                    text-transform: uppercase;
                }
        }
        }
    }
    ${mq[2]}{
        background-color: ${color.white};
        position: fixed;
        animation: ${startHeader} 2.5s;
        box-shadow: 0 1px 0 0 ${color.dark20};
        opacity: .95;
        header {
            margin: 0 3rem;
            nav {
                .language {
                    & > div {
                    ::after {
                        border-top: 3px solid ${color.dark};
                    }
                    span {
                        color: ${color.dark};
                    }
                    svg {
                        fill: ${color.dark};
                    }
                    }
                }
            }
        }
    }
    ${mx[2]}{
        nav.resize {
            display: none;
        }
    }
`
export const sNavLogo = css`
    display: flex;
    justify-content: flex-start;
    flex: 1 0 0;
    align-items: center;
    circle {
        fill: ${color.white};
    }
    h1 {
        margin-left: 1rem;
        font-size: 1.5rem;
        color: ${color.white};
    }
    ${mq[2]}{
        & circle {
            fill:${color.yellow};
        }
        & h1 {
            color:${color.dark};
        }
    }

`
export const sNavMenu = css`
    display: none;
    ${mq[2]}{
        width: 26.3rem;
        font-family: anton;
        display: block;
        text-transform: capitalize;
        text-align: center;
        font-size: 1.25rem;
        position: relative;
        li {
            list-style: none;
            margin-right: 5rem;
            display: inline-block;
        }
        li:nth-last-of-type(-n+2) {
            margin-right: 0;
        }
    }
`


export const footer = css`
    > div {
        > div {
            display: flex;
            background-color: ${color.yellow};
            padding: 0.5rem 1rem;
            margin-bottom: 2.5rem;
                circle {
                    fill: ${color.dark};
                }
                path {
                    fill: ${color.yellow};
                }
                h1 {
                    font-size: 1.5rem;
                    margin-left: 1rem;
                }
        }
    }
`