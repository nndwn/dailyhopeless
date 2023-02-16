import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout";

const Lang = ({children, data}) => {
    return(
        <Layout pagepage={data.langJson.name} >
            {children}
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
  langJson(id: {eq: $id}) {
    name
  }
}
`

export default Lang