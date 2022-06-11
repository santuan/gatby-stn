// import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const FlickityPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="project" />
      </Helmet>
      <Seo
        title={`Dall·E`}
        description={`Imágenes > OpenAI > Dall-E 2`}
        image="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1653960256/santuan/DALL_E_2022-05-27_22.39.14_unlacv.png"
      />
      Flickity
    </Layout>
  )
}

export default FlickityPage
