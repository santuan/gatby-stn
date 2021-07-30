import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/bgPattern.css"
import Confetti from "react-dom-confetti"
import TextLoop from "react-text-loop"

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
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-gray-900 shadow-sm bg-pattern">
        <div className="relative z-50 w-full max-w-lg px-6 mx-auto mt-12 mb-2 text-center">
          <h2
            className="w-full font-serif text-6xl text-white md:text-left"
            style={{ opacity: ".8" }}
          >
            <span className="inline-block py-1 mr-1 font-mono text-red-500 transition-all duration-500 transform -translate-x-4 rounded-md hover:translate-x-0 hover:text-gray-900 md:px-4 hover:bg-gray-800">
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
                "px-2 ml-1 inline-block py-1 transition-all duration-500 text-blue-500 rounded-md cursor-help hover:underline hover:font-serif hover:text-blue-600 "
              }
            >
              Diseño
            </button>{" "}
            <div className="block w-full">
              <TextLoop interval={3000} fade={true}>
                <Link
                  to={`/colaboraciones/germinacion-del-camino/`}
                  className="text-purple-400 hover:text-white hover:underline"
                >
                  aplicaciones
                </Link>
                <Link
                  to={`/colaboraciones/bomberos-voluntarios-de-lujan-de-cuyo`}
                  className="text-yellow-400 hover:text-white hover:underline"
                >
                  páginas
                </Link>
                <Link
                  to={`/colaboraciones/alan-sutton/`}
                  className="text-yellow-400 hover:text-white hover:underline"
                >
                  webs
                </Link>
                <Link
                  to={`/colaboraciones/clinicas-colectivas`}
                  className="text-yellow-400 hover:text-white hover:underline"
                >
                  porfolios
                </Link>

                <Link
                  to={`/colaboraciones/kallpa-ludica`}
                  className="text-yellow-400 hover:text-white hover:underline"
                >
                  tienditas
                </Link>
                <Link
                  to={`/colaboraciones/`}
                  className="text-yellow-400 hover:text-white hover:underline"
                >
                  cosas
                </Link>
              </TextLoop>
            </div>
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
