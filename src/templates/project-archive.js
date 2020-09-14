import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Card from "../components/cardProject"
import { Helmet } from "react-helmet"

const ProjectArchive = ({ data, pageContext, location }) => {
  const projects = data.allContentfulWorks.edges

  return (
    <Layout location={location}>
      <SEO title="Proyectos" />
      <Helmet>
        <body className="project" />
      </Helmet>
      <HeroProjects>
        <Fade bottom cascade duration={1200}>
          <HeroTitle>Proyectos</HeroTitle>
        </Fade>
        <Fade bottom duration={1200} delay={500}>
          <p className="max-w-2xl px-4 my-3 font-sans text-2xl text-left text-red-200 md:text-center">
            Colaboro diseñando y desarrollando experiencias para diversidad de
            espacios.
          </p>
        </Fade>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full mt"
        >
          <path
            fill="#2d3748"
            fill-opacity="1"
            d="M0,128L60,138.7C120,149,240,171,360,181.3C480,192,600,192,720,181.3C840,171,960,149,1080,160C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </HeroProjects>

      <BlogContainer>
        {projects.map(({ node }) => {
          return (
            <Item key={node.slug}>
              <Fade duration={1200} delay={700}>
                <Card card={node} />
              </Fade>
            </Item>
          )
        })}
        <Pager pageContext={pageContext} />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  ${tw`flex flex-wrap justify-center m-auto mb-12 -mt-48 overflow-hidden md:-mt-64`}
  max-width: 1440px;
`

const Item = styled.div`
  ${tw`w-full px-3 my-3 overflow-hidden text-center md:w-1/3 `}
`

const HeroProjects = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-20 mb-12 text-center text-white bg-red-700 md:pb-64 md:px-6 md:items-center`}
  min-height: 600px;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const HeroTitle = styled.h1`
  ${tw`px-4 font-serif text-5xl font-bold text-left `}
`

export default ProjectArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulWorks(
      sort: { fields: [updatedAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          backgroundImage {
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
          updatedAt
          featuredImg {
            fixed(width: 360, height: 200) {
              ...GatsbyContentfulFixed_withWebp
            }
            fluid(maxWidth: 360) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp
            }
          }
          slug
          webUrl
        }
      }
    }
  }
`
