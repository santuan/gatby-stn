import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import Seo from "../components/seo"
import Wave from "../components/wave"
import Fade from "react-reveal/Fade"
import Card from "../components/cardProject"
import { Helmet } from "react-helmet"

const ProjectArchive = ({ data, pageContext, location }) => {
  const projects = data.allContentfulWorks.edges

  return (
    <Layout location={location}>
      <Seo title="Colaboraciones" />
      <Helmet>
        <body className="project" />
      </Helmet>
      <div className="relative flex flex-col items-start justify-center w-full pt-24 pb-20 mb-12 text-center text-white bg-red-800 md:pb-64 md:px-6 md:items-center" style={{ minHeight: "70vh" }}>
        <Fade bottom cascade duration={1200}>
          <h1 className="px-4 font-serif text-4xl font-bold text-left ">Colaboraciones</h1>
        </Fade>
        <Fade bottom duration={1200} delay={500}>
          <p className="max-w-2xl px-4 my-3 font-sans text-2xl text-left text-red-200 md:text-center">
          La creatividad más creativa, valga la redundante redundancia, es
            impulsar la creatividad de los demás.
          </p>
        </Fade>
        <Wave/>
      </div>
      <div className="grid gap-6 px-2 mx-auto mb-12 -mt-48 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 max-w-7xl md:-mt-72">
        {projects.map(({ node }) => {
          return (
            <div key={node.slug} className="w-full overflow-hidde">
              <Fade duration={1200} delay={700}>
                <Card card={node} />
              </Fade>
            </div>
          )
        })}
        <Pager pageContext={pageContext} />
      </div>
    </Layout>
  )
}

export default ProjectArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulWorks(
      sort: { fields: [updatedAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          backgroundImage {
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
          updatedAt
          featuredImg {
            fixed(width: 500, height: 500) {
              ...GatsbyContentfulFixed_withWebp
            }
            fluid(maxWidth: 360) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
          logo {
            fixed(width: 320, height: 170) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            fluid(maxWidth: 500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          slug
          webUrl
        }
      }
    }
  }
`
