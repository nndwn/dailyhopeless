
exports.onCreatePage = async({ page, actions}) => {
    const { createRedirect, createPage } = actions
    if (page.path.match(/^\/panel/)) {
        page.matchPath = "/panel/*"
        createPage(page)
    }
    createRedirect({
        fromPath: `/panel/`,
        redirectInBrowser: true,
        toPath: `/`,
        statusCode: 404,
      })
}