import React from "react";
import Icons from "./icons";
import { css } from "@emotion/react";

const Darkmode =({style}) => {
    const setdark = () => {
        document.body.classList.toggle("dark")
    }
    return(
        <div tabIndex={0} role="button" className="darkmode" onClick={setdark} onKeyDown={setdark} css={css`
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            transition: all 200ms ease-in;
            overflow: hidden;
            cursor: pointer;
            position: relative;
            .dark & {
                .moon {
                    opacity: 1;
                    transform: rotate(0);
                }
                .sun {
                    opacity: 0;
                    transform: rotate(-90deg);
                }
            }
            > div {
                position: absolute;
                top: 12%;
                left: 12%;
                width: 2rem;
                height: 2rem;
                transition: all 350ms cubic-bezier(0.51, 0.37, 0.26, 0.87);
                transform-origin: 50% 100%;
            }
            .moon{
                transform: rotate(90deg);
                opacity: 0;
            }
            ${style}
        `}>
            <div className="moon">
                <Icons 
                    icon="moon"
                />
            </div>
            <div className="sun">
                <Icons
                    icon="sun"
                />
            </div>
        </div>
    )
}


export default Darkmode