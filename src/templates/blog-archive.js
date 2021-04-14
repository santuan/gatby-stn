import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Wave from "../components/wave"
import Card from "../components/card"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlog.edges
  return (
    <Layout location={location}>
      <Seo title="Blog" />
      <Helmet>
        <body className="blog" />
      </Helmet>
      <div className="relative flex flex-col items-start justify-center w-full pt-32 pb-20 mb-12 text-center text-white bg-indigo-800 md:pb-64 md:px-6 md:items-center" style={{ minHeight: "70vh" }}>
        <Fade cascade bottom duration={1200}>
          <h1 className="px-5 font-serif text-4xl font-bold text-white ">Blog</h1>
        </Fade>
        <Fade bottom duration={1200} delay={500}>
          <p className="max-w-3xl px-5 my-3 font-sans text-2xl text-left text-indigo-200 md:text-center">
            Traducciones, recursos y más&hellip;
          </p>
        </Fade>
        <Wave/>
      </div>
      <div className="grid max-w-6xl gap-4 px-2 py-6 mx-auto -mt-40 lg:grid-cols-2 md:-mt-64">
        {posts.map(({ node }) => {
          return (
            <div key={node.slug} className="px-3 my-3 duration-700 transform hover:-translate-y-3">
              <Fade duration={1500}>
                <Card card={node} />
              </Fade>
            </div>
          )
        })}
      </div>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          excerpt {
            excerpt
          }
          createdAt(formatString: "MMMM YYYY", locale: "es")
          tags
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
