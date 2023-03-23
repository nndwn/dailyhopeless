import React from 'react';
import Layout from "../../components/layout/layout"
import Seo from "../../components/head/seo"
import { graphql} from "gatsby"
import { firstLetter } from "../../components/utils"
import Logo from "../../components/layout/logo"
import { css } from "@emotion/react"

const body = css`
    background-color: var(--dark);
    color: var(--white);
`
const notfound = css`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 0.8rem;
        margin-bottom: 3rem;
    }
`
const Notfound = ({children, data}) => {
  return (
    <Layout>

        <div css={notfound}>
            <div>
                <p dangerouslySetInnerHTML={{__html:firstLetter(data.lang.notfound.text)}} />
                <Logo
                    size={20} 
                    style={css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        circle {
                            fill: var(--white);
                        }
                        h1 {
                            font-size: 1rem;
                            margin-left: 0.5rem;
                        }
                    `}
                />
            </div>
        </div>
    </Layout>
    
  )
}
const Body = ({children}) => {
    return <body css={body}>{children}</body>
}
export const Head = ({data}) => (
    <>
        <Seo 
            robots="nofollow, noindex"
            lang={data.lang.lang}
        />
        <Body/>
    </>
)

export const query = graphql`
    query($id: String) {
        lang(id: {eq: $id}){
            notfound{
                name
                text
            }
            lang
        }
    }
`
export default Notfound



