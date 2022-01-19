// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/card"
import { AwesomeButton } from "react-awesome-button"
import { kebabCase } from "lodash"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulBlog
  const tagHeader = `Hay ${totalCount} entrada${
    totalCount === 1 ? "" : "s"
  } para "${tag}"`
  return (
    <Layout>
      <Seo title="Etiquetas" pathname={`/etiquetas/${kebabCase(tag)}/`} />
      <div className="max-w-5xl min-h-screen px-4 py-24 m-auto mt-12" >
        <h1 className="font-serif text-4xl text-center text-white">{tagHeader}</h1>
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
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlog(
      limit: 2000
      sort: { fields: [createdAt], order: DESC }
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 400
              height: 400
              quality: 90
              formats: JPG
              backgroundColor: "#ffffff"
              jpegProgressive: false
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`
