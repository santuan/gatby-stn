import React from "react"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import Wave from "./wave"

const HeroProject = (props) => (
  <div className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Fade duration={800} delay={600}>
        <GatsbyImage
          title={props.text}
          className="mt-12"
          alt={props.text}
          image={props.logo}
        />
      </Fade>
    </div>
    <div className="overflow-hidden opacity-20" style={{ maxHeight: "80vh" }}>
      <Fade duration={1200}>
        <GatsbyImage
          title={props.text}
          alt={props.text}
          className="object-cover w-full"
          image={props.image}
          style={{ minHeight: "100vh" }}
        />
      </Fade>
    </div>
    <Wave />
  </div>
)

export default HeroProject
