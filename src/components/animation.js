import { keyframes } from "@emotion/react";

export const menuListAni = keyframes`
    0% {
        transform: translatex(110%);
        color: transparent;
    }

    50%{
        color: transparent;
        transform: translatex(50%);

    }
    to {
        opacity: white;
        transform: none;
    }
`
export const scrollfollow  = keyframes`
   0% {
        top: 0;
    }
    50% {
        top: 5px;
    }
    to {
        top: 0;
    }
`
export const linemove = keyframes`
    0% {
        height: 0;
        bottom: -12px;
    }

    15% {
        height: 0.75rem;
        bottom: -1rem;
    }

    50% {
        height: 3rem;
        bottom: -4rem;
    }

    85% {
        height: 0.75rem;
        bottom: -5rem;
    }

    to {
        height: 0;
        bottom: -7rem;
    }
`