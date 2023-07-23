import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Header from "../../templates/pxtorem/header";
import { graphql } from "gatsby";
import Main from "../../templates/privacy/content/main";
import Footer from "../../templates/pxtorem/footer";
import { color } from "../../components/rootCss";

const Privacy = ({data}) => {
    const { markdownRemark } = data
    const {frontmatter, html} = markdownRemark
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
                    body.dark {
                        color: ${color.white} !important;
                        background-color: ${color.dark};
                        fill: ${color.white};
                    }
                    @media (min-width: 992px) {
                        body.active {
                            padding-right: 17px;
                        }
                    }
                    .dark ::selection {
                        background-color: #fefefe;
                        color: ${color.dark};
                    
                    }
                    .dark ::-moz-selection {
                        background-color:#fefefe;
                        color: ${color.dark};
                        
                    }
                `}
            </style>
            <Header data={frontmatter}/>
            <Main data={frontmatter} html={html}/>
            <Footer/>
        </Layout>
    )
}
export const Head =({data: {markdownRemark: app}}) => {
    return (
        <Seo
            desc={app.excerpt}
            title={app.frontmatter.title || app.frontmatter.category}
            keyword={app.frontmatter.keyword}
            path={app.frontmatter.slug}
            lang= {"en"}
        />
    )
}

export const query = graphql`
    query ($id: String!) {
        markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
        date(formatString: "MMMM DD, YYYY")
        category
        slug
        title
        head
        }
        excerpt(pruneLength: 125)
    }
}`


export default Privacy;