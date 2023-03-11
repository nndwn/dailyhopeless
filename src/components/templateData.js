import { graphql,useStaticQuery } from "gatsby";

const TemplateData = () => {
    const query = useStaticQuery (graphql`
        query {
            site {
                siteMetadata {
                  title
                  siteUrl
                  color
                  location
                  country
                }
              }
        }
    `)
    return query.site.siteMetadata
}

export default TemplateData