import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout";

const Lang = ({children, data}) => {
    return(
        <Layout lang={data.langJson.lang} >
            {children}
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
  langJson(id: {eq: $id}) {
    lang
  }
}
`

export default Lang