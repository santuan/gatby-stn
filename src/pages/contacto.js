import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Confetti from "react-dom-confetti"
import { ImGithub, ImTwitter, ImLinkedin2 } from "react-icons/im"
import HeroSlider from "../components/HeroSlider/HeroSlider"
import { BsArrowDown } from "react-icons/bs";
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
        <body className="contact" />
      </Helmet>
      <div className="relative w-full min-h-screen">
        <HeroSlider />
        <BsArrowDown className="absolute left-0 right-0 w-full h-10 text-3xl text-white bottom-6 animate-pulse"/>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-start w-full overflow-hidden bg-pattern ">
        <div className="relative z-50 max-w-xl px-4 mx-auto mt-6 mb-6 font-mono prose text-justify md:prose-lg hyphens">
          <p className="text-white">
            Si algo de lo que viste aqui te gustó y te interesaría saber más,
            podés sentirte libre de contactarte y trataré de colaborar dentro de
            las posibilidades.{" "}
          </p>
          <p className="text-white">
            Y desde ya, muchas gracias por su atención{" "}
            <span role="img" aria-label="confetti">
              🎉
            </span>
          </p>
        </div>
        <div className="relative z-50 flex flex-col justify-center w-full max-w-xl px-0 py-4 mx-auto mt-6 md:my-6">
          <button
            onClick={() => {
              copyToClipboard("santuan.dg@gmail.com")
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
                  santuan.dg@gmail.com
                </span>
              </Fade>
            </div>
            {isCopied ? "🎉 Copiado!" : "Click para copiar mail"}
            <div className="transform translate-x-64 -translate-y-12">
              <Confetti active={isCopied} config={config} />
            </div>
          </button>
          <div className="hidden grid-cols-3 gap-3 mt-12">
            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/santuan/"
            >
              <Fade duration={1750} delay={250}>
                <ImGithub className="text-3xl text-white transition-all duration-700 group-hover:text-yellow-500" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-yellow-500">
                  Github
                </span>
              </Fade>
            </a>
            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/santuuan"
            >
              <Fade duration={1750} delay={250}>
                <ImTwitter className="text-3xl text-white transition-all duration-700 group-hover:text-blue-500" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-blue-500">
                  Twitter
                </span>
              </Fade>
            </a>

            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/santuan/"
            >
              <Fade duration={1750} delay={250}>
                <ImLinkedin2 className="text-3xl text-white transition-all duration-700 group-hover:text-blue-600" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-blue-600">
                  Linkedin
                </span>
              </Fade>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
