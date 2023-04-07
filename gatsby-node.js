"use strict"

exports.createPages = async ({ actions, graphql, reporter }) => {

    const { createRedirect, createPage } = actions
    createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/en/`,
      })
      createRedirect({
        fromPath: `/`,
        redirectInBrowser: true,
        toPath: `/id/`,
        conditions: {
          country: [`id`],
          language: [`id`]
        }
      })
}
