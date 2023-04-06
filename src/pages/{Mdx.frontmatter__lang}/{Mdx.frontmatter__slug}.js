import React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/head/seo";
import Header from "../../templates/pxtorem/header";
import { graphql } from "gatsby";
import Main from "../../templates/pxtorem/content/main";
import Footer from "../../templates/pxtorem/footer";

const PxtoRem = ({data}) => {

    return (
        <Layout>
            <style>
                {`
                    body.active {
                        overflow: hidden;
                    }
                    body.active header {
                        margin-right: 1rem;
                       
                    }
                `}
            </style>
            <Header data={data.mdx.frontmatter}/>
            <Main data={data.mdx}/>
            <Footer/>
        </Layout>
    )
}


export const Head = () => (
    <Seo
        desc="test"
        keyword="test"
    />
)

export const query = graphql`
query ($e: String) {
  mdx (id: {eq: $e}){
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      lang
      slug
      title
    }
    id
    excerpt
  }
}`

export default PxtoRem