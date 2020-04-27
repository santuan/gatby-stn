import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import styled from "@emotion/styled"
import { GoLinkExternal } from "react-icons/go"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import Hero from "../components/heroProject"
import Helmet from "react-helmet"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  Article,
  Title,
  HeroContainer,
  Meta,
  ArticleText,
} from "../components/import"
import tw from "tailwind.macro"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => (
  <ArticleText className="text-white">{children}</ArticleText>
)
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: embedded => (
      <Fade>
        <div className="my-8" dangerouslySetInnerHTML={{ __html: embedded }} />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
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
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          className="font-bold border-b border-blue-500 hover:bg-blue-700 hover:text-white"
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
        <Title css={tw`flex flex-col items-center justify-between`}>
          <h1 className="hidden text-white">{post.title}</h1>

          <a
            href={post.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            css={tw`inline-block px-8 py-2 my-6 text-lg font-bold text-white bg-blue-700 border-b-4 border-blue-800 rounded hover:bg-blue-800 hover:border-blue-900`}
          >
            Acceder al proyecto <GoLinkExternal className="inline-block ml-2" />
          </a>
        </Title>
        <ArticleText>
          <div className="max-w-xl px-3 m-auto text-white">
            {documentToReactComponents(
              post.childContentfulWorksArticleRichTextNode.json,
              options
            )}
          </div>
          <PageNav>
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
          </PageNav>
          <Link
            className="block max-w-xl m-auto my-12 font-mono font-bold text-center transition-all duration-200 bg-blue-700 hover:bg-blue-800"
            to="/proyectos/"
          >
            <span className="block py-3 text-white">
              Ver todos los proyectos
            </span>
          </Link>
        </ArticleText>
      </Article>
    </Layout>
  )
}

const PageNav = styled.nav`
  ${tw`flex justify-between w-full px-0 py-12`}

  a {
    ${tw`text-xl text-white hover:underline`}
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
