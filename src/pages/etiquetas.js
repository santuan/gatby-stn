import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlog.group

  return (
    <Layout>
      <Seo title="Etiquetas" />

      <div className="max-w-5xl min-h-screen px-5 pt-24 mx-auto mt-12">
        <h1 className="mb-12 font-mono text-4xl text-white ">Etiquetas</h1>

        {allTags.map(tag => (
          <Link
            key={tag.fieldValue}
            to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
            className="inline-block px-5 py-2 my-2 mr-2 font-sans text-lg font-bold text-white uppercase bg-blue-700 rounded-full hover:bg-blue-800 hover:border-blue-900 "
          >
            <span className="opacity-75">{tag.fieldValue}</span> ({tag.totalCount})
          </Link>
        ))}
      </div>
    </Layout>
  )
}


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
