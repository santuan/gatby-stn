import React from "react"
import { Helmet } from "react-helmet"
import { AiFillGithub } from "react-icons/ai"
//import { IoLogoInstagram } from "react-icons/io"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const ContactPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <Helmet>
      <body className="contact" />
    </Helmet>
    <HeroProjects>
      <Socials>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/santuan"
        >
          <Fade duration={1750} delay={250}>
            <AiFillGithub className="mb-4 text-6xl text-white transition-all duration-300 hover:text-yellow-300" />
          </Fade>
          <Fade bottom duration={2000} delay={200}>
            <span className="block font-mono text-base text-yellow-900">
              Github
            </span>
          </Fade>
          <Fade bottom cascade duration={2000} delay={200}>
            <span className="block mt-4 font-serif text-2xl text-yellow-900">
              Repositorios de
            </span>
            <span className="block mt-0 font-serif text-2xl text-yellow-900">
              Códigos disponibles
            </span>
          </Fade>
        </a>
      </Socials>
    </HeroProjects>
  </Layout>
)

export default ContactPage

const Socials = styled.div`
  ${tw`relative flex justify-center w-full px-0 py-4 m-auto my-0`}

  a {
    ${tw`flex flex-col items-center justify-center mx-6 mb-6 font-mono text-xl font-bold`}
  }
`

const HeroProjects = styled.div`
  ${tw`flex flex-col items-center justify-center w-full text-center`}
  min-height: 100vh;
`
