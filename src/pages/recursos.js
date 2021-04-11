import React from "react"
import { Helmet } from "react-helmet"
import { GoLinkExternal } from "react-icons/go"
import { AwesomeButton } from "react-awesome-button"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import SVGLogo from "../assets/cooparaje.svg"
import BackgroundSlider from "../components/backgroundSlider"

const RecursosPage = () => (
  <Layout>
    <SEO title="Recursos" />
    <Helmet>
      <body className="recursos" />
    </Helmet>
    <HeroProjects>
      <Box>
        <Fade duration={1750} delay={250}>
          <SVGLogo className="w-32 duration-1000 ease-in-out transform -rotate-90 hover:rotate-0 hover:-translate-y-3" />
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
    <BackgroundSlider/>
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
