import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"
import { StaticImage } from "gatsby-plugin-image"

Autoplay.globalOptions = { delay: 10000 }

const EmblaCarousel = ({ hit }) => {
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
      <div className="overflow-hidden bg-gray-900 rounded-lg shadow-xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://www.santuan.com.ar/static/6909ba22c1eb132243cdfcb8116e17af/a764f/13_vrxkt2.jpg"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://www.santuan.com.ar/static/857bdbf30a37313db7d697cf4218caf1/a764f/12_vddpy4.jpg"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://www.santuan.com.ar/static/654d14ab112b907a26a0f49c5b5b7e8e/dbd40/untitled_i27pcx.jpg"
              />
            </div>
            <div className="embla__slide ">
              <StaticImage
                title="1"
                alt="1"
                src="https://www.santuan.com.ar/static/3367270de843aa94220b07037e1232bd/dbd40/04_rhcw2f.jpg"
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

export default EmblaCarousel
