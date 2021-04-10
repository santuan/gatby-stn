import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
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
          <p className="max-w-3xl px-5 my-3 font-sans text-2xl text-left text-blue-200 md:text-center">
            Traducciones, recursos y mas allá.
          </p>
        </Fade>
        <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="relative">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  className="text-gray-800 fill-current"
                  fillRule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  className="text-gray-800 fill-current"
                  fillRule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
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
  ${tw`flex flex-col justify-start max-w-3xl px-2 py-6 m-auto -mt-40 md:-mt-32`}
  min-height: 100vh;
`

const HeroProjects = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-20 mb-12 text-center text-white bg-gray-800 md:pb-64 md:px-6 md:items-center`}
  min-height: 400px;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const HeroTitle = styled.h1`
  ${tw`px-5 font-serif text-5xl font-bold text-white `}
`

const Item = styled.div`
  ${tw`px-3 my-3 overflow-hidden text-center `}
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
