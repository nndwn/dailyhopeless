import React from "react";
import { css } from "@emotion/react";
import { color } from "../rootCss";

export const Outmenu = ({data}) => {
    return (
        <div></div>
    )
}

export const BurgerIcon = () => {
    const burger = css`
        border-radius: 1.5px;
        height: 0.125rem;
        width: 1.5rem;
        background-color: ${color.white};
        position: absolute;
        transition: all 200ms ease-in;
    `
    const burgerAktive = () => {
        document.body.classList.toggle("active")
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
