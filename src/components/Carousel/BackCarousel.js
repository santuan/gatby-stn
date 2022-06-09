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
      <div className="fixed inset-0 z-0">
        <Carousel
          defaultWait={4000}
          maxTurns={99} /*wait for 1000 milliseconds*/
        >
          <Fade>
            <div>
              <StaticImage
                className="object-fill w-full min-h-screen"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748155/santuan/history/01_23_ccoxk6.jpg"
              />

              <StaticImage
                className="object-fill w-full min-h-screen"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654748282/santuan/history/01_24_atkuzw.jpg"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <StaticImage
                className="object-fill w-full min-h-screen"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_1024,q_auto:eco/v1654748288/santuan/history/01_75_giaebn.jpg"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <StaticImage
                className="object-fill w-full min-h-screen"
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/q_auto:eco/v1654747980/santuan/history/03_5_td0czs.jpg"
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
