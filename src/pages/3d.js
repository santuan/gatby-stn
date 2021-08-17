import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CgInstagram } from "react-icons/cg"

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
    disablePanzoom: false,
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
    showThumbnails: true,
  },
}

export default function BackgroundSlider() {
  return (
    <Layout>
      <Seo title="3d" pathname={`/3d/`} />
      <Helmet>
        <body className="contact" />
      </Helmet>
      <SRLWrapper options={options}>
        <div className="relative z-20 w-full bg-black bg-pattern ">
          <div className="grid grid-cols-3 gap-6 p-6 pt-24 mx-auto md:gap-1 md:p-0 md:pt-20">
            <Fade>
              <div className="relative cursor-pointer">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213764/stn-renders/_h1_vmxxse.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213756/stn-renders/_h2_oiho30.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233372/stn-renders/_h3_xjzkrc.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215360/stn-renders/k_vjbeow.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233211/stn-renders/k3_arwhkt.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233248/stn-renders/k5_nzy74z.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215725/stn-renders/12_vddpy4.png"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232392/stn-renders/14_bmzdy6.png"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232389/stn-renders/13_vrxkt2.png"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:col-span-3 md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232358/stn-renders/18_ec7kli.png"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233952/stn-renders/04_rhcw2f.png"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215823/stn-renders/02_blemta.png"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen cursor-pointer md:w-full md:h-full">
                <StaticImage
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233957/stn-renders/01_ujdfvc.png"
                />
              </div>
            </Fade>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full p-3 py-64 overflow-hidden font-mono text-6xl text-center text-yellow-700 duration-200 bg-fixed opacity-80 hover:opacity-100 bg-gradient-to-br from-gray-800 to-gray-900">
            <a
              href="https://www.instagram.com/stn9000/"
              className="relative z-20 flex items-center justify-center px-6 py-3 duration-200 border-2 border-yellow-700 rounded-md hover:border-indigo-600 hover:text-indigo-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgInstagram className="mr-3" />
              STN9000
            </a>
            <div className="absolute inset-0 z-10">
              <StaticImage
                title="instagram @stn9000"
                className="object-cover w-full h-full duration-200 md:w-full hover:opacity-60"
                alt="instagram @stn9000"
                src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629238430/stn-renders/11_vhlp38.png"
              />
            </div>
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  )
}
