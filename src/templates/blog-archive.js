import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import Wave from "../components/wave"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Card from "../components/card"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

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
          <p className="max-w-3xl px-5 my-3 font-sans text-2xl text-left text-indigo-200 md:text-center">
            Traducciones, recursos y mas allá.
          </p>
        </Fade>
        <Wave/>
      </HeroProjects>
      <BlogContainer className="grid gap-4 lg:grid-cols-2">
        {posts.map(({ node }) => {
          return (
            <Item key={node.slug} className="duration-700 transform hover:-translate-y-3">
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
  ${tw`max-w-6xl px-2 py-6 mx-auto -mt-40 md:-mt-64`}
`

const HeroProjects = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-20 mb-12 text-center text-white bg-indigo-800 md:pb-64 md:px-6 md:items-center`}
  min-height: 500px;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const HeroTitle = styled.h1`
  ${tw`px-5 font-serif text-4xl font-bold text-white `}
`

const Item = styled.div`
  ${tw`px-3 my-3 `}
`

export default BlogArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
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
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
