// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Card from "../components/card"

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
        <div className="flex flex-col justify-start max-w-3xl px-2 py-6 m-auto">
          {edges.map(({ node }) => {
            const { slug } = node
            return (
              <div key={slug} className="px-3 my-3 overflow-hidden text-center">
                <Card card={node} />
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
  ${tw`max-w-5xl min-h-screen px-4 py-24 m-auto mt-12`}

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
          createdAt(formatString: "MMMM YYYY", locale: "es")
          excerpt {
            excerpt
          }
          featuredImg {
            fixed(
              cropFocus: CENTER
              quality: 80
              toFormat: JPG
              width: 420
              height: 300
            ) {
              src
              srcSet
            }
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
