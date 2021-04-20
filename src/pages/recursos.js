import React from "react"
import { Helmet } from "react-helmet"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SVGLogo from "../assets/cooparaje.svg"
// import BackgroundSlider from "../components/backgroundSlider"
import MovingIcons from "../animations/moving-icons"
import algoliasearch from "algoliasearch/lite"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
import PostPreview from "../components/algoliaPostPreview"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)

const RecursosPage = () => (
  <Layout>
    <Seo title="Recursos" />
    <Helmet>
      <body className="blog" />
    </Helmet>
    <div className="z-20 flex flex-col items-center justify-center w-full min-h-screen text-center">
      <div className="relative z-50 flex flex-col items-start justify-center w-full px-2 py-4 mx-auto mt-24 md:items-center ">
        <Fade duration={1750} delay={250}>
          <SVGLogo className="hidden w-8 duration-700 ease-in-out transform -rotate-90 md:block md:w-20 hover:rotate-0 hover:-translate-y-3" />
        </Fade>
        <Fade bottom>
          <h2 className="w-full mt-3 font-serif text-lg font-bold text-left text-yellow-400 md:text-center md:text-4xl">
            Colecciones de recursos gratuitos
          </h2>
        </Fade>
        <Fade bottom>
          <p className="w-full max-w-lg mt-3 font-sans text-base text-left text-gray-100 md:text-center md:text-2xl">
            Repositorio interactivo de herramientas libres.
          </p>
        </Fade>
        <Fade duration={1750} delay={250}>
          <div className="relative w-full min-h-screen py-6 pt-6 mx-auto mt-2 md:mt-6">
            <InstantSearch
              searchClient={searchClient}
              indexName="netlify_54fb5aee-2bc5-4d65-8da9-b519a0027d2c_master_all"
            >
              <div className="max-w-xl mx-auto ">
                <SearchBox
                  className="w-full mx-auto mb-2"
                  translations={{
                    submitTitle: "Add your search query.",
                    resetTitle: "Reset your search query.",
                    placeholder: "Buscar aquí",
                  }}
                />
                <div className="mb-4 font-mono text-xs font-bold text-center text-indigo-300 md:text-sm">
                  Probá con Juegos, arte, plantas, radios, etc
                </div>
              </div>
              <div className="relative max-w-full mx-auto mt-6">
                <Fade  duration={1750} delay={1250}>
                  <Hits className="w-full mx-auto" hitComponent={PostPreview} />
                </Fade>
              </div>
            </InstantSearch>
          </div>
        </Fade>
      </div>
    </div>

    <div className="fixed inset-0 z-0 opacity-10">
      <MovingIcons />
    </div>
  </Layout>
)

export default RecursosPage
