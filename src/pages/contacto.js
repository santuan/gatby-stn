import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Confetti from "react-dom-confetti"
import HeroSlider from "../components/HeroSlider/HeroSlider"

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
      <Seo title="Contacto" pathname={`/contacto/`} />
      <Helmet>
        <body className="fullpage contact" />
      </Helmet>
      <div className="absolute w-full min-h-screen opacity-30">
        <HeroSlider />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-pattern ">
        <Fade duration={1750} delay={720}>
          <div className="relative z-50 max-w-2xl p-8 mx-auto mt-6 mb-6 font-serif prose text-center bg-gray-900 bg-opacity-95 md:prose-lg ">
            <p className="text-white">
              Si algo de lo que viste aqui te gustó y te interesaría saber más,
              sentite libre de contactarte e intentaré contestarlo dentro del
              tiempo y las posibilidades.
            </p>
            <p className="text-white">
              Y desde ya, muchas gracias por su atención
            </p>
            <div className="relative z-50 flex flex-col justify-center w-full max-w-xl px-0 py-4 mx-auto mt-6 md:my-6">
              <button
                onClick={() => {
                  copyToClipboard("santuan.bot@gmail.com")
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 3000)
                }}
                className={
                  "relative mt-1 mx-2 rounded-md pb-1 font-bold font-sans text-white  transform duration-700 " +
                  (isCopied
                    ? "bg-green-800 " + isCopied
                    : "hover:bg-gray-900 bg-opacity-10")
                }
              >
                <div className="relative overflow-hidden">
                  <Fade bottom duration={700} delay={200}>
                    <span className="block p-2 mb-3 font-sans text-2xl font-light tracking-wider text-gray-100 duration-700 bg-blue-300 cursor-pointer select-all bg-opacity-10">
                      santuan.bot@gmail.com
                    </span>
                  </Fade>
                </div>
                {isCopied ? "🎉 Copiado!" : "Click para copiar mail"}
                <div className="transform translate-x-64 -translate-y-12">
                  <Confetti active={isCopied} config={config} />
                </div>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
