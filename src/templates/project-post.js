import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import { kebabCase } from "lodash"
import { AwesomeButton } from "react-awesome-button"

import "./post.css"
import styled from "@emotion/styled"
import { GoLinkExternal } from "react-icons/go"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import Hero from "../components/heroProject"
import { Helmet } from "react-helmet"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Article, ArticleText } from "../components/import"
import tw from "tailwind.macro"
import "../components/Aws.css"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => (
  <ArticleText className="text-white">{children}</ArticleText>
)
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div className="my-8" dangerouslySetInnerHTML={{ __html: embedded }} />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      }
      return (
        <Fade>
          <div className="post-image">
            <img
              className="w-full"
              alt={node.data.target.fields.title["es-AR"]}
              src={node.data.target.fields.file["es-AR"].url}
            />
          </div>
        </Fade>
      )
    },
    //[INLINES.ENTRY_HYPERLINK]: node => {
    //  you html code goes here
    //  return (
    //    <Link className="flex flex-col items-start justify-start flex-1 px-6 py-4 ">
    //     hola
    //    </Link>
    //  )
    //},
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold hover:text-blue-900"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulWorks
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Proyecto" />
      <Helmet>
        <body className="project-post" />
      </Helmet>
      <Hero image={post.backgroundImage.fixed} logo={post.logo.fixed} />
      <Article css={tw`max-w-6xl min-h-screen`}>
        <Title
          css={tw`relative z-50 flex items-center justify-center mb-12 -mt-12`}
        >
          <p className="hidden text-white">{post.title}</p>
          <AwesomeButton
            action={() => {
              navigate(`/proyectos/`)
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
        </Title>
        <ArticleText>
          <div className="max-w-xl px-3 m-auto text-white article">
            {documentToReactComponents(
              post.childContentfulWorksArticleRichTextNode.json,
              options
            )}
          </div>

          <PageNav style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {prev && (
                <Link
                  to={`/proyectos/${kebabCase(prev.slug)}/`}
                  rel="prev"
                  className="pr-6 "
                >
                  <span className="block">←</span> {prev.title}
                </Link>
              )}
            </div>

            <div
              style={{ justifySelf: "flex-end" }}
              className="pl-6 text-right"
            >
              {next && (
                <Link to={`/proyectos/${kebabCase(next.slug)}/`} rel="next">
                  <span className="block">→</span>
                  {next.title}
                </Link>
              )}
            </div>
          </PageNav>
        </ArticleText>
      </Article>
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
    ${tw`block text-xl text-white`}
  }
`

export const Title = styled.div`
  ${tw`text-4xl hover:text-blue-400`}
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
        fixed(width: 1900, height: 1000) {
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
