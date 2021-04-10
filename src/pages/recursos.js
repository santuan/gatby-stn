import styled from "@emotion/styled"
import React from "react"
import { Helmet } from "react-helmet"
import { CgExternal } from "react-icons/cg"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import MovingIcons from "../animations/moving-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGLogo from "../assets/cooparaje.svg"

const RecursosPage = () => (
  <Layout>
    <SEO title="Recursos" />
    <Helmet>
      <body className="recursos" />
    </Helmet>
    <HeroProjects>
      <Socials>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cooparaje.com.ar/"
        >
          <Fade duration={1750} delay={250}>
            <SVGLogo className="w-32 mb-6" />
          </Fade>
        </a>
      
        <Fade duration={1750} delay={250}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.cooparaje.com.ar/"
            className="inline-flex items-center justify-center w-64 px-4 py-2 mx-auto font-mono text-base font-bold text-white bg-yellow-600 border border-transparent rounded-md shadow-sm animate-pulse hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 "
          >
            visitar cooparaje
            <CgExternal className="ml-2"/>
          </a>
        </Fade>
      </Socials>
    </HeroProjects>
    <div className="fixed inset-0 z-10 opacity-25">
      <MovingIcons />
    </div>
  </Layout>
)

export default RecursosPage

const Socials = styled.div`
  ${tw`relative z-50 flex flex-col items-center justify-center w-full max-w-sm px-0 py-4 m-auto my-0`}

  a {
  }
`

const HeroProjects = styled.div`
  ${tw`z-20 flex flex-col items-center justify-center w-full text-center`}
  min-height: 100vh;
`
