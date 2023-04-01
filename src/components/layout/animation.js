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