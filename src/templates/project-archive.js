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
      <Seo title="Proyectos" />
      <Helmet>
        <body className="project" />
      </Helmet>
      <div className="relative flex flex-col items-start justify-center w-full pt-32 pb-20 mb-12 text-center text-white bg-red-800 md:pb-64 md:px-6 md:items-center" style={{ minHeight: "70vh" }}>
        <Fade bottom cascade duration={1200}>
          <h1 className="px-4 font-serif text-2xl font-bold text-left md:text-6xl ">Colaboraciones</h1>
        </Fade>
        <Wave/>
      </div>

      <div className="grid gap-6 px-2 mx-auto mb-12 -mt-24 overflow-hidden sm:grid-cols-2 xl:grid-cols-3 max-w-7xl md:-mt-64">
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
      sort: { fields: [createdAt], order: DESC }
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
          createdAt
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
