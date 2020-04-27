// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulBlog
  const tagHeader = `Hay ${totalCount} entrada${
    totalCount === 1 ? "" : "s"
  } para "${tag}"`
  return (
    <Layout>
      <SEO title="Tags" />

      <TagsContainer>
        <h1>{tagHeader}</h1>
        <div>
          {edges.map(({ node }) => {
            const { title, slug } = node

            return (
              <div
                key={slug}
                css={tw`pb-2 my-3 mb-6 text-4xl font-semibold leading-snug text-blue-500 `}
              >
                <Link
                  to={`/blog/${kebabCase(slug)}/`}
                  className="block px-1 py-2 font-mono text-2xl border-b-2 border-white hover:bg-blue-800"
                >
                  {title}
                </Link>
              </div>
            )
          })}
        </div>
        <Link
          to="/etiquetas"
          css={tw`inline-block px-5 py-2 my-6 text-lg font-bold text-white bg-blue-700 border-b-4 border-blue-800 rounded hover:bg-blue-800 hover:border-blue-900 `}
        >
          Ver todas las etiquetas
        </Link>
      </TagsContainer>
    </Layout>
  )
}

const TagsContainer = styled.div`
  ${tw`max-w-6xl min-h-screen px-3 pt-24 m-auto`}

  a {
    ${tw`px-3 text-white`}
    transition: all .8s;
  }

  h1 {
    ${tw`font-mono text-4xl text-white`}
  }
`

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlog(
      limit: 2000
      sort: { fields: [id], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          tags
        }
      }
    }
  }
`
