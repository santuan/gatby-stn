import { Link } from "gatsby"
import React from "react"
import Confetti from "react-dom-confetti"
import { GiPartyPopper } from "react-icons/gi"
import TextLoop from "react-text-loop"
import Layout from "../components/layout"
import Seo from "../components/seo"


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
        <div className="relative z-50 w-full px-8 mx-auto mt-24 mb-2 text-left md:mt-8 max-w-7xl">
          <h2
            className="w-full font-serif text-4xl text-left text-white md:text-6xl"
            style={{ opacity: ".8" }}
          >
            <div className="block w-full mt-2 font-bold">
              <TextLoop interval={3500}>

                <Link
                  to={`/galeria/`}
                  className="text-white hover:opacity-75 md:text-blue-400 md:hover:text-blue-500"
                >
                  Imágenes.
                </Link>
                <Link
                  to={`/blog`}
                  className="font-sans text-white hover:opacity-75 md:text-red-400 md:hover:text-red-500"
                >
                  Palabras.
                </Link>
                <Link
                  to={`/cooparaje`}
                  className="font-mono text-white hover:opacity-75 md:text-yellow-400 md:hover:text-yellow-500"
                >
                  Recursos.
                </Link>

              </TextLoop>
            </div>
          </h2>
          <div className="fixed bottom-3 right-3">
            <button
              aria-label="Tirar confetis"
              onClick={() => {
                copyToClipboard("santuan.bot@gmail.com")
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 3000)
              }}
              className={
                "z-50 inline-block p-3 text-2xl text-white transition-all duration-500 transform  rounded-full hover:bg-blue-800 hover:underline hover:-translate-y-1 hover:rotate-12 cursor-pointer hover:text-white " +
                (isCopied
                  ? "bg-green-500 hover:bg-green-600 " + isCopied
                  : "hover:bg-gray-700 bg-gray-800")
              }

            >
              <GiPartyPopper />
            </button>
            <div className="z-0 transform -translate-x-24 -translate-y-24">
              <Confetti active={isCopied} config={config} />
            </div>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="opacity-80 md:opacity-100 backgroundVideo"
        poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_auto:eco,w_763/v1628508273/encoder/herohdsantuan0001-0250_wpgean.webp"
      >
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.webm"
          type="video/webm"
        />
        <source
          src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628128970/encoder/herohdsantuan0001-0250_wpgean.ogv"
          type="video/ogg"
        />
      </video>

    </Layout>
  )
}
