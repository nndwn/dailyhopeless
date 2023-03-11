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
  <Seo data={data.lang}/>
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
    Headline {
      h1
      h2
    }
    popbutton
    textbutton
    contact {
      button
      image {
        childrenImageSharp {
          gatsbyImageData(formats: JPG, placeholder: BLURRED)
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
        childrenImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: JPG)
        }
      }
    }
    social {
      icon
      link
      name
    }
    Slide {
      alt
      image {
        childrenImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: JPG)
        }
      }
    }
  }
}
`

export default Lang