import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Article, HeroContainer, Meta, ArticleText } from "../components/import"

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
          <div className="my-8 post-image">
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

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlog
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={`${post.title}`} />

      <Article>
        <HeroContainer>
          <Hero
            heading={post.title}
            slug={post.slug}
            image={post.featuredImg.fixed}
          />
        </HeroContainer>

        <div className="w-full max-w-2xl m-auto mt-2 article" id={post.slug}>
          <Meta>
            <Tags>
              {post.tags.map((tag, i) => [
                <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
                  {tag}
                  {i < post.tags.length - 1 ? "" : ""}
                </Link>,
              ])}
            </Tags>
          </Meta>
          {documentToReactComponents(
            post.childContentfulBlogArticleRichTextNode.json,
            options
          )}
        </div>
        <PageNav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {prev && (
              <Link
                to={`/blog/${kebabCase(prev.slug)}/`}
                rel="prev"
                className="pr-6 "
              >
                <span className="block">←</span> {prev.title}
              </Link>
            )}
          </div>

          <div style={{ justifySelf: "flex-end" }} className="pl-6 text-right">
            {next && (
              <Link to={`/blog/${kebabCase(next.slug)}/`} rel="next">
                <span className="block">→</span>
                {next.title}
              </Link>
            )}
          </div>
        </PageNav>
      </Article>
    </Layout>
  )
}

export default BlogPostTemplate

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

const Tags = styled.div`
  ${tw`relative z-50 flex flex-wrap justify-start w-full px-0 py-4 font-mono tracking-widest uppercase `}

  a {
    ${tw`inline-block px-3 py-1 mb-1 mr-2 font-semibold text-white bg-blue-500 rounded-full text-md hover:bg-blue-600`}
  }
`

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      tags
      childContentfulBlogArticleRichTextNode {
        json
      }
      featuredImg {
        fixed(width: 1900, height: 550) {
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
