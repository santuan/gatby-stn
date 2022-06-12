import React from "react"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GoLinkExternal } from "react-icons/go"
import { Link } from "gatsby"

export default function BackgroundSlider() {
  return (
    <Layout>
      <Seo title="Galería" pathname={`/galeria/`} />
      <Helmet>
        <body className=" gallery" />
      </Helmet>
      <div className="fixed bottom-0 left-0 right-0 z-50 px-3 py-2 font-mono text-sm text-center text-white bg-gray-800 bg-opacity-70 ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-white opacity-80 hover:opacity-100"
          href="https://www.blender.org/"
        >
          <span className="inline-block">Hecho en</span> Blender{" "}
          <GoLinkExternal className="inline-block" />
        </a>
      </div>

      <div className="absolute left-0 right-0 z-50 flex items-center justify-center w-full px-3 py-2 font-mono text-sm text-white top-3/4 md:hidden">
        <Link
          rel="noopener noreferrer"
          ariaLabel="Ver 3d "
          className="relative inline-flex items-center justify-center px-3 py-1 font-mono text-xs font-bold text-center text-white uppercase duration-1000 transform rounded-md bg-gradient-to-br from-emerald-600 to-indigo-600"
          to="/lab/dall-e"
        >
          <span className="inline-block">Ver ejemplos en DALL·E 2</span>
        </Link>
      </div>

      <SRLWrapper options={options}>
        <div className="relative z-20 w-full bg-black bg-pattern ">
          <div className="grid grid-cols-1 gap-3 p-3 pt-24 mx-auto sm:grid-cols-1 md:grid-cols-3 md:gap-1 md:p-0 md:pt-24">
            <Fade>
              <div className="relative hidden w-auto h-screen col-span-3 md:block md:w-full md:h-full md:col-span-1"></div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 md:w-full md:h-full md:col-span-1">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,h_625,q_75/v1642599935/stn-renders/1230001-0500_mss0pe.webp"
                >
                  <source
                    src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1642599935/stn-renders/1230001-0500_mss0pe.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1642599935/stn-renders/1230001-0500_mss0pe.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1642599935/stn-renders/1230001-0500_mss0pe.ogv"
                    type="video/ogg"
                  />
                </video>
              </div>
            </Fade>

            <Fade>
              <div className="relative hidden w-auto h-screen col-span-3 md:block md:w-full md:h-full md:col-span-1"></div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030301/stn-renders/567_vpomfk.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/456_xcnfky.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/789_itwybi.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030309/stn-renders/234_vanwyt.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030311/stn-renders/345_tw9zas.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="900"
                  width="900"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030314/stn-renders/123_lw5jtv.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="749"
                  width="1332"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630559191/stn-renders/untitled_i27pcx.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/1_a6qw3t.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476563/stn-renders/2_iutptm.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/3_nveu2c.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative cursor-pointer">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213764/stn-renders/_h1_vmxxse.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213756/stn-renders/_h2_oiho30.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233372/stn-renders/_h3_xjzkrc.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215360/stn-renders/k_vjbeow.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233211/stn-renders/k3_arwhkt.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233248/stn-renders/k5_nzy74z.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556711/stn-renders/03_m7w1gy.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556712/stn-renders/02_txgqvw.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="900"
                  width="900"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556713/stn-renders/01_rnph0p.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="864"
                  width="1536"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215725/stn-renders/12_vddpy4.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  height="864"
                  width="1536"
                  quality="90"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232392/stn-renders/14_bmzdy6.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="864"
                  width="1536"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232389/stn-renders/13_vrxkt2.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="864"
                  width="1536"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232358/stn-renders/18_ec7kli.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  title="item"
                  height="864"
                  width="1536"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233952/stn-renders/04_rhcw2f.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  title="item"
                  height="864"
                  width="1536"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215823/stn-renders/02_blemta.jpg"
                />
              </div>
            </Fade>

            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full md:col-span-1">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  title="item"
                  height="864"
                  width="1536"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233957/stn-renders/01_ujdfvc.jpg"
                />
              </div>
            </Fade>
            <Fade>
              <div className="relative w-auto h-screen col-span-3 cursor-pointer md:w-full md:h-full">
                <StaticImage
                  as="div"
                  placeholder="blurred"
                  layout="constrained"
                  loading="lazy"
                  quality="90"
                  height="864"
                  width="1536"
                  title="item"
                  className="object-cover w-auto h-screen duration-200 md:w-full md:h-full hover:opacity-60"
                  alt="item"
                  src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629238430/stn-renders/11_vhlp38.jpg"
                />
              </div>
            </Fade>
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  )
}


const options = {
  buttons: {
    iconPadding: "5px",
    showDownloadButton: true,
    backgroundColor: "rgba(0, 0, 0, .5)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    showNextButton: true,
    showPrevButton: true,
    size: "30px",
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
