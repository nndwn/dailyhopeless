import React from 'react'
import { Global, css } from '@emotion/react'

const Css = ({children}) => (
    <>
        <Global styles = {css`
            :root {
                --white: rgb(255, 255, 255);
                --dark: rgb(19, 19, 19);
                --grey: rgba(19, 19, 19, 80%);
                --grey-50: rgba(19, 19, 19, 50%);
                --grey-20: rgba(19, 19, 19, 20%);
                --yellow: rgb(255, 212, 0);
                --red: rgb(255, 0, 50);
                --blue:rgb(255, 0, 50);
                --font-serif: serif;
                --font-sans-serif: poppins,sans-serif;
                --font-custom: anton;
                }
        `}/>
        {children}
    </>
)
export default Css