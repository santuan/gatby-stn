import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"

const SliderHomeAboutComponent = (props) => {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="absolute inset-0 z-0 w-full h-screen mb-0 overflow-hidden opacity-95">
      {props.arrows ? (
        <div className="relative max-w-2xl mx-auto ">
          <button
            className="absolute left-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="absolute right-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </button>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-opacity-50 bottom-2">
            {Array(...Array(total)).map((val, index) => (
              <button
                className="mx-1 text-4xl text-blue-800 cursor-pointer"
                key={index}
                onClick={handleClick}
                data-position={index}
              >
                {index === position ? (
                  <BiRadioCircleMarked />
                ) : (
                  <BiRadioCircle />
                )}
              </button>
            ))}
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)

  return (
    <>
      <Carousel
        defaultWait={4200}
        maxTurns={100} /*wait for 1000 milliseconds*/
      >
        
        <Fade>
          <div className="relative w-auto h-screen md:w-full md:h-full">
            <StaticImage
              title="item"
              className="object-cover w-auto h-screen md:w-full md:h-full"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030311/stn-renders/345_tw9zas.jpg"
            />
          </div>
        </Fade>
        <Fade>
          <div className="relative w-auto h-screen md:w-full md:h-full">
            <StaticImage
              title="item"
              className="object-cover w-auto h-screen md:w-full md:h-full"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213764/stn-renders/_h1_vmxxse.jpg"
            />
          </div>
        </Fade>
        <Fade>
          <div className="relative w-auto h-screen md:w-full md:h-full">
            <StaticImage
              title="item"
              className="object-cover w-auto h-screen md:w-full md:h-full"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215725/stn-renders/12_vddpy4.jpg"
            />
          </div>
        </Fade>
        <Fade>
          <div className="relative w-auto h-screen md:w-full md:h-full">
            <StaticImage
              title="item"
              className="object-cover w-auto h-screen md:w-full md:h-full"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215823/stn-renders/02_blemta.jpg"
            />
          </div>
        </Fade>

      </Carousel>
    </>
  )
}

export default SliderHomeAboutComponent
