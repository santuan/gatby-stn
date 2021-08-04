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
        <div className="relative z-50 w-full max-w-5xl px-8 mx-auto mt-12 mb-2 text-left">
          <h2
            className="w-full font-mono text-5xl text-left text-white md:text-6xl"
            style={{ opacity: ".8" }}
          >
            <button
              onClick={() => {
                copyToClipboard("santuan.web@gmail.com")
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
              className={
                "hover:underline font-serif inline-block py-1 transition-all duration-500 text-blue-500 rounded-md cursor-help hover:font-serif hover:text-blue-600 "
              }
            >
              Diseño
            </button>{" "}
            <br />y
            <span className="inline-block px-4 py-1 mr-1 font-mono font-bold text-red-500 transition-all duration-500 transform rounded-md select-all hover:translate-x-0 hover:text-gray-900 hover:bg-gray-800">
              desarrollo
            </span>
            <div className="block w-full mt-2 font-sans font-bold">
              <TextLoop interval={3500} >
                <Link
                  to={`/colaboraciones/`}
                  className="text-yellow-400 hover:text-yellow-500 hover:opacity-80"
                >
                  de todo.
                </Link>
                <Link
                  to={`/colaboraciones/germinacion-del-camino/`}
                  className="text-yellow-400 hover:text-yellow-500 hover:opacity-80"
                >
                  aplicaciones.
                </Link>
                <Link
                  to={`/colaboraciones/bomberos-voluntarios-de-lujan-de-cuyo`}
                  className="text-yellow-400 hover:text-yellow-500 hover:opacity-80"
                >
                  páginas.
                </Link>
                <Link
                  to={`/colaboraciones/clinicas-colectivas`}
                  className="text-yellow-400 hover:text-yellow-500 hover:opacity-80"
                >
                  porfolios.
                </Link>

                <Link
                  to={`/colaboraciones/kallpa-ludica`}
                  className="text-yellow-400 hover:text-yellow-500 hover:opacity-80"
                >
                  tienditas.
                </Link>
              </TextLoop>
            </div>
          </h2>
          <div className="transform -translate-y-48 translate-x-52">
            <Confetti active={isCopied} config={config} />
          </div>
          <div className="grid max-w-lg md:gap-2 md:grid-cols-2">
            <Fade>
              <AwesomeButton
                action={() => {
                  navigate(`/recursos/`)
                }}
                className="w-full md:mb-1"
              >
                ver Recursos
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
      <video
        autoPlay
        loop
        muted
        playsinline
        className="opacity-10 backgroundVideo"
      >
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/0001-0361_ijirov.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/0001-0361_ijirov.webm"
          type="video/webm"
        />
      </video>
    </Layout>
  )
}
