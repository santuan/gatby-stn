// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { AwesomeButton } from "react-awesome-button"

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
            const { title, slug, tags } = node
            const { excerpt } = node.excerpt
            return (
              <div
                key={slug}
                className="relative p-5 my-3 overflow-hidden text-center rounded-md shadow-2xl from-gray-700 via-gray-900 bg-gradient-to-br"
              >
                <Link
                  to={`/blog/${kebabCase(slug)}/`}
                  className="block font-mono text-2xl text-white"
                >
                  {title}
                </Link>
                <p className="mt-3 mb-6 font-sans text-xl font-semibold leading-snug text-white">
                  {excerpt}
                </p>
                <div className="my-3 ">
                  {tags.map((tag, i) => [
                    <Link
                      to={`/etiquetas/${kebabCase(tag)}/`}
                      key={i}
                      className="px-3 py-1 mr-2 font-mono font-bold text-white uppercase bg-blue-400 rounded-full hover:bg-blue-600"
                    >
                      {tag}
                      {i < tags.length - 1 ? "" : ""}
                    </Link>,
                  ])}
                </div>
              </div>
            )
          })}
        </div>
        <div className="kush-center">
          <AwesomeButton
            action={() => {
              navigate(`/etiquetas/`)
            }}
            className="mt-5"
          >
            ver etiquetas
          </AwesomeButton>
        </div>
      </TagsContainer>
    </Layout>
  )
}

const TagsContainer = styled.div`
  ${tw`max-w-5xl min-h-screen px-4 pt-24 m-auto mt-12`}

  h1 {
    ${tw`font-serif text-4xl text-center text-white`}
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
          excerpt {
            excerpt
          }
        }
      }
    }
  }
`
