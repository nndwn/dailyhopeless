import React from "react";
import { css } from "@emotion/react";
import { color } from "./rootCss";
import Logo from "./logo";
import { menuListAni } from "./animation";
import Data from "./Data";
import { useComponentVisible } from "./button";


export const Outmenu =  ({menu, lang, children}) => {
    const {ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
    const {siteUrl} = Data()
    function burgerAktive(){
        setIsComponentVisible(!isComponentVisible)
    }
    React.useEffect(()=> {
        const liAnimate = document.querySelectorAll("#animate li")
        for (let i = 0; i < liAnimate.length ; i++){
            if (isComponentVisible && true) {
                setTimeout(() => {
                liAnimate[0 + i].classList.add("add");
              }, i * 200)
              liAnimate[i].classList.remove("add")
              document.body.classList.add("active")
             }else {
                document.body.classList.remove("active")
             }
          } 
    },[isComponentVisible])
    return (
        <div ref={ref} 
             tabIndex={0} role="button" 
             onClick={burgerAktive} 
             onKeyDown={burgerAktive}
             css={css `
                display: flex;
                align-items: center;
                cursor: pointer;
             `} >
            <BurgerIcon />
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
                z-index: -1;
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
                        {children}
                        {menu == null ? "" : menu.map((node)=> {
                            return(
                            <React.Fragment key={node.name}>
                                <li >
                                    <a href={`${siteUrl}/${lang}/#${node.link}`}>{node.name}</a>
                                </li>
                            </React.Fragment>
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
        </div>
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
    return (
        <div css={css`
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
        
        .active & {
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
        `}>
            <div></div>
        </div>
    ) 
}
