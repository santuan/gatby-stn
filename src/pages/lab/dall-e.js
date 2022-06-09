import { StaticImage } from "gatsby-plugin-image"
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import React from "react"
import ReactCompareImage from 'react-compare-image'
// import useEmblaCarousel from 'embla-carousel-react'
import Confetti from "react-dom-confetti"
import { Helmet } from "react-helmet"
import { BsArrowRight, BsArrowDownSquareFill } from "react-icons/bs"
import Fade from "react-reveal/Fade"
import CarouselTokenOne from "../../components/Carousel/EmblaCarouselDalleTokenOne"
import CarouselTokenThree from "../../components/Carousel/EmblaCarouselDalleTokenThree"
import CarouselTokenTwo from "../../components/Carousel/EmblaCarouselDalleTokenTwo"
import Carousel01 from "../../components/Carousel/Carousel01"
import Carousel02 from "../../components/Carousel/Carousel02"
import Carousel03 from "../../components/Carousel/Carousel03"
import Carousel04 from "../../components/Carousel/Carousel04"
import BackCarousel from "../../components/Carousel/BackCarousel"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AnchorLink from "react-anchor-link-smooth-scroll"
const DallePage = ({ data }) => {
  // const [emblaRef] = useEmblaCarousel()
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <Layout>
      <Helmet>
        <body className="project" />
      </Helmet>
      <Seo title={`Dall·E`}
        description={`Imágenes > OpenAI > Dall-E 2`} image="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1653960256/santuan/DALL_E_2022-05-27_22.39.14_unlacv.png" />
      <div className="flex flex-col justify-end w-full min-h-screen mx-auto text-center text-white bg-indigo-900">
        <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-center py-1 space-x-3 bg-gray-900/20">
          <AnchorLink href="#ejemplo1" className="w-24 px-2 py-1 font-mono text-xs font-medium text-center uppercase rounded-md shadow hover:bg-gray-900/50 bg-gray-900/20">
            Ejemplo 1
          </AnchorLink>
          <AnchorLink href="#ejemplo2" className="w-24 px-2 py-1 font-mono text-xs font-medium text-center uppercase rounded-md shadow hover:bg-gray-900/50 bg-gray-900/20">
            Ejemplo 2
          </AnchorLink>
          <AnchorLink href="#ejemplo3" className="w-24 px-2 py-1 font-mono text-xs font-medium text-center uppercase rounded-md shadow hover:bg-gray-900/50 bg-gray-900/20">
            Ejemplo 3
          </AnchorLink>
        </div>
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen pb-6 mx-auto overflow-hidden bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-emerald-500 to-indigo-600">
          <h3 className="relative z-10 flex items-center justify-center w-full px-4 mx-auto font-serif text-lg text-left md:text-3xl group max-w-7xl md:px-12">
            OpenAI
            <BsArrowRight className="mx-3" />
            <a href="https://openai.com/dall-e-2/" rel="noopener noreferrer" target="_blank" className="inline-block underline duration-300 underline-offset-2 decoration-emerald-500 group-hover:decoration-emerald-300 group-hover:text-emerald-300" >
              DALL·E 2
            </a>
          </h3>
          <h3 className="relative z-10 max-w-xl px-3 py-6 mx-auto font-mono text-xl">
            DALL·E 2 es un nuevo sistema de Inteligencia Artificial que puede crear imágenes y arte realistas a partir de una descripción en lenguaje natural.
          </h3>
          <AnchorLink href="#ejemplo1" className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center mb-12">
            <BsArrowDownSquareFill className="text-3xl animate-pulse" />
          </AnchorLink>
          <BackCarousel />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 flex items-center justify-center w-5/12 mx-auto transform select-none opacity-5">
            <svg id="openai" className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 51"><path d="M47.21,20.92a12.65,12.65,0,0,0-1.09-10.38A12.78,12.78,0,0,0,32.36,4.41,12.82,12.82,0,0,0,10.64,9a12.65,12.65,0,0,0-8.45,6.13,12.78,12.78,0,0,0,1.57,15A12.64,12.64,0,0,0,4.84,40.51a12.79,12.79,0,0,0,13.77,6.13,12.65,12.65,0,0,0,9.53,4.25A12.8,12.8,0,0,0,40.34,42a12.66,12.66,0,0,0,8.45-6.13A12.8,12.8,0,0,0,47.21,20.92ZM28.14,47.57a9.46,9.46,0,0,1-6.08-2.2l.3-.17,10.1-5.83a1.68,1.68,0,0,0,.83-1.44V23.69l4.27,2.47a.15.15,0,0,1,.08.11v11.8A9.52,9.52,0,0,1,28.14,47.57ZM7.72,38.85a9.45,9.45,0,0,1-1.13-6.37l.3.18L17,38.49a1.63,1.63,0,0,0,1.65,0L31,31.37V36.3a.17.17,0,0,1-.07.13L20.7,42.33A9.51,9.51,0,0,1,7.72,38.85Zm-2.66-22a9.48,9.48,0,0,1,5-4.17v12a1.62,1.62,0,0,0,.82,1.43L23.17,33.2,18.9,35.67a.16.16,0,0,1-.15,0L8.54,29.78A9.52,9.52,0,0,1,5.06,16.8ZM40.14,25,27.81,17.84l4.26-2.46a.16.16,0,0,1,.15,0l10.21,5.9A9.5,9.5,0,0,1,41,38.41v-12A1.67,1.67,0,0,0,40.14,25Zm4.25-6.39-.3-.18L34,12.55a1.64,1.64,0,0,0-1.66,0L20,19.67V14.74a.14.14,0,0,1,.06-.13L30.27,8.72a9.51,9.51,0,0,1,14.12,9.85ZM17.67,27.35,13.4,24.89a.17.17,0,0,1-.08-.12V13a9.51,9.51,0,0,1,15.59-7.3l-.3.17-10.1,5.83a1.68,1.68,0,0,0-.83,1.44Zm2.32-5,5.5-3.17L31,22.35v6.34l-5.49,3.17L20,28.69Z"></path></svg></div>
          <div className="absolute inset-0 bg-gray-900/80 " />
        </div>
        <div id="ejemplo1" className="relative grid w-full pb-12 mx-auto scroll-mt-10 xl:grid-cols-2 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-indigo-600 to-emerald-500">
          <div className="self-start text-left xl:sticky top-24">
            <div className="flex flex-col w-full max-w-lg px-3 py-24 pt-40 mx-auto font-mono text-xl">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">Ejemplo 1</small>
              Mismo texto con diferentes estilos.
              <p className="relative mt-3 font-serif text-6xl">
                <span className="absolute text-6xl -top-1 -left-7 opacity-60">&ldquo;</span>Un conejo en paracaidas con una zanahoria.&rdquo; <br />
                <span className="mt-6 font-mono text-sm">3d render / Pintura</span>
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-xl gap-12 px-2 py-12 mx-auto">
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold ">
                <ReactCompareImage
                  sliderPositionPercentage="0.8"
                  handleSize="30"
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018509/santuan/DALL_E_2022-05-29_10.31.54_rgditm.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018485/santuan/DALL_E_2022-05-29_10.34.24_dnxu0u.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#fff"
                />
              </div>
              <Loading />
            </div>
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold ">
                <ReactCompareImage
                  sliderPositionPercentage="0.2"
                  handleSize="30"
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057962/santuan/DALL_E_2022-05-29_10.31.57_zplkhy.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058047/santuan/DALL_E_2022-05-29_10.34.15_alvgso.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#fff"
                />
              </div>
              <Loading />
            </div>
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold ">
                <ReactCompareImage
                  sliderPositionPercentage="0.33"
                  handleSize="30"
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057970/santuan/DALL_E_2022-05-29_10.31.50_boam6y.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058032/santuan/DALL_E_2022-05-29_10.33.57_jadsvm.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#fff"
                />
              </div>
              <Loading />
            </div>
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold ">
                <ReactCompareImage
                  sliderPositionPercentage="0.66"
                  handleSize="30"
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057987/santuan/DALL_E_2022-05-29_10.31.59_hgtqxf.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058046/santuan/DALL_E_2022-05-29_10.34.00_ekoxis.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#fff"
                />
              </div>
              <Loading />
            </div>
          </div>
        </div>
        <div id="ejemplo2" className="relative grid w-full pb-12 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-indigo-600 to-emerald-500">
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-12 font-serif text-3xl text-center ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">Ejemplo 2</small>
              Subir imágenes de referencia y generar variaciones.
            </div>
          </div>
          <div className="grid max-w-lg gap-3 px-6 mx-auto lg:gap-12 xl:max-w-5xl xl:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Original en Blender
              </p>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  className="object-fill w-full xl:h-[495px]"
                  title="3d render de Cuadrado blanco en cubos rojos"
                  alt="3d render de Cuadrado blanco en cubos rojos"
                  src="https://www.santuan.com.ar/static/6909ba22c1eb132243cdfcb8116e17af/a764f/13_vrxkt2.jpg"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Dall·E
              </p>
              <CarouselTokenOne />
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Original en Blender
              </p>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  className="object-fill w-full xl:h-[495px]"
                  title="Una demostración de Dall-E"
                  alt="Una demostración de Dall-E"
                  src="https://www.santuan.com.ar/static/654d14ab112b907a26a0f49c5b5b7e8e/dbd40/untitled_i27pcx.jpg"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Dall·E
              </p>
              <CarouselTokenTwo />
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Original en Blender
              </p>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  className="object-fill w-full xl:h-[495px]"
                  title="Una demostración de Dall-E"
                  alt="Una demostración de Dall-E"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654817026/santuan/tokens/2_iutptm_j66y1p.jpg"
                />
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-sm text-center">
                Dall·E
              </p>
              <CarouselTokenThree />
            </div>
          </div>
        </div>

        <div id="ejemplo3" className="relative grid w-full px-6 pb-64 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-emerald-500 to-gray-900">
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-6 font-serif text-xl text-center md:text-3xl ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">Ejemplo 3</small>
              Variaciones de una secuencia de palabras, multiples maneras de percibirlas.
            </div>
          </div>
          <div className="grid w-full max-w-6xl mx-auto overflow-hidden md:grid-cols-2 rounded-2xl lg:grid-cols-4">
            <Carousel01 />
            <Carousel04 />
            <Carousel02 />
            <Carousel03 />
          </div>
        </div>


        <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-gray-900/90 ">
          <Fade duration={1000} delay={300}>
            <div className="relative z-50 max-w-2xl p-8 mx-auto mt-6 mb-6 font-serif prose text-center md:prose-lg ">
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
      </div>
    </Layout>
  )
}

export default DallePage



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

const Loading = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center select-none bg-black/20">
      <div className="w-16 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-white" viewBox="0 0 38 38">
          <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};
