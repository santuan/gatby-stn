import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlog.group

  return (
    <Layout>
      <SEO title="Etiquetas" />

      <Container>
        <h1 className="font-mono text-4xl">Etiquetas</h1>

        {allTags.map(tag => (
          <Link
            key={tag.fieldValue}
            to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
            className="bg-blue-700 hover:bg-blue-800 hover:border-blue-900"
          >
            <span className="opacity-75">{tag.fieldValue}</span> ({tag.totalCount})
          </Link>
        ))}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`max-w-5xl min-h-screen px-5 pt-24 mx-auto mt-12`}
  h1 {
    ${tw`mb-12 font-mono text-4xl text-white `}
  }
  a {
    ${tw`inline-block px-5 py-2 my-2 mr-2 font-sans text-lg font-bold text-white uppercase rounded-full `}
  }
`

export default TagsPage

export const pageQuery = graphql`
  query {
    allContentfulBlog(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
