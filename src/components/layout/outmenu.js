import React, { Fragment, useEffect } from "react";
import { css } from "@emotion/react";
import { color } from "../rootCss";
import Logo from "./logo";
import { menuListAni } from "./animation";
import TemplateData from "../templateData";

export const Outmenu = ({menu, lang, toggle}) => {
    const {siteUrl} = TemplateData()
    useEffect(()=> {
        const liAnimate = document.querySelectorAll("#animate li")
        {for (let i = 0; i < liAnimate.length ; i++){
            if (toggle && true) {
                setTimeout(() => {
                liAnimate[0 + i].classList.add("add");
              }, i * 200)
              liAnimate[i].classList.remove("add") 
             }
          } 
        }
    })
    return (
        <div css={css`
            position: fixed;
            right: 0;
            top:0;
            bottom: 0;
            opacity: 0;
            background-color: ${color.dark};
            width: 16.5rem;
            transform: translateX(100%);
            transition: all 200ms ease-in;
            > div {
                right: 1rem;
                bottom: 1rem;
                top: 6rem;
                display: flex;
                flex-direction: column;
                position: absolute;
                justify-content: space-between;
                left: 0;
                ul {
                    list-style: none;
                    font-family: anton;
                    text-transform: capitalize;
                    color: ${color.white};
                    font-size: 1.5rem;
                    margin-left: 1rem;
                }
            }
            body.active & {
                opacity: 1;
                transform: none;
                li {
                    opacity: 0
                }
                .add {
                    opacity: 1;
                    animation: ${menuListAni} 300ms ease-in;
                }

            }
        `}>
            <div>
                <ul id = "animate">
                    {menu.map((node)=> {
                        return(
                        <Fragment key={node.name}>
                            <li >
                                <a href={`${siteUrl}/${lang}/#${node.link}`}>{node.name}</a>
                            </li>
                        </Fragment>
                    )})}
                </ul>
                <Logo
                    size={27}
                    style={css`
                        margin-left: 1rem;
                        display: flex;
                        align-items: center;
                        svg {
                            circle {
                                fill: ${color.white}
                            }
                            path {
                                fill: ${color.dark}
                            }
                            
                        }
                        h1 {
                            margin-left: 0.5rem;
                            font-size: 1.25rem;
                            color: ${color.white};
                        }
                    `}
                />
            </div>
        </div>
    )
}

export const BurgerIcon = ({set, toggle}) => {
    const burger = css`
        border-radius: 1.5px;
        height: 0.125rem;
        width: 1.5rem;
        background-color: ${color.white};
        position: absolute;
        transition: all 200ms ease-in;
    `
    const burgerAktive = () => {
        if (toggle && true) {
            set(false)
            document.body.classList.remove("active")
        }else {
            set(true)
            document.body.classList.add("active")
        }
        
    } 
    return (
        <div tabIndex={0} role="button" onClick={burgerAktive} onKeyDown={burgerAktive} css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
            > div {
                width: 1.5rem;
                position: relative;
                > div {
                    ${burger}
                    &::before {
                        content: "";
                        bottom: 0.5rem;
                        ${burger}
                    }
                    &::after {
                        content: "";
                        top: 0.5rem;
                        ${burger}
                    }
                }
            }
            .active & {
                > div {
                    > div {
                        background-color: transparent;
                        :: before {
                            bottom: 0 ;
                            transform: rotate(45deg);

                        }
                        ::after {
                            top: 0 ;
                            transform: rotate(-45deg);
                        }
                    }
                }
            }
        `}>
            <div>
                <div></div>
            </div>
        </div>
    ) 
}
