import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import Particles from "react-particles-js"
const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Home>
      <MainTitle className="mb-2">
        <Fade duration={1650}>
          <Title>
            diseño y desarrollo de experiencias para dispositivos.
            <span className="block max-w-sm m-auto mt-2 text-xl opacity-75">
              También colaboro para que otros puedan hacer lo mismo.
            </span>
          </Title>
          <Link to="/proyectos/" className="uppercase">
            Ver proyectos
          </Link>
        </Fade>
      </MainTitle>
      <Particles
        className="fixed inset-0 z-10 opacity-25"
        params={{
          particles: {
            number: {
              value: 66,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
            },
          },
        }}
      />
    </Home>
  </Layout>
)

const Home = styled.div`
  ${tw`flex flex-col items-center justify-center text-center bg-gray-800 shadow-sm`}
  min-height: 100vh;
`

const MainTitle = styled.div`
  ${tw`relative z-50 max-w-xl px-6 m-auto `}
  a {
    ${tw`inline-block px-5 py-2 mt-6 text-lg font-bold text-white bg-red-500 border-b-4 border-red-700 rounded hover:bg-red-700 hover:border-red-800`}
  }
`

const Title = styled.h1`
  ${tw`w-full font-mono text-2xl text-center text-white md:text-3xl`}
`

const ImgContainer = styled.div`
  ${tw`relative w-full max-w-md pt-12 m-0`}
  height: auto;
  svg {
    ${tw`w-full`}
    height: auto
  }
`

export default IndexPage
