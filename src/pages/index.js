import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/bgPattern.css"
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
  spread: 560,
  startVelocity: 39,
  elementCount: 210,
  dragFriction: 0.12,
  duration: 8000,
  stagger: 13,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#2f85c0", "#52a3d9", "#e74446", "#d52b2a", "#f8c843", "#f8a834"],
}

export default function IndexPage() {
  const [isCopied, setIsCopied] = React.useState(false)
  return (
    <Layout>
      <Seo title="Inicio" />
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 shadow-sm bg-pattern">
        <div className="relative z-50 w-full max-w-lg px-6 mx-auto mt-12 mb-2 text-center">
          <h2
            className="w-full font-serif text-6xl text-white md:text-center"
            style={{ opacity: ".8" }}
          >
            <span className="inline-block py-1 mr-1 text-red-500 transition-all duration-500 rounded-md hover:text-gray-900 md:px-4 hover:font- cursor-help hover:font-mono hover:bg-gray-800">
              Desarrollo
            </span>
            <br />y
            <button
              onClick={() => {
                copyToClipboard("santuan.web@gmail.com")
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
              className={
                "px-2 ml-1 inline-block py-1 transition-all duration-500 text-blue-500 rounded-md hover:font-serif hover:text-yellow-600 " +
                (isCopied
                  ? "bg-green-800 " + isCopied
                  : "hover:bg-gray-900 bg-opacity-10")
              }
            >
              Diseño
            </button>{" "}
            páginas web.
          </h2>
          <div className="transform -translate-y-48 translate-x-52">
            <Confetti active={isCopied} config={config} />
          </div>
          <div className="grid md:gap-3 md:grid-cols-2">
            <Fade>
              <AwesomeButton
                action={() => {
                  navigate(`/colaboraciones/`)
                }}
                className="w-full md:mb-3"
              >
                ver Proyectos
              </AwesomeButton>
            </Fade>
            <Fade>
              <AwesomeButton
                action={() => {
                  navigate(`/blog/`)
                }}
                type="secondary"
                className="w-full md:mb-3"
              >
                ver Blog
              </AwesomeButton>
            </Fade>
          </div>
        </div>
      </div>
    </Layout>
  )
}
