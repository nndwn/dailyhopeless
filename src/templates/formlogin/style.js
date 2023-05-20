
import { css } from '@emotion/react'
import { mq, mx, color } from "../../components/rootCss";

export const pagelogin = css`
    input::-webkit-input-placeholder  {
        color: transparent;
    }
    input::-moz-placeholder{
        color: transparent;
    }
    input:-ms-input-placeholder {
        color: transparent;
    }
    input::placeholder{
        color: transparent;
    }
    background-color: ${color.yellow};
    background: radial-gradient(farthest-corner at top, ${color.yellow} 0%, ${color.darkyellow} 75%, ${color.darkyellow} 100%);
    animation: gradient 10s linear infinite;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    section {
      width: 100%;
      flex-basis: 25rem;
      > a {
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
        path {
          fill: ${color.yellow} ;
        }
        h1{
          text-transform: uppercase;
          font-family: anton;
          font-weight: normal;
          font-size: 2rem;
          align-self: center;
          margin-left: 1rem;
        }
      }
      > div {
        p {
          font-size: .8rem;
        }
        p::first-letter {
          text-transform: uppercase;
        }
        position: relative;
        > form {
          padding: 2rem ;
          input {
            width: 100%;
            height: 3rem;
            border-radius: 0.31rem;
          }
          input[type="submit"]{
            border: none;
            background-color: ${color.yellow};
            cursor: pointer;
            font-family: 'anton';
            font-size: 1.3rem;
          }
          > div {
            > div:nth-of-type(2){
              display: flex;
              input[type="text"] ~ span #eye .open-eye{
                  opacity: 1;
              }
              input[type="text"] ~ span #eye .close-eye{
                opacity: 0;
              }
              .eye {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                transition: all 200ms ease-in;
                cursor: pointer;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                .open-eye{
                  opacity: 0;
                }
                .close-eye, .open-eye {
                  position: absolute;
                  transition: all 350ms cubic-bezier(0.51, 0.37, 0.26, 0.87);
                  display: flex;
                }
              }
              input {
                flex: 1 1 auto;
                border-top-right-radius:unset;
                border-bottom-right-radius: unset;
                border-right: none;
              }
              span {
                user-select: none;
                background: ${color.white};
                display: flex;
                align-items: center;
                border-top-right-radius: 0.31rem;
                border-bottom-right-radius: 0.31rem;
                border-left: none;
                padding: 0 0.5rem;
                cursor: pointer;
              }
            }
            > div {
              position: relative;
              margin-bottom: 1rem;
              input, span {
                border: 1px solid ${color.dark40};
              }
              input {
                padding: 1rem 0.75rem;
                font-size: 1rem;
              }
              input:not(:placeholder-shown),input:focus{
                padding-top: 1.625rem;
                padding-bottom: 0.625rem;
              }
              input:not(:placeholder-shown)~label,input:focus~label {
                color: ${color.dark40};
                transform: scale(.70) translateY(-0.5rem) translateX(0.15rem)
              }
              label {
                pointer-events: none;
                position: absolute;
                top: 0;
                left: 0;
                user-select: none;
                text-transform: capitalize;
                padding: 0.875rem 1rem 0 1rem;
                transform-origin: 0 0;
                transition: opacity .1s ease-in-out,transform .1s ease-in-out;
              }
            }
          }
          p {
            margin: 1rem 0;
            a {
              font-weight: bold;
            }
          }
          p {
            &:last-of-type(2){
              text-align: center;
            }
          }
         
        }
        > * {
          margin: 1rem 2rem;
          background: ${color.white};
          border-radius: 0.31rem;
          box-shadow: 1px 1px 2px ${color.dark20};
        }
        > div {
          padding: 1rem;
          > div {
            position: relative;
            svg {
              position: absolute;
            }
            p {
              margin-left:2.5rem;
            }
          }
  
        }
      }
    }
    > div {
      padding: 0 2rem;
      > a {
        border-radius: 0.31rem;
        background: ${color.white};
        display: flex;
        align-items: center;
        padding: 1rem;
      }
      span {
        margin-left: 1rem;
      }
    }
    ${mq[2]}{
            section {
                width: 30rem;
                > div {
                    > * {
                        margin: 0 2rem;
                    }
                    > div {
                        position: absolute;
                        top: 0;
                        left: 27rem;
                        width: 18rem;
                    }
                }
            }
            > div {
                position: absolute;
                bottom: 2rem;
                left: 0;
            }
    }
    ${mx[2]}{
            >div {
                width: 100%;
            }
    }
`

