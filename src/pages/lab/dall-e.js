import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ReactCompareImage from "react-compare-image"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Helmet } from "react-helmet"
import { BsArrowDownSquareFill, BsArrowRight, BsArrowsExpand } from "react-icons/bs"
import { SRLWrapper } from "simple-react-lightbox"
import BackCarousel from "../../components/Carousel/BackCarousel"
import Carousel01 from "../../components/Carousel/Carousel01"
import Carousel02 from "../../components/Carousel/Carousel02"
import Carousel03 from "../../components/Carousel/Carousel03"
import Carousel04 from "../../components/Carousel/Carousel04"
import MenuDropdownPages from "../../components/headlessui/MenuDropdownPages"
import CarouselTokenOne from "../../components/Carousel/EmblaCarouselDalleTokenOne"
import CarouselTokenThree from "../../components/Carousel/EmblaCarouselDalleTokenThree"
import CarouselTokenTwo from "../../components/Carousel/EmblaCarouselDalleTokenTwo"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DallePage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <body className="gallerys" />
      </Helmet>
      <Seo
        title={`Dall·E`}
        description={`Imágenes > OpenAI > Dall-E 2`}
        image="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1653960256/santuan/DALL_E_2022-05-27_22.39.14_unlacv.png"
      />
      <MenuDropdownPages />
      <div id="intro" className="flex flex-col justify-end w-full min-h-screen mx-auto text-center text-white bg-indigo-900">
        <div className="relative flex flex-col items-center justify-center w-full min-h-screen pb-6 mx-auto overflow-hidden bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-transparent via-transparent to-red-600">
          <h3 className="relative z-10 flex items-center justify-center w-full px-4 mx-auto font-serif text-lg text-left md:text-3xl group max-w-7xl md:px-12">
            OpenAI
            <BsArrowRight className="mx-3" />
            <a
              href="https://openai.com/dall-e-2/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block underline duration-300 underline-offset-2 decoration-emerald-500 group-hover:decoration-emerald-300 group-hover:text-emerald-300"
            >
              DALL·E 2
            </a>
          </h3>
          <p className="relative z-10 max-w-xl px-3 py-6 mx-auto font-mono text-xl">
            DALL·E 2 es un nuevo sistema de Inteligencia Artificial que puede
            crear imágenes y arte realistas a partir de una descripción en
            lenguaje natural.
          </p>
          <AnchorLink
            href="#ejemplo1"
            aria-label="Ir al primer ejemplo"
            className="z-10 flex items-center justify-center"
          >
            <BsArrowDownSquareFill className="text-3xl animate-pulse" />
          </AnchorLink>
          <BackCarousel />
          <div className="absolute top-0 bottom-0 left-0 right-0 z-0 flex items-center justify-center w-1/5 mx-auto text-transparent transform opacity-100 select-none ">
            <svg
              id="openai"
              className="relative z-10 fill-current animate-pulse -translate-y-7 text-gray-100/30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 51"
            >
              <path d="M47.21,20.92a12.65,12.65,0,0,0-1.09-10.38A12.78,12.78,0,0,0,32.36,4.41,12.82,12.82,0,0,0,10.64,9a12.65,12.65,0,0,0-8.45,6.13,12.78,12.78,0,0,0,1.57,15A12.64,12.64,0,0,0,4.84,40.51a12.79,12.79,0,0,0,13.77,6.13,12.65,12.65,0,0,0,9.53,4.25A12.8,12.8,0,0,0,40.34,42a12.66,12.66,0,0,0,8.45-6.13A12.8,12.8,0,0,0,47.21,20.92ZM28.14,47.57a9.46,9.46,0,0,1-6.08-2.2l.3-.17,10.1-5.83a1.68,1.68,0,0,0,.83-1.44V23.69l4.27,2.47a.15.15,0,0,1,.08.11v11.8A9.52,9.52,0,0,1,28.14,47.57ZM7.72,38.85a9.45,9.45,0,0,1-1.13-6.37l.3.18L17,38.49a1.63,1.63,0,0,0,1.65,0L31,31.37V36.3a.17.17,0,0,1-.07.13L20.7,42.33A9.51,9.51,0,0,1,7.72,38.85Zm-2.66-22a9.48,9.48,0,0,1,5-4.17v12a1.62,1.62,0,0,0,.82,1.43L23.17,33.2,18.9,35.67a.16.16,0,0,1-.15,0L8.54,29.78A9.52,9.52,0,0,1,5.06,16.8ZM40.14,25,27.81,17.84l4.26-2.46a.16.16,0,0,1,.15,0l10.21,5.9A9.5,9.5,0,0,1,41,38.41v-12A1.67,1.67,0,0,0,40.14,25Zm4.25-6.39-.3-.18L34,12.55a1.64,1.64,0,0,0-1.66,0L20,19.67V14.74a.14.14,0,0,1,.06-.13L30.27,8.72a9.51,9.51,0,0,1,14.12,9.85ZM17.67,27.35,13.4,24.89a.17.17,0,0,1-.08-.12V13a9.51,9.51,0,0,1,15.59-7.3l-.3.17-10.1,5.83a1.68,1.68,0,0,0-.83,1.44Zm2.32-5,5.5-3.17L31,22.35v6.34l-5.49,3.17L20,28.69Z"></path>
            </svg>
          </div>
          <div className="absolute inset-0 z-0 bg-black/80 bg-gradient-to-b from-transparent via-transparent to-indigo-700" />
        </div>
        <div
          id="ejemplo1"
          className="relative grid w-full pb-12 mx-auto scroll-mt-20 xl:grid-cols-2 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-indigo-700 to-red-700"
        >
          <div className="self-start text-left xl:sticky top-24">
            <div className="flex flex-col w-full max-w-xl px-8 py-24 pt-24 mx-auto font-mono text-lg md:text-xl">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">
                Ejemplo 1
              </small>
              Generar textos con diferentes estilos.
              <p className="relative flex flex-col mt-3 font-serif text-4xl md:text-6xl">
                <span className="absolute text-6xl -top-1 -left-7 opacity-60">
                  &ldquo;
                </span>
                Un conejo en paracaidas con una zanahoria.
                <span className="mt-6 font-mono text-sm">
                  3d render | Pintura
                </span>
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-xl gap-12 px-2 py-12 mx-auto">
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage ">
                <ReactCompareImage
                  sliderPositionPercentage="0.28"
                  handleSize="30"
                  hover="true"
                  handle={<button type="button" aria-label="Manija de comparación de imágenes" className="flex items-center justify-center w-12 h-12 overflow-hidden text-2xl text-[#3a30a6] rotate-90 border-4 border-current rounded-full bg-gray-100/95"><BsArrowsExpand /></button>}
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057962/santuan/DALL_E_2022-05-29_10.31.57_zplkhy.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058047/santuan/DALL_E_2022-05-29_10.34.15_alvgso.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#3a30a6"
                />
              </div>
              <Loading />
            </div>
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage ">
                <ReactCompareImage
                  sliderPositionPercentage="0.28"
                  handleSize="30"
                  hover="true"
                  handle={<button type="button" aria-label="Manija de comparación de imágenes" className="flex items-center justify-center w-12 h-12 overflow-hidden text-2xl text-[#6e2d8a] rotate-90 border-4 border-current rounded-full bg-gray-100/95"><BsArrowsExpand /></button>}
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018509/santuan/DALL_E_2022-05-29_10.31.54_rgditm.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018485/santuan/DALL_E_2022-05-29_10.34.24_dnxu0u.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#6e2d8a"
                />
              </div>
              <Loading />
            </div>

            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage ">
                <ReactCompareImage
                  sliderPositionPercentage="0.28"
                  handleSize="30"
                  hover="true"
                  handle={<button type="button" aria-label="Manija de comparación de imágenes" className="flex items-center justify-center w-12 h-12 overflow-hidden text-2xl text-[#8b265f] rotate-90 border-4 border-current rounded-full bg-gray-100/95"><BsArrowsExpand /></button>}
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057970/santuan/DALL_E_2022-05-29_10.31.50_boam6y.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058032/santuan/DALL_E_2022-05-29_10.33.57_jadsvm.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#8b265f"
                />
              </div>
              <Loading />
            </div>
            <div className="relative max-w-lg overflow-hidden rounded-br-none rounded-2xl">
              <div className="relative z-10 w-full mx-auto overflow-hidden font-mono text-xs font-bold compareImage ">
                <ReactCompareImage
                  sliderPositionPercentage="0.28"
                  handleSize="30"
                  hover="true"
                  handle={<button type="button" aria-label="Manija de comparación de imágenes" className="flex items-center justify-center w-12 h-12 overflow-hidden text-2xl text-[#a62037] rotate-90 border-4 border-current rounded-full bg-gray-100/95"><BsArrowsExpand /></button>}
                  leftImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057987/santuan/DALL_E_2022-05-29_10.31.59_hgtqxf.jpg"
                  rightImage="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058046/santuan/DALL_E_2022-05-29_10.34.00_ekoxis.jpg"
                  leftImageLabel="3d Render"
                  rightImageLabel="Pintura"
                  sliderLineColor="#a62037"
                />
              </div>
              <Loading />
            </div>
          </div>
        </div>
        <div
          id="ejemplo2"
          className="relative grid w-full pb-12 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-red-700 to-amber-600"
        >
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-12 font-serif text-3xl text-center ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">
                Ejemplo 2
              </small>
              Subir imágenes de referencia y generar variaciones.
            </div>
          </div>
          <div className="grid max-w-lg gap-3 px-6 mx-auto lg:gap-12 xl:max-w-5xl xl:grid-cols-2">
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  className="object-cover object-center w-full xl:h-[495px]"
                  title="3d render de Cuadrado blanco en cubos rojos"
                  alt="3d render de Cuadrado blanco en cubos rojos"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_fill,h_495,q_80,w_495/v1654827280/santuan/tokens/14_bmzdy6_i7uuki.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-red-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenOne />
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  title="Render 3d - una luz blanca atravezando una pieza hueca y con agujeros sobre un fondo azul"
                  alt="Render 3d - una luz blanca atravezando una pieza hueca y con agujeros sobre un fondo azul"
                  className="object-cover object-center w-full xl:h-[495px]"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654817028/santuan/tokens/untitled_i27pcx_evplpa.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-blue-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenTwo />
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-amber-900/80">Original en Blender</p>
              </div>
              <div className="relative overflow-hidden shadow-2xl rounded-2xl">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  width={495}
                  height={495}
                  alt="Render - un monumento observando a  un triangulo, un cuadrado y una esfera sobre un fondo blanco en un dia con nubes."
                  title="Render - un monumento observando a  un triangulo, un cuadrado y una esfera sobre un fondo blanco en un dia con nubes."
                  className="object-cover object-center w-full xl:h-[495px]"
                  src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_500,w_500/v1654817026/santuan/tokens/2_iutptm_j66y1p.jpg"
                />
              </div>
            </div>
            <div className="relative z-10">
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center m-2">
                <p className="px-3 py-1 font-mono text-xs rounded-full bg-amber-900/80">Variaciones de Dall·E</p>
              </div>
              <CarouselTokenThree />
            </div>
          </div>
        </div>

        <div
          id="ejemplo3"
          className="relative grid w-full px-6 pb-64 mx-auto scroll-mt-10 bg-gray-900/50 bg-opacity-30 bg-gradient-to-b from-amber-600 via-amber-600 to-yellow-400"
        >
          <div className="max-w-xl px-6 pt-12 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-3 pt-24 pb-6 font-serif text-xl text-center md:text-3xl ">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center uppercase rounded-md shadow bg-gray-900/20">
                Ejemplo 3
              </small>
              Variaciones de una secuencia de palabras, multiples maneras de
              percibirlas.
            </div>
          </div>
          <div className="grid w-full max-w-6xl gap-3 mx-auto md:grid-cols-1 lg:grid-cols-2">
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">En un castillo flotando en el cielo.</p>
              </div>
              <Carousel01 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">Un rey conejo.</p>
              </div>
              <Carousel04 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">Dos roedores disfrutaban una taza de té junto al fuego del hogar.</p>
              </div>
              <Carousel02 />
            </div>
            <div className="relative grid grid-cols-2 gap-0 overflow-hidden duration-300 shadow-lg hover:ring-2 ring-0 hover:ring-offset-2 hover:ring-offset-yellow-700 ring-amber-700 rounded-2xl">
              <div className="flex flex-col items-center justify-center w-full p-5 text-gray-900 bg-amber-200/80">
                <p className="w-full font-serif text-lg font-bold text-left md:text-2xl ">Un conejo en paracaidas con una zanahoria.</p>
              </div>
              <Carousel03 />
            </div>
          </div>
        </div>
        <SRLWrapper options={options}>
          <div className="grid grid-cols-2 gap-1 p-1 from-yellow-400 bg-gradient-to-b via-yellow-500 to-gray-900 scroll-mt-24 md:grid-cols-3" id="ejemplo4">
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Pintura de un rey conejo"
              title="Pintura de un rey conejo"
              className="object-cover hover:opacity-80 duration-300 rounded-tl-2xl md:rounded-tl-none rounded-tr-2xl overflow-hidden object-center w-full cursor-pointer xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748378/santuan/history/01_13_spdx0t.png"
            />

            <div className="flex flex-col items-center justify-center w-full px-3 font-serif text-2xl text-center text-gray-700 md:text-4xl">
              <small className="w-24 px-2 py-1 mb-3 font-mono text-xs font-medium text-center text-white uppercase rounded-md shadow bg-gray-900/50">
                Ejemplo 4
              </small>
              Por generación espontánea <span role="img" className="duration-300 transform translate-y-3 hover:translate-y-6 cursor-grab active:cursor-grabbing active:scale-110">😊</span>
            </div>
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Un congreso de gatos votando meow "
              title="Un congreso de gatos votando meow "
              className="object-cover hover:opacity-80 duration-300 md:rounded-tl-2xl cursor-pointer overflow-hidden object-center w-full xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747690/santuan/history/01_0_tes00q.png"
            />
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Render - Un oceano repleto de barquitos bajo una constelación de galaxias"
              title="Render - Un oceano repleto de barquitos bajo una constelación de galaxias"
              className="object-cover hover:opacity-80 duration-300  cursor-pointer object-center w-full xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747810/santuan/history/01_19_jh8ikd.jpg"
            />

            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Una guitarra con una planta creciendo en su interior"
              title="Una guitarra con una planta creciendo en su interior"
              className="object-cover hover:opacity-80 duration-300 col-span-2 md:col-span-1 object-center w-full cursor-pointer xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.jpg"
            />
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Pintura de Una ciudad de tardenoche con una luna brillando como un sol"
              title="Pintura de Una ciudad de tardenoche con una luna brillando como un sol"
              className="object-cover hover:opacity-80 duration-300 object-center w-full cursor-pointer xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748221/santuan/history/01_79_bewrli.png"
            />
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Arte digital de una niña sobre una casa en el arbol."
              title="Arte digital de una niña sobre una casa en el arbol."
              className="object-cover hover:opacity-80 duration-300 object-center w-full cursor-pointer xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747800/santuan/history/ImageSequence032_mkwbse.jpg"
            />
            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Un conejo escuchando la radio - arte digital "
              title="Un conejo escuchando la radio - arte digital "
              className="object-cover hover:opacity-80 duration-300  cursor-pointer overflow-hidden object-center w-full xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747651/santuan/history/01_4_fitcxc.png"
            />

            <StaticImage
              as="div"
              placeholder="blurred"
              layout="constrained"
              loading="lazy"
              quality="90"
              width={800}
              height={800}
              alt="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
              title="Arte digital de una habitacion con una ventana gigante con una persona flotando en una nube"
              className="object-cover hover:opacity-80 duration-300 object-center w-full cursor-pointer xl:h-[495px]"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747878/santuan/history/ImageSequence030_wupe68.png"
            />
          </div>
        </SRLWrapper>


      </div>
    </Layout>
  )
}

export default DallePage


const options = {
  buttons: {
    iconPadding: "5px",
    showDownloadButton: false,
    backgroundColor: "rgba(0, 0, 0, .5)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    showNextButton: true,
    showPrevButton: true,
  },
  caption: {
    captionFontSize: "15px",
    captionAlignment: "center",
    captionColor: "#a7825f",
    captionFontWeight: 300,
    showCaption: false,
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, .9)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 4000,
    disablePanzoom: true,
    hideControlsAfter: true,
  },
  translations: {
    autoplayText: "Play",
    closeText: "Cerrar",
    downloadText: "Descargar",
    fullscreenText: "Pantalla completa",
    nextText: "Siguiente",
    pauseText: "Pausa",
    previousText: "Anterior",
    thumbnailsText: "Miniaturas",
    zoomOutText: "Zoom Out",
  },
  progressBar: {
    height: "4px",
    fillColor: "rgb(0, 0, 0)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  thumbnails: {
    showThumbnails: false,
  },
}


const Loading = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center select-none bg-black/20">
      <div className="w-16 h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white"
          viewBox="0 0 38 38"
        >
          <g
            transform="translate(1 1)"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          >
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  )
}
