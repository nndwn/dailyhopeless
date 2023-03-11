"use strict"

exports.createPages = ({ actions, graphql }) => {

    const { createRedirect } = actions
    createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/en/`,
        conditions: {
          country: [`us`, `gb`],
          language: [`en`]
        }
      })
      createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/id/`,
        conditions: {
          country: [`id`, `in`],
          language: [`id`]
        }
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