import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Confetti from "react-dom-confetti"
import {
  ImGithub,
  ImTwitch,
  ImVimeo,
  ImSoundcloud,
  ImTwitter,
  ImLinkedin2,
} from "react-icons/im"

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
      <Seo title="Contacto" />
      <Helmet>
        <body className="contact" />
      </Helmet>
      <div className="relative z-20 flex flex-col items-center justify-start w-full min-h-screen bg-pattern ">
        <div className="relative z-50 max-w-xl px-4 mx-auto mt-32 mb-12 font-mono prose prose-xl prose-yellow">
          <p className="text-white">
            Soy un apasionado del diseño y la programación y todo lo que tenga
            que ver con el mundo del software libre. Disfruto ser parte de una
            comunidad que se dedica a mejorar el mundo día a día de formas más
            colaborativas.{" "}
          </p>

          <p className="text-white">
            Estudié durante más de 7 años la carrera de diseño gráfico en la
            Universidad de Buenos Aires. Mientras tanto y paralelamente me fui
            dedicando cada vez más a investigar las herramientas y conocimientos
            que la comunidad de software libre ofrece de manera gratuita y
            dedicandome a implementarlas en los proyectos que me rodean para
            impulsar su creatividad e ir aprendiendo en el intento.
          </p>

          <p className="text-white">
            Durante los ultimos años me he desarrollado mayoritariamente en el ámbito
            público como diseñador y desarrollador de aplicaciones y páginas web
            en el <i>Ministerio Público Fiscal</i> y en la <i>Cámara de Diputados de la
            Nación.</i>
          </p>

          <p className="text-white">
            También mantengo el sitio web <a href="https://cooparaje.com.ar/" target="_blank"
              rel="noopener noreferrer" className="text-yellow-500">cooparaje.com.ar</a>, donde voy
            subiendo recursos y herramientas gratuitas que amigas y amigos me van preguntando o compartiendo y se pueden aplicar para todo tipo de
            espacios.
          </p>

          <p className="text-white">
            Si algo de lo que viste aqui te gusto y te interesa saber más, podés
            sentirte libre de contactarte y tratare de colaborar dentro de las
            posibilidades.{" "}
          </p>
        </div>
        <div className="relative z-50 flex flex-col justify-center w-full max-w-xl px-0 py-4 mx-auto mt-24 md:my-0">
          <button
            onClick={() => {
              copyToClipboard("santuan.web@gmail.com")
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
                  santuan.web@gmail.com
                </span>
              </Fade>
            </div>
            {isCopied ? "🎉 Copiado!" : "Click para copiar mail"}
            <div className="transform -translate-y-12 translate-x-52">
              <Confetti active={isCopied} config={config} />
            </div>
          </button>
          <div className="grid grid-cols-2 gap-3 mt-12 md:grid-cols-3">
            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/santuan/gatby-stn"
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
              href="https://github.com/santuan/gatby-stn"
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
              href="https://soundcloud.com/santuuan"
            >
              <Fade duration={1750} delay={250}>
                <ImSoundcloud className="text-3xl text-white transition-all duration-700 group-hover:text-yellow-400" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-yellow-400">
                  Soundcloud
                </span>
              </Fade>
            </a>
            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://vimeo.com/user4126121"
            >
              <Fade duration={1750} delay={250}>
                <ImVimeo className="text-3xl text-white transition-all duration-700 group-hover:text-blue-300" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-blue-300">
                  Vimeo
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
            <a
              className="flex flex-col items-center justify-center py-2 mx-2 mb-6 font-mono text-xl font-bold duration-700 rounded-md group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitch.tv/stn9000"
            >
              <Fade duration={1750} delay={250}>
                <ImTwitch className="text-3xl text-white transition-all duration-700 group-hover:text-purple-500" />
              </Fade>
              <Fade bottom duration={2000} delay={200}>
                <span className="block mb-4 font-mono text-base text-gray-100 transition-all duration-700 group-hover:text-purple-500">
                  Twitch
                </span>
              </Fade>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
