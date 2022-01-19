import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Card from "../components/card"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlog.edges
  return (
    <Layout location={location}>
      <Seo title="Blog" pathname={`/blog/`} />
      <Helmet>
        <body className="blog" />
      </Helmet>
      <div
        className="relative flex flex-col items-center justify-center w-full pt-24 pb-20 mb-12 overflow-hidden text-center text-white bg-gray-800 md:px-6 md:items-center"
        style={{ minHeight: "60vh" }}
      >
        <Fade bottom duration={1200} delay={500}>
          <p className="relative z-20 px-5 my-3 font-serif text-lg text-left text-indigo-200 lg:max-w-3xl md:text-2xl md:text-center">
            Traducciones del inglés al castellano.
            <br />
            <span className="font-sans text-base">Historias y recursos desde la perspectiva del diseño y la
            programación&hellip;</span>
          </p>
        </Fade>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed z-0 opacity-10 md:opacity-10 backgroundVideo"
          poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_100,w_1600/v1630030297/stn-renders/rigidbody0001-0180_uz3rd4.jpg"
        >
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1630030297/stn-renders/rigidbody0001-0180_uz3rd4.mp4"
            type="video/mp4"
          />
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1630030297/stn-renders/rigidbody0001-0180_uz3rd4.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1630030297/stn-renders/rigidbody0001-0180_uz3rd4.ogv"
            type="video/ogg"
          />
        </video>
      </div>
      <div className="grid max-w-6xl px-2 py-6 mx-auto -mt-32 gap-9 lg:grid-cols-2 md:-mt-44 ">
        {posts.map(({ node }) => {
          return (
            <Fade key={node.slug} duration={1500}>
              <Card card={node} />
            </Fade>
          )
        })}
      </div>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
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
            fluid(maxWidth: 500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
