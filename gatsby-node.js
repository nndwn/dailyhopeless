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

const readingTime = require(`reading-time`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}

const slugify = require(`@sindresorhus/slugify`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/${slugify(node.frontmatter.title)}`
    })
  }
}

const { compileMDXWithCustomOptions } = require(`gatsby-plugin-mdx`)
const { remarkHeadingsPlugin } = require(`./remark-headings-plugin`)

exports.createSchemaCustomization = async ({ getNode, getNodesByType, pathPrefix, reporter, cache, actions, schema, store }) => {
  const { createTypes } = actions

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent)

          if (!fileNode) {
            return null
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          )

          if (!result) {
            return null
          }

          return result.metadata.headings
        }
      }
    }
  })

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ])
}

exports.createSchemaCustomization = ({ actions, schema }) => {
    const {createTypes} = actions
    const typeDefs = [
        "type lang"
    ]
}