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