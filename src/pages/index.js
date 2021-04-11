import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/bgPattern.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-800 shadow-sm bg-pattern">
      <div className="relative z-50 max-w-xl px-6 m-auto mt-12 mb-2 text-center">
        <Fade duration={1650}>
          <h2 className="w-full font-sans text-2xl font-light text-white md:text-center md:text-3xl">
            La creatividad más creativa, valga la redundante redundancia, es
            impulsar la creatividad de los demás.
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
  </Layout>
)

export default IndexPage
