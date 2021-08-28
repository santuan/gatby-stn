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
import { GoLinkExternal } from "react-icons/go"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)
const RecursosPage = () => (
  <Layout>
    <Seo title="cooparaje" pathname={`/cooparaje/`} />
    <Helmet>
      <body className="blog" />
    </Helmet>
    <div className="z-20 flex flex-col items-center justify-center w-full min-h-screen text-center">
      <div className="relative z-50 flex flex-col items-start justify-center w-full px-2 py-4 mx-auto mt-24 md:items-center ">
        <Fade duration={1750} delay={250}>
          <SVGLogo className="hidden w-8 duration-700 ease-in-out transform -rotate-90 md:block md:w-20 hover:rotate-0 hover:-translate-y-3" />
        </Fade>
        <Fade bottom>
          <a
            href="https://www.cooparaje.com.ar/espacios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-3 font-serif text-lg font-bold text-left text-yellow-400 md:text-center md:text-4xl"
          >
            www.cooparaje.com.ar
          </a>
        </Fade>
        <Fade bottom>
          <p className="w-full max-w-lg mt-3 font-sans text-base text-left text-gray-100 md:text-center md:text-2xl">
            Colecciones de recursos y herramientas para usar libremente.
          </p>
        </Fade>
        <Fade duration={1750} delay={250}>
          <div className="relative w-full min-h-screen py-6 pt-6 mx-auto mt-2 md:mt-6">
            <InstantSearch
              searchClient={searchClient}
              indexName="recursos"
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
                <div className="mb-4 font-mono text-xs font-bold text-center text-indigo-100 md:text-sm">
                  Probá con Juegos, colores, plantas, radios y <br/>
                  <a
                    href="https://www.cooparaje.com.ar/espacios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 underline"
                  >
                    muchos espacios más
                    <GoLinkExternal className="inline-block ml-2" />
                  </a>
                </div>
              </div>
              <div className="relative mx-auto mt-6 max-w-7xl">
                <Fade duration={1750} delay={1250}>
                  <Hits className="w-full mx-auto" hitComponent={PostPreview} />
                </Fade>
              </div>
              <div className="w-40 mx-auto mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 24">
                  <g fill="none">
                    <path
                      fill="#5468FF"
                      d="M79 1h16.6a3 3 0 013 2.9v16.6a3 3 0 01-3 3H79a3 3 0 01-3-3V3.9a3 3 0 013-3zm42 17.8c-4.5 0-4.5-3.5-4.5-4.1V1.4l2.7-.5v13.3c0 .3 0 2.3 1.7 2.4v2.2zm-11-2.2l2-.1v-2.7a6.3 6.3 0 00-1.6-.2 5.7 5.7 0 00-1 0 2.7 2.7 0 00-.8.3l-.5.5a1 1 0 00-.3.6c0 .7.3 1 .7 1.3s.9.3 1.6.3zm-.2-9.7c1 0 1.7.1 2.3.4.6.2 1 .5 1.4.9.4.4.6.9.8 1.5l.2 1.8v6.9a32.5 32.5 0 01-1.9.3 19.4 19.4 0 01-4.7 0 4 4 0 01-1.4-.7 3 3 0 01-1-1.1c-.2-.5-.3-1.1-.3-1.8s.1-1 .4-1.5a3.2 3.2 0 011-1.1c.4-.3 1-.5 1.5-.6a8.8 8.8 0 011.9-.2 8.4 8.4 0 012 .2v-.4l-.2-.9a1.9 1.9 0 00-.4-.7 1.8 1.8 0 00-.7-.5 3.2 3.2 0 00-1.1-.2l-1.7.1a7.7 7.7 0 00-1.3.3l-.3-2.2 1.5-.3a11 11 0 012-.2zm52.9 9.6h1.8v-2.8a6.3 6.3 0 00-1.5-.2h-1a2.7 2.7 0 00-.7.3 1.5 1.5 0 00-.6.5 1 1 0 00-.2.7c0 .6.2 1 .6 1.2.4.2 1 .3 1.6.3zm-.2-9.6c.8 0 1.6 0 2.2.3.6.2 1 .5 1.4.9.4.4.6 1 .8 1.5a6.8 6.8 0 01.2 1.8v7a33.4 33.4 0 01-4.7.4c-.6 0-1.3 0-1.8-.2a4 4 0 01-1.5-.6 3 3 0 01-1-1.2c-.2-.4-.3-1-.3-1.8 0-.6.1-1 .4-1.5.2-.4.6-.8 1-1.1.5-.3 1-.5 1.6-.6a8.8 8.8 0 012.7-.1l1 .1v-.4a3.3 3.3 0 000-.9 1.9 1.9 0 00-.5-.7 1.8 1.8 0 00-.7-.5 3.2 3.2 0 00-1.1-.2c-.6 0-1.2 0-1.7.2a7.8 7.8 0 00-1.3.3l-.3-2.2 1.5-.4a11.6 11.6 0 012-.1zm-8-1.3a1.6 1.6 0 01-1.7-1.6c0-1 .7-1.7 1.6-1.7a1.6 1.6 0 110 3.3zm1.3 13.2H153V7.3l2.7-.5v12zm-4.7 0c-4.4 0-4.4-3.5-4.4-4.1V1.4l2.6-.5v13.3c0 .3 0 2.3 1.8 2.4v2.2zm-8.7-5.9c0-1.2-.3-2.1-.8-2.8-.5-.7-1.2-1-2-1-1 0-1.6.3-2.1 1s-.7 1.6-.7 2.8c0 1.2.2 2 .7 2.6.5.7 1.2 1 2 1 1 0 1.6-.3 2.1-1s.8-1.4.8-2.6zm2.7 0c0 .9-.1 1.6-.4 2.3a5.5 5.5 0 01-1.1 2 5 5 0 01-1.8 1.2l-2.2.4a7 7 0 01-2.3-.4 5.1 5.1 0 01-1.7-1.3c-.5-.5-.9-1.1-1.2-1.9a6.3 6.3 0 01-.4-2.3c0-1 .1-1.8.4-2.5a5.6 5.6 0 011.2-2 5.1 5.1 0 011.7-1.1c.7-.3 1.4-.4 2.2-.4.9 0 1.6.1 2.3.4a4.9 4.9 0 011.7 1.2 5.6 5.6 0 011.2 1.9c.3.7.4 1.6.4 2.5zm-20.1 0c0 1.1.2 2.4.7 2.9.5.5 1.1.8 2 .8a4 4 0 002-.6V9.3a10.5 10.5 0 00-1.7-.2c-1 0-1.7.4-2.3 1-.5.6-.7 1.8-.7 2.8zm7.4 5.3c0 1.8-.5 3.1-1.4 4-1 .8-2.4 1.2-4.3 1.2-.7 0-2.2 0-3.3-.4l.4-2 3 .2c1 0 1.8-.2 2.2-.7.5-.4.7-1 .7-2v-.4a8 8 0 01-1 .4c-.5.2-1 .2-1.5.2-.8 0-1.4 0-2-.3a4.2 4.2 0 01-1.6-1c-.4-.5-.8-1-1-1.7a9.9 9.9 0 010-5.4 5 5 0 013-3A6.6 6.6 0 01128 7l2.4.2 2 .5v10.6z"
                    />
                    <path
                      fill="#5D6494"
                      d="M7 6.7v1.6c-.7-.4-1.5-.7-2.5-.7-.5 0-1 .2-1.3.4a1.2 1.2 0 00-.5 1c0 .5.1.8.5 1 .3.3.8.6 1.5.9l1 .5.9.6c.3.2.5.5.7.9.2.3.2.7.2 1.2 0 1-.3 1.7-1 2.2a4 4 0 01-2.6.8c-1.2 0-2.1-.2-3-.7v-1.7c1 .6 1.9 1 3 1 .6 0 1-.2 1.4-.4.3-.3.5-.7.5-1.2 0-.3 0-.5-.3-.8l-.6-.5-1.1-.5a61.3 61.3 0 01-.6-.3 13.7 13.7 0 01-.5-.3 4.3 4.3 0 01-.6-.3 7 7 0 01-.5-.4l-.3-.5-.3-.6A2.6 2.6 0 011 9c0-.9.3-1.6 1-2.1a4 4 0 012.5-.8c1 0 1.8.1 2.5.5zm7.4 5.7V12c0-.6-.1-1.1-.5-1.5-.3-.3-.7-.5-1.3-.5-.5 0-1 .2-1.4.6-.3.4-.6 1-.7 1.7h4zm1 2.8v1.4c-.6.3-1.3.5-2.3.5a4 4 0 01-3-1.2A4 4 0 019 13c0-1.2.3-2.2 1-3 .7-.7 1.5-1 2.6-1 1 0 1.8.2 2.4.9.7.6 1 1.6 1 2.8l-.1 1h-5.4c.2.7.5 1.2 1 1.6a3 3 0 001.8.6c.9 0 1.6-.2 2.1-.6zm6.7-1.8h-1.3c-.6 0-1 .1-1.3.3a1 1 0 00-.5 1c0 .3.2.6.4.8.2.2.6.3 1 .3.5 0 1-.1 1.2-.4.3-.3.5-.6.5-1.1v-1zM18 10.8V9.3a5 5 0 012.5-.5c2 0 3.1 1 3.1 3V17h-1.5v-1c-.4.7-1.1 1-2.2 1-.8 0-1.4-.2-1.8-.6-.5-.4-.7-1-.7-1.7 0-.8.3-1.4.9-1.8a4 4 0 012.4-.6h1.4v-.5c0-.6-.2-1-.4-1.3-.3-.2-.8-.4-1.4-.4a4 4 0 00-2.3.7zM27.3 9v1.4c.4-1 1.1-1.5 2.1-1.5h.5v1.6a1.9 1.9 0 00-.7-.1c-.6 0-1 .2-1.4.7-.3.5-.5 1-.5 1.7V17h-1.5V9h1.5zm5 4c0 1 .3 1.6.8 2.1s1.1.8 2 .8c.6 0 1.2-.2 1.8-.5v1.4c-.5.3-1.2.5-2 .5a4 4 0 01-4.2-4.2c0-1.2.4-2.2 1.2-3a4 4 0 013-1.2c.7 0 1.4.1 2 .4v1.4a3.2 3.2 0 00-1.8-.4c-.8 0-1.5.2-2 .8-.5.5-.8 1.2-.8 2zm8-7.2v4.6c.4-1 1.2-1.5 2.4-1.5.8 0 1.5.2 2 .7.4.5.7 1.2.7 2V17h-1.6v-5.1c0-.6-.1-1-.4-1.3-.3-.3-.7-.4-1.1-.4a2 2 0 00-1.4.6c-.5.4-.7 1-.7 1.8V17h-1.5V5.7h1.5zm15 10c.5 0 1-.2 1.4-.7a3 3 0 00.6-2c0-.9-.2-1.6-.6-2a2 2 0 00-1.5-.8 2 2 0 00-1.5.6c-.5.5-.7 1.2-.7 2.1 0 1 .2 1.7.6 2.1.5.5 1 .7 1.6.7zM53 5.7v4.4c.6-.9 1.4-1.3 2.4-1.3s1.9.4 2.5 1.1c.7.8 1 1.8 1 3.1 0 1.1-.3 2.1-.9 3a3 3 0 01-2.5 1.1c-1.1 0-2-.4-2.5-1.3V17h-1.6V5.7H53zm10 11.1L59.6 9h1.7l1 2.6 1.3 3.5c0-.4.5-1.5 1.1-3.5l1-2.6h1.6l-3 7.9c-.7 2-1.9 3-3.5 3a3 3 0 01-.7 0v-1.3h.5c1 0 1.8-.5 2.2-1.7z"
                    />
                    <path
                      fill="#FFF"
                      d="M89.6 6v-.8a1 1 0 00-1-1h-2.2a1 1 0 00-1 1V6l.2.1a7.1 7.1 0 012-.3l1.9.3.1-.1m-6.2 1l-.4-.4a1 1 0 00-1.4 0l-.5.5a1 1 0 000 1.3l.4.4h.2a7.5 7.5 0 011.7-1.6V7m4.1 2.4v3.4s.1.1.2 0l3-1.4v-.2a3.7 3.7 0 00-3-1.9l-.2.1m0 8a4.5 4.5 0 01-4.4-4.4 4.5 4.5 0 014.4-4.5A4.5 4.5 0 0192 13a4.5 4.5 0 01-4.5 4.5m0-10.9a6.4 6.4 0 100 12.8A6.4 6.4 0 0094 13a6.4 6.4 0 00-6.4-6.4"
                    />
                  </g>
                </svg>
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