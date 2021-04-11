import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThreeStn from "../components/three/stn"
import "../styles/bgPattern.css"
import MovingIcons from "../animations/moving-icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-800 bg-opacity-50 shadow-sm">
      <div className="relative z-50 max-w-xl px-6 m-auto mt-12 mb-12 text-center">
        <Fade duration={1650}>
          <h2 className="w-full font-serif text-2xl font-light leading-loose text-white md:text-center md:text-3xl">
            Diseñar y desarrollar experiencias para todos los dispositivos y en
            todas sus posibilidades.
          </h2>
          <AwesomeButton
            action={() => {
              navigate(`/colaboraciones/`)
            }}
            className="mt-5"
          >
            ver colaboraciones
          </AwesomeButton>
        </Fade>
      </div>
    </div>
    <ThreeStn />
    <div className="fixed inset-0 z-0 opacity-25">
      <MovingIcons />
    </div>
  </Layout>
)

export default IndexPage
