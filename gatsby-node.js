"use strict"

exports.createPages = ({ actions, graphql }) => {

    const { createRedirect } = actions
    createRedirect({
        fromPath: `/`,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: `/en/`,
      })
}
// exports.createSchemaCustomization = ({ actions, graphql }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   type Lang implements Node {
//     all: AllLang @link(by: "services")
//   }

//   `
//   createTypes(typeDefs)
// }