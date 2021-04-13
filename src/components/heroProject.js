import React from "react"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import Wave from "./wave"

const HeroProject = (props) => (
  <div className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Fade duration={800} delay={600}>
        <Img
          className="mt-12"
          title={props.heading}
          alt={props.heading}
          fixed={props.logo}
        />
      </Fade>
    </div>
    <div className="overflow-hidden opacity-20" style={{ maxHeight: "60vh" }}>
      <Fade duration={1200}>
        <Img
          title={props.heading}
          alt={props.heading}
          fluid={props.image}
          className="object-cover w-full"
          style={{ minHeight: "100vh" }}
        />
      </Fade>
    </div>
    <Wave />
  </div>
)

export default HeroProject
