import React from "react";
import { scrollfollow, linemove } from "./animation";
import { css } from "@emotion/react";
import { color } from "../rootCss";

export const ScrollAnimate = () => {
    return (
        <div css= {css`
            display: flex;
            justify-content: center;
            position: absolute;
            width: 3rem;
            height: 5rem;
            bottom: 0;
            span {
                position: absolute;
                top: 0;
                font-size: 0.70rem;
                animation: ${scrollfollow} 1.4s ease infinite;
            }
            span:after {
                content: "";
                position: absolute;
                display: inline-block;
                width: 1px;
                background-color: ${color.dark};
                left: 1rem;
                animation: ${linemove} .9s ease-in-out infinite;
            }
        `}>
            <span>scroll</span>
        </div>
    )
} 