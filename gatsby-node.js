/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require("lodash")
const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const workPost = path.resolve(`./src/templates/project-post.js`)
    const tagTemplate = path.resolve(`src/templates/tags-template.js`)

    resolve(
      graphql(
        `
          {
            allContentfulBlog(sort: {order: DESC, fields: createdAt}) {
              edges {
                node {
                  title
                  slug
                  tags
                }
              }
            }
            allContentfulWorks(sort: {order: DESC, fields: createdAt}) {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        paginate({
          createPage,
          items: result.data.allContentfulBlog.edges,
          itemsPerPage: 12,
          pathPrefix: "/blog",
          component: path.resolve("src/templates/blog-archive.js"),
        })
        paginate({
          createPage,
          items: result.data.allContentfulWorks.edges,
          itemsPerPage: 12,
          pathPrefix: "/colaboraciones",
          component: path.resolve("src/templates/project-archive.js"),
        })

        const posts = result.data.allContentfulBlog.edges
        const works = result.data.allContentfulWorks.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
        })

        works.forEach((work, index) => {
          createPage({
            path: `/colaboraciones/${work.node.slug}/`,
            component: workPost,
            context: {
              slug: work.node.slug,
              prev: index === 0 ? null : works[index - 1].node,
              next: index === works.length - 1 ? null : works[index + 1].node,
            },
          })
        })

        // create Tags pages
        // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, "node.tags")) {
            tags = tags.concat(edge.node.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)
        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/etiquetas/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}
