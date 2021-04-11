import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import { kebabCase } from "lodash"
import { AwesomeButton } from "react-awesome-button"
import styled from "@emotion/styled"
import { GoLinkExternal } from "react-icons/go"
import SEO from "../components/seo"
import Hero from "../components/heroProject"
import tw from "tailwind.macro"
import FormatText from "../components/serializer"

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulWorks
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={`${post.title}`} />
      <Helmet>
        <body className="project-post" />
      </Helmet>
      <Hero image={post.backgroundImage.fixed} logo={post.logo.fixed} />
      <div className="p-3 mx-auto ">
        <div className="relative z-50 flex items-center justify-center mb-12 -mt-12 text-4xl hover:text-blue-400">
          <p className="hidden text-white">{post.title}</p>
          <AwesomeButton
            action={() => {
              navigate(`/colaboraciones/`)
            }}
            className="mt-5 mr-6"
          >
            volver
          </AwesomeButton>
          <AwesomeButton
            href={post.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
            type="secondary"
          >
            web <GoLinkExternal className="inline-block ml-2" />
          </AwesomeButton>
        </div>

        <div className="max-w-full px-3 font-sans prose prose-xl ">
          <FormatText
            FormatText={post.childContentfulWorksArticleRichTextNode}
          />
        </div>
        <PageNav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {prev && (
              <Link
                to={`/colaboraciones/${kebabCase(prev.slug)}/`}
                rel="prev"
                className="pr-6 "
              >
                <span className="block">←</span> {prev.title}
              </Link>
            )}
          </div>
          <div style={{ justifySelf: "flex-end" }} className="pl-6 text-right">
            {next && (
              <Link to={`/colaboraciones/${kebabCase(next.slug)}/`} rel="next">
                <span className="block">→</span>
                {next.title}
              </Link>
            )}
          </div>
        </PageNav>
      </div>
    </Layout>
  )
}

const PageNav = styled.nav`
  ${tw`flex justify-between w-full px-3 py-6 mt-12 border-t-2 border-gray-600`}

  div {
    ${tw`max-w-xs`}
    transition: all 1s;
    flex: 1;

    &:hover {
      ${tw`px-2`}
    }
  }

  a {
    ${tw`block font-mono text-xl text-white`}
  }
`

export default ProjectPostTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    contentfulWorks(slug: { eq: $slug }) {
      id
      slug
      title
      webUrl
      childContentfulWorksArticleRichTextNode {
        json
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
      backgroundImage {
        fixed(width: 2000, height: 1000) {
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
