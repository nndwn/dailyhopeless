"use strict"

exports.createPages = async ({ actions, graphql }) => {

    const { createRedirect, createPage } = actions
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
      createPage({
        path: "/px-to-rem-converter",
        component: require.resolve("./src/app/px-to-rem-converter.js"),
        context: {},
        defer: true,
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