import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/bgPattern.css"
const IndexPage = () => (
  <Layout>
    <Seo title="Inicio" />
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 shadow-sm bg-pattern">
      <div className="relative z-50 max-w-md px-6 mx-auto mt-12 mb-2 text-center">
        <h2
          className="w-full font-serif text-3xl text-white md:leading-10 md:text-center"
          style={{ opacity: ".8" }}
        >
          Desarrollo y diseño páginas web.
        </h2>
        <Fade>
          <AwesomeButton
            action={() => {
              navigate(`/colaboraciones/`)
            }}
            className="mb-3"
          >
            ver Proyectos
          </AwesomeButton>
        </Fade>
      </div>
    </div>
  </Layout>
)

export default IndexPage
