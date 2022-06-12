import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import IntroThree from "../components/three/intro"

const LabHomePage = () => (
  <Layout>
    <Helmet>
      <body className="fullpage" />
    </Helmet>
    <Seo title="Inicio" />
    <div className="fixed bottom-0 left-0 right-0 z-50 my-3 font-mono text-center text-white animate-pulse">
      próximamente
    </div>
    <IntroThree />
  </Layout>
)

export default LabHomePage
