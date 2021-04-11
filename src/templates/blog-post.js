import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Hero from "../components/hero"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Article, HeroContainer, Meta } from "../components/import"
import FormatText from "../components/serializer"


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

        <div className="w-full max-w-2xl m-auto -mt-20 article" id={post.slug}>
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
          <div className="max-w-full px-3 font-sans prose prose-xl ">
            <FormatText
              FormatText={post.childContentfulBlogArticleRichTextNode}
            />
          </div>
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
  ${tw`flex justify-between w-full px-6 py-6 mt-12 font-mono border-t-2 border-gray-600 `}

  div {
    ${tw`max-w-xs`}
    transition: all 1s;
    flex: 1;

    &:hover {
      ${tw`px-2`}
    }
  }

  a {
    ${tw`block text-base text-white`}
  }
`

const Tags = styled.div`
  ${tw`relative z-50 flex flex-wrap justify-center w-full px-0 py-4 mt-12 font-mono tracking-widest uppercase `}

  a {
    ${tw`inline-block px-3 py-1 mb-1 mr-2 font-semibold text-white bg-indigo-500 rounded-full text-md hover:bg-indigo-600`}
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
