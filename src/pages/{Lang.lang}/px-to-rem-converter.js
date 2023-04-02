import React, { useEffect, useState } from "react";
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
            <Header data={data.lang}/>
            <Main/>
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
query($id: String) {
  lang(id: {eq: $id}) {
    menu {
      name
      link
    }
    lang
  }
}`

export default PxtoRem