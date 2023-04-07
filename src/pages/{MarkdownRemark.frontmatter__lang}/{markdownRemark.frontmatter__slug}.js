import React from "react";
import Layout from "../../components/layout/layout";
import Seo from "../../components/head/seo";
import Header from "../../templates/pxtorem/header";
import { graphql } from "gatsby";
import Main from "../../templates/pxtorem/content/main";
import Footer from "../../templates/pxtorem/footer";

const PxtoRem = ({data}) => {
    const { markdownRemark } = data 
    const { frontmatter, html } = markdownRemark
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
            <Header data={frontmatter}/>
            <Main data={frontmatter} html={html}/>
            <Footer/>
        </Layout>
    )
}


export const Head = ({data : {markdownRemark: app}}) => {
    return(
    <Seo
        desc={app.excerpt}
        title={app.frontmatter.head}
        keyword="pixel, rem, converter, generator, px to rem, rem to px"
        path={app.frontmatter.slug}
        lang={app.frontmatter.lang}
    />
)}

export const query = graphql`
query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      lang
      slug
      title
      head
    }
    excerpt
  }
}`

export default PxtoRem