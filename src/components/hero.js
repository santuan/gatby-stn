import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import Wave from "./wave"

const Hero = (props) => (
  <div className="relative">
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Fade duration={1800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="max-w-lg m-0 font-serif text-4xl text-center text-white md:text-6xl">{props.heading}</h1>
          <h1 className="max-w-lg m-0 mt-3 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">{props.date}</h1>
        </AnchorLink>
      </Fade>
    </div>
    <div className="overflow-hidden bg-gray-900">
      <Fade duration={200}>
        <Img title={props.heading} alt={props.heading} fixed={props.image} className="object-cover w-full" style={{minHeight: "70vh"}} />
      </Fade>
    </div>
    <Wave/>
  </div>
)

export default Hero

