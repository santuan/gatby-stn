import styled from "@emotion/styled"
import React from "react"
import { Helmet } from "react-helmet"
import { AiFillGithub } from "react-icons/ai"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import MovingIcons from "../animations/moving-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            <AiFillGithub className="mb-4 text-6xl text-white transition-all duration-300 hover:text-yellow-500" />
          </Fade>
          <Fade bottom duration={2000} delay={200}>
            <span className="block font-mono text-base text-gray-100">
              Github
            </span>
          </Fade>
          <Fade bottom cascade duration={2000} delay={200}>
            <span className="block mt-4 font-serif text-2xl text-gray-100">
              Repositorios de
            </span>
            <span className="block mt-0 font-serif text-2xl text-gray-100">
              Códigos disponibles
            </span>
          </Fade>
        </a>
      </Socials>
    </HeroProjects>
    <div className="fixed inset-0 z-10 opacity-25">
      <MovingIcons />
    </div>
  </Layout>
)

export default ContactPage

const Socials = styled.div`
  ${tw`relative z-50 flex justify-center w-full px-0 py-4 m-auto my-0`}

  a {
    ${tw`flex flex-col items-center justify-center mx-6 mb-6 font-mono text-xl font-bold`}
  }
`

const HeroProjects = styled.div`
  ${tw`z-20 flex flex-col items-center justify-center w-full text-center`}
  min-height: 100vh;
`
