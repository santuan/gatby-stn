import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton } from "./EmblaCarouselButtons"
import { StaticImage } from "gatsby-plugin-image"

Autoplay.globalOptions = { delay: 50000 }

const Carousel03 = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [
  ])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])
  return (
    <>
      <div className="overflow-hidden bg-gray-900 embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <StaticImage
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654747828/santuan/history/01_68_z7izax.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654747825/santuan/history/01_63_ga6ipb.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654747796/santuan/history/01_69_lz2jig.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654747778/santuan/history/01_66_vtipyc.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="Una demostración de Dall-E"
                alt="Una demostración de Dall-E"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654747673/santuan/history/01_65_utmpcx.png"
              />
            </div>
          </div>
        </div>
     
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel03
