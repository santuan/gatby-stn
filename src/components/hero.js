import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import Wave from "./wave"
import { BsDot } from "react-icons/bs"

const Hero = (props) => (
  <div className="relative">
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Fade duration={1800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="max-w-xl px-4 m-0 font-serif text-4xl text-center text-white md:text-6xl">
            {props.heading}
          </h1>
          <h3 className="px-6 mt-6 font-sans text-2xl text-center text-white">
            {props.excerpt}
          </h3>
          <div className="flex items-center justify-center w-full px-4 mx-auto mt-3 ">
            <time className="m-0 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">
              {props.date}
            </time>
            <BsDot className="mx-3 text-2xl text-white" />
            <p className="m-0 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">
              {props.readtime}
            </p>
          </div>
        </AnchorLink>
      </Fade>
    </div>
    <div className="overflow-hidden bg-gray-900">
      <Fade duration={200}>
        <Img
          title={props.heading}
          alt={props.heading}
          fixed={props.image}
          className="object-cover w-full opacity-20"
          style={{ minHeight: "70vh" }}
        />
      </Fade>
    </div>
    <Wave />
  </div>
)

export default Hero
