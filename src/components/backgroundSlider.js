import React from "react"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"

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
    <div className="fixed inset-0 flex flex-col items-center justify-center py-32 overflow-hidden text-center text-white bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Carousel
          defaultWait={4000}
          maxTurns={99} /*wait for 1000 milliseconds*/
        >
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/4i5m0UMlY0mEC0dpJTGG2r/c1cb5205a7fe69a9f16e2a7da79d313b/brave_6MWMv6ZXaK.jpg?w=1920&h=948&q=80"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/2eUYezIGT4m8SXNIkdcSkQ/5a5d953343ebf1a450fb39eb120b10de/image.png?w=2000&h=1126&q=80"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/2SXonYeyDbY0tRSQggn8EP/d5834bdc3e95886563205881e9239b7d/brave_aGc4ZshfSZ.jpg?w=1293&h=658&q=80"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/61T36mBl14fnqAUeQrQ3l3/55db659ec8c364be2de9b69af886f5fd/photo-1523053155959-8de8d942050c?w=1000&h=667&q=80"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/3N22NTN4bshQnnGnk5xNXn/315b3e8fd984b7ea2df459c0865467cd/color-hunt-palettes-og.png?w=1200&h=628&q=80"
              />
            </div>
          </Fade>
          <Fade>
            <div>
              <img
                className="object-cover w-full h-screen opacity-20"
                alt=""
                width="1800"
                height="800"
                src="https://images.ctfassets.net/hamax8g2qtd6/2x2Vv1AcALPyhgVVi8ktkY/cd8e7a04b9316eea68f525a979f7592b/wdl-575-md.193f8e72b24c.jpg?w=1920&h=640&q=80"
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  )
}
