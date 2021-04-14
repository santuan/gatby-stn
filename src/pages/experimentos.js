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
    <div className="fixed bottom-0 left-0 right-0 z-50 my-3 font-mono text-center text-white animate-pulse">
      En progreso
    </div>
    <IntroThree />
  </Layout>
)

export default ExperimentsHomePage
