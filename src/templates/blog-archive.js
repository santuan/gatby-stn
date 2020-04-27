import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Card from "../components/card"
import Fade from "react-reveal/Fade"
import Helmet from "react-helmet"

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlog.edges

  return (
    <Layout location={location}>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog" />
      </Helmet>
      <HeroProjects>
        <Fade cascade bottom duration={1200}>
          <HeroTitle>Blog</HeroTitle>
        </Fade>
        <Fade bottom duration={1200} delay={500}>
          <p className="max-w-2xl px-2 my-3 font-mono text-xl text-center text-blue-200">
            Ideas, traducciones, tutoriales y cosas sobre el mundo web.
          </p>
        </Fade>
      </HeroProjects>
      <BlogContainer>
        {posts.map(({ node }) => {
          return (
            <Item key={node.slug}>
              <Fade duration={1500}>
                <Card card={node} />
              </Fade>
            </Item>
          )
        })}
      </BlogContainer>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

const BlogContainer = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl px-2 pt-6 m-auto`}
  min-height: 100vh;
`

const HeroProjects = styled.div`
  ${tw`flex flex-col items-center justify-center w-full pt-24 text-center bg-blue-700`}
  min-height: 400px;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const HeroTitle = styled.h1`
  ${tw`font-mono text-5xl font-bold text-white `}
`

const Item = styled.div`
  ${tw`px-3 my-3 overflow-hidden text-center lg:w-1/3 `}
`

export default BlogArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [title], order: DESC }
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
          tags
          featuredImg {
            fixed(width: 400, height: 150) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
