import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import Wave from "./wave"

const Hero = (props) => (
  <Heros>
    <TextContainer>
      <Fade duration={1800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="max-w-lg m-0 font-serif text-4xl text-center text-white md:text-6xl">{props.heading}</h1>
          <h1 className="max-w-lg m-0 mt-3 font-mono text-lg text-center text-white uppercase opacity-75 md:text-lg">{props.date}</h1>
        </AnchorLink>
      </Fade>
    </TextContainer>
    <ImgContainer>
      <Fade duration={200}>
        <Img title={props.heading} alt={props.heading} fixed={props.image} className="object-cover w-full" style={{minHeight: "70vh"}} />
      </Fade>
    </ImgContainer>
    <Wave/>
  </Heros>
)

export default Hero

const Heros = styled.div`
  ${tw`relative`}
`

const TextContainer = styled.header`
  ${tw`absolute inset-0 z-50 flex flex-col items-center justify-center`}
`
const ImgContainer = styled.div`
  ${tw`overflow-hidden bg-gray-900`}
  min-height: 200px;

  .gatsby-image-wrapper {
    opacity: 0.2;

    &:hover {
      opacity: 1;
    }
  }
  img {
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
`
