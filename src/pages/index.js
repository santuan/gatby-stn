import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/bgPattern.css"
import IntroThree from "../components/three/intro"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <body className="fullpage" />
    </Helmet>
    <Seo title="Inicio" />
    <IntroThree />
    <div className="flex flex-col items-center justify-end min-h-screen text-center bg-gray-900 bg-opacity-50 shadow-sm">
      <div className="relative z-50 max-w-6xl px-6 mx-auto mt-12 mb-2 text-center">
        <Fade>
          <div className="hidden sm:block">
          <AwesomeButton
            action={() => {
              navigate(`/colaboraciones/`)
            }}
            className="mb-3"
          >
            ver colaboraciones
          </AwesomeButton>
          </div>
        </Fade>
        <h2
          className="w-full font-sans text-base font-light text-white md:leading-10 md:text-center md:text-xl"
          style={{ opacity: ".8" }}
        >
          Diseñar y desarrollar experiencias para todos los dispositivos y en
          todas sus posibilidades.
        </h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
