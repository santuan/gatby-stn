import styled from "@emotion/styled"
import React from "react"
import { Helmet } from "react-helmet"
import { AiFillGithub } from "react-icons/ai"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
import MovingIcons from "../animations/moving-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Confetti from "react-dom-confetti"

const copyToClipboard = (str) => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 19,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 8000,
  stagger: 13,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#2f85c0", "#52a3d9", "#e74446", "#d52b2a", "#f8c843", "#f8a834"],
}

export default function BackgroundSlider() {
  const [isCopied, setIsCopied] = React.useState(false)
  return (
    <Layout>
      <SEO title="Contacto" />
      <Helmet>
        <body className="contact" />
      </Helmet>
      <HeroProjects className="bg-pattern">
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

          <button
            onClick={() => {
              copyToClipboard("santuan.dg@gmail.com")
              setIsCopied(true)
              setTimeout(() => setIsCopied(false), 3000)
            }}
            className={
              "relative mt-1 rounded pb-1 font-bold font-sans text-white transform duration-700 " +
              (isCopied ? "bg-green-800 " + isCopied : "")
            }
          >
            <Fade bottom cascade duration={2000} delay={200}>
              <span className="block p-2 mb-3 font-sans text-2xl font-light tracking-wider text-gray-100 bg-blue-300 cursor-pointer select-all bg-opacity-10">
                santuan.dg@gmail.com
              </span>
            </Fade>
            {isCopied ? "🎉 Copiado!" : "Click para copiar mail"}
            <div className="transform -translate-y-12 translate-x-52">
            <Confetti active={isCopied} config={config} />
            </div>
          </button>
        </Socials>
      </HeroProjects>

      <div className="fixed inset-0 z-10 opacity-25">
        <MovingIcons />
      </div>
    </Layout>
  )
}

const Socials = styled.div`
  ${tw`relative z-50 flex flex-col justify-center w-full max-w-md px-0 py-4 mx-auto my-0`}

  a {
    ${tw`flex flex-col items-center justify-center mx-6 mb-6 font-mono text-xl font-bold`}
  }
`

const HeroProjects = styled.div`
  ${tw`relative z-20 flex flex-col items-center justify-center w-full overflow-hidden text-center`}
  min-height: 100vh;
`
