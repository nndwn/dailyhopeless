import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout";
import Seo from "../components/head/seo";

const Lang = ({children, data}) => {
    return(
        <Layout page={data.lang}>
            {children}
        </Layout>
    )
}
export const Head = ({data}) => (
  <>
    <Seo data={data.lang}/>
    <Html data={data.lang}/>
  </>
)

const Html = ({children, data}) => (
  <html lang={data.lang}>
     {children}
  </html>
)

export const query = graphql`
query($id: String) {
  lang(id: {eq: $id}) {
    lang
    language
    description
    keyword
    banner {
      publicURL
    }
    menu {
      name
    }
    headline {
      h1
      h2
    }
    popbutton
    textbutton
    contact {
      button
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 80, 
            placeholder: BLURRED, 
            formats: JPG,
          )
        }
      }
      text
    }
    services {
      alt
      credit
      description
      icon
      title
      image {
        childImageSharp {
          gatsbyImageData(
            quality: 80, 
            placeholder: BLURRED, 
            formats: JPG,
          )
        }
      }
    }
    social {
      icon
      link
      name
    }
    slide {
      alt
      image {
        childImageSharp {
          gatsbyImageData(
            formats: JPG
            quality: 80
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
}
`

export default Lang