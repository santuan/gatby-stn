import styled from "@emotion/styled"
import React from "react"
import { Helmet } from "react-helmet"
import { GoLinkExternal } from "react-icons/go"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import MovingIcons from "../animations/moving-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGLogo from "../assets/cooparaje.svg"
import { AwesomeButton } from "react-awesome-button"


const RecursosPage = () => (
  <Layout>
    <SEO title="Recursos" />
    <Helmet>
      <body className="recursos" />
    </Helmet>
    <HeroProjects>
      <Box>
        <Fade duration={1750} delay={250}>
          <SVGLogo className="w-32 duration-700 transform -rotate-90 hover:-rotate-45 hover:-translate-y-3" />
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
      </Box>
    </HeroProjects>
    <div className="fixed inset-0 z-10 opacity-25">
      <MovingIcons />
    </div>
  </Layout>
)

export default RecursosPage

const Box = styled.div`
  ${tw`relative z-50 flex flex-col items-center justify-center w-full max-w-sm px-0 py-4 m-auto my-0`}

  a {
  }
`

const HeroProjects = styled.div`
  ${tw`z-20 flex flex-col items-center justify-center w-full text-center`}
  min-height: 100vh;
`
