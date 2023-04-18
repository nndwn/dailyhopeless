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
        transition: all 200ms ease-in;
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
    z-index: 49;
    .darkmode {
        margin-right: 0.5rem
    }
    .language {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        margin-top: 0.375rem;
        cursor: pointer;
        ul {
            top: 4.5rem;
            position: absolute;
            right: 4rem;
            list-style: none;
            background-color: ${color.white};
            padding: 1rem 1.25rem;
            text-align: center;
            border: 1px solid ${color.dark};
            font-family: anton;
            text-transform: uppercase;
        }
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
export const sectionOne = css`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { 
         -webkit-appearance: none; 
        margin: 0; 
        }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
        margin: 0;
        }
    .dark & .contain{
        p {
            color: ${color.white};
            input {
                background-color: transparent;
            }
            svg {
                fill: ${color.white}
            }
        }
    }
    .contain {
        width: 100%;
        margin: 0 3rem;
        h1 {
            text-align: center;
            font-family: anton, sans-serif;
            text-transform: uppercase;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .reverse {
            flex-direction: column-reverse;
        }
        > div {
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            div:nth-of-type(2) {
                align-items: center;
                cursor: pointer;
            }
            > div {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-bottom: 1rem;
            }
            .input {
                span, input {
                    border: 1px solid ${color.dark}
                }
                span {
                    background-color: ${color.white};
                    display: flex;
                    align-items: center;
                    border-left: none;
                    font-family: anton, sans-serif;
                    text-transform: uppercase;
                    padding: 0 1rem;
                    font-size: 2rem;
                    border-top-right-radius: 0.31rem;
                    border-bottom-right-radius: 0.31rem;
                    color: ${color.dark}
                }
                input {
                    flex: 1 1 auto;
                    height: 4rem;
                    border-right: none;
                    border-top-left-radius: 0.31rem;
                    border-bottom-left-radius: 0.31rem;
                    font-size: 2rem;
                    width: 100%;
                    padding: 1rem; 
                }
            }
        }
        p {
        text-align: center; 
        font-size: 0.81rem;
        align-items: center;
        margin-top: 2rem;
        color: ${color.dark80};
        input {
            -webkit-appearance: none;
            border:none;
            width: 1.5rem;
            color: inherit;
        }
        svg {
            margin-right: 0.5rem;
            fill : ${color.dark50};
        }

    }
    }

    ${mq[2]} {
        .contain {
            margin: 0 14rem;
            h1 {
                margin-bottom: 3rem;
            }
            p {
                margin-top: 3rem;
            }
            .reverse {
                flex-direction: row-reverse;
            }
            >div {
               div:nth-of-type(1),div:nth-of-type(3){
                width: 41.66666667%;
               }
               div:nth-of-type(2) {
                width: 8.33333333%;
               }
            }
        }
    }
`

export const sectionTwo = css`
    article {
        width: 100%;
        padding: 0 2rem;
        margin: 8rem 0;
        h1 {
            font-size: 2rem;
            font-family: anton,sans-serif;
        }
        > span {
            font-size: 0.81rem;
            color: ${color.dark80}
        }
        >div {
            p {
                margin: 1rem 0 2rem 0;
            }
            h2 {
                font-family: anton, sans-serif;
                font-size: 2rem;
            }
            pre {
                list-style: none;
                margin: 0 0 2rem 2rem;
            }
        }
    }
    .dark & {
        article{
            >span {
                color: ${color.white}
            }
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
export const followdark = css`
    .dark & {
        background-color: ${color.white}
    }
`
export const footerdark = css`
    .dark & {
        > div {
            footer {
                > div {
                    box-shadow: 0 -1px 0 0 ${color.white};
                }
            }
        }
    }
`