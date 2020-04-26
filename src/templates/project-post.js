import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import SEO from "../components/seo"
import { Article, Title } from "../components/import"
import Hero from "../components/heroProject"

import tw from "tailwind.macro"

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulWorks
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Proyecto" />

      <Hero image={post.backgroundImage.fluid} logo={post.logo.fixed} />
      <Article css={tw`max-w-6xl min-h-screen`}>
        <Link className="block pt-12 my-3 text-center" to="/proyectos">
          Ver todos los proyectos
        </Link>
        <Title css={tw`flex flex-col items-center justify-between`}>
          {post.title}
          <a
            href={post.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            css={tw`inline-block pb-2 my-3 mb-6 text-xl font-semibold leading-snug truncate`}
          >
            Link al sitio
          </a>
        </Title>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {prev && (
              <Link to={`/proyectos/${kebabCase(prev.slug)}/`} rel="prev">
                ← {prev.title}
              </Link>
            )}
          </div>

          <div style={{ justifySelf: "flex-end" }}>
            {next && (
              <Link to={`/proyectos/${kebabCase(next.slug)}/`} rel="next">
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </Article>
    </Layout>
  )
}

export default ProjectPostTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    contentfulWorks(slug: { eq: $slug }) {
      id
      slug
      title
      webUrl
      logo {
        fixed(width: 400, height: 170) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 500) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      backgroundImage {
        fixed(width: 1900, height: 400) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 1500) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
