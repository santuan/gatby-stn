import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"
import { StaticImage } from "gatsby-plugin-image"

Autoplay.globalOptions = { delay: 10000 }

const EmblaCarouselDalleTokenOne = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [
    Autoplay(),
  ])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
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
      <div className="overflow-hidden bg-gray-900 shadow-2xl rounded-2xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654059963/santuan/tokens/1/DALL_E_2022-05-29_17.38.22_kcx7sw.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654059953/santuan/tokens/1/DALL_E_2022-05-29_17.38.13_kwe3bj.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654059943/santuan/tokens/1/DALL_E_2022-05-29_17.38.19_uzkkqn.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654060517/santuan/tokens/1/DALL_E_2022-05-29_17.39.23_undjh0.png"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://res.cloudinary.com/srcouto/image/upload/v1654061130/santuan/tokens/1/DALL_E_2022-05-29_17.39.25_s2co9s.png"
              />
            </div>
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
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

export default EmblaCarouselDalleTokenOne