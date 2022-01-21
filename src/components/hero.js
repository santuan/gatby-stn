import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import Wave from "./wave"
import { BsDot } from "react-icons/bs"

const Hero = (props) => (
  <div className="relative min-h-screen overflow-hidden md:max-h-screen">
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center pt-24 md:pt-0">
      <Fade duration={1800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="max-w-xl px-4 m-0 font-serif text-4xl text-center text-white md:text-6xl">
            {props.heading}
          </h1>
          <p className="px-6 mt-6 font-sans text-2xl text-center text-white">
            {props.excerpt}
          </p>
          <div className="flex flex-col items-center justify-center w-full px-4 mx-auto mt-3 ">
            <BsDot className="mx-3 mb-3 text-2xl text-white opacity-25" />
            <time className="m-0 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">
              {props.date}
            </time>
            <p className="m-0 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">
              Lectura de {props.readtime} 
            </p>
          </div>
        </AnchorLink>
      </Fade>
    </div>
          
    <div className="overflow-hidden bg-gray-900">
      <Fade duration={200}>
        <GatsbyImage
          title={props.heading}
          className="object-cover w-full min-h-screen opacity-20"
          alt={props.heading}
          image={props.image}
        />
      </Fade>
    </div>
    <Wave />
  </div>
)

export default Hero
