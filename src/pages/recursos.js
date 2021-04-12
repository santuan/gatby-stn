import React from "react"
import { Helmet } from "react-helmet"
import { GoLinkExternal } from "react-icons/go"
import { AwesomeButton } from "react-awesome-button"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SVGLogo from "../assets/cooparaje.svg"
import BackgroundSlider from "../components/backgroundSlider"
import MovingIcons from "../animations/moving-icons"

const RecursosPage = () => (
  <Layout>
    <Seo title="Recursos" />
    <Helmet>
      <body className="recursos" />
    </Helmet>
    <div className="z-20 flex flex-col items-center justify-center w-full min-h-screen text-center">
      <div className="relative z-50 flex flex-col items-center justify-center w-full px-0 py-4 m-auto my-0">
        <Fade duration={1750} delay={250}>
          <SVGLogo className="w-32 duration-1000 ease-in-out transform -rotate-90 hover:rotate-0 hover:-translate-y-3" />
        </Fade>
        <Fade bottom>
          <h2 className="mt-3 font-serif text-4xl font-bold text-center text-yellow-400">
            Recursos Libres & Gratuitos
          </h2>
        </Fade>
        <Fade bottom>
          <p className="max-w-lg mt-3 font-sans text-2xl text-center text-gray-100">
            Repositorio interactivo de herramientas web.
          </p>
        </Fade>
        <Fade duration={1750} delay={250}>
          <AwesomeButton
            href="https://www.cooparaje.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
            type="secondary"
          >
            ir al Cooparaje <GoLinkExternal className="inline-block ml-2" />
          </AwesomeButton>
        </Fade>
      </div>
    </div>
    <BackgroundSlider />
    <div className="fixed inset-0 z-0 opacity-25">
      <MovingIcons />
    </div>
  </Layout>
)

export default RecursosPage
