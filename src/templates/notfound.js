import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/head/seo"
import { graphql, Link  } from "gatsby"


const Notfound = ({children, data}) => {
  return (
    <Layout>
            {data.lang.notfound}
    </Layout>
    
  )
}
const Body = ({children}) => (
    <body className="bg-dark">
        {children}
    </body>
)
export const Head = () => (
    <>
        <Seo robots="nofollow, noindex"/>
        <Body/>
    </>
)

export const query = graphql`
    query($id: String) {
        lang(id: {eq: $id}){
            notfound
            description
            keyword
        }
    }
`
export default Notfound



