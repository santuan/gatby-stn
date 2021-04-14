import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/bgPattern.css"
import IntroThree from "../components/three/intro"
import { Helmet } from "react-helmet"

const ExperimentsHomePage = () => (
  <Layout>
    <Helmet>
      <body className="fullpage" />
    </Helmet>
    <Seo title="Inicio" />
    <IntroThree />
  </Layout>
)

export default ExperimentsHomePage
