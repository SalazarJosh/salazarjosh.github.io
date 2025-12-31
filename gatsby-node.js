const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: File @fileByRelativePath
      featuredimage: File @fileByRelativePath
      full_image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterIntro {
      blurbs: [MarkdownRemarkFrontmatterIntroBlurbs]
    }

    type MarkdownRemarkFrontmatterIntroBlurbs {
      image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterMain {
      image1: MarkdownRemarkFrontmatterMainImage1
      image2: MarkdownRemarkFrontmatterMainImage2
      image3: MarkdownRemarkFrontmatterMainImage3
    }

    type MarkdownRemarkFrontmatterMainImage1 {
      image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterMainImage2 {
      image: File @fileByRelativePath
    }

    type MarkdownRemarkFrontmatterMainImage3 {
      image: File @fileByRelativePath
    }
  `)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
