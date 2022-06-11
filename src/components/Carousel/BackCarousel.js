import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
export default function BackgroundSlider(props) {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b-2 border-red-600">
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center py-32 overflow-hidden text-center text-white bg-gray-900 ">
      <div className="absolute inset-0 min-h-screen">
        <Carousel
          defaultWait={4000}
          maxTurns={99} /*wait for 1000 milliseconds*/
        >
          <Fade>
            <StaticImage
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="90"
              title="Una puerta con planetas digital art - Dall-E"
              alt="Una puerta con planetas digital art - Dall-E"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747810/santuan/history/01_19_jh8ikd.jpg"
            />
          </Fade>
          <Fade>
            <StaticImage
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="90"
              title="Una puerta con un universo dentro - Dall-E"
              alt="Una puerta con un universo dentro - Dall-E"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654021168/santuan/brave_sZaKiLy67X_ifqn0e.jpg"
            />
          </Fade>
          <Fade>
            <StaticImage
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="90"
              title="Una guitarra con una planta creciendo en su interior - Dall-E"
              alt="Una guitarra con una planta creciendo en su interior - Dall-E"
              src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.jpg"
            />
          </Fade>
          <Fade>
            <StaticImage
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="90"
              title="Un cuadro abstracto de figuras a en colores primarios - Dall-E"
              alt="Un cuadro abstracto de figuras a en colores primarios - Dall-E"
              src="https://res.cloudinary.com/srcouto/image/upload/v1654747878/santuan/history/ImageSequence030_wupe68.png"
            />
          </Fade>
          <Fade>
            <StaticImage
              className="object-fill w-full min-h-screen"
              layout="fullWidth"
              as="div"
              placeholder="blurred"
              loading="eager"
              quality="90"
              title="Un cuadro abstracto de figuras a en colores primarios - Dall-E"
              alt="Un cuadro abstracto de figuras a en colores primarios - Dall-E"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747800/santuan/history/ImageSequence032_mkwbse.jpg"
            />
          </Fade>
        </Carousel >
      </div >
    </div >
  )
}
