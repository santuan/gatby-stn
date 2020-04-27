import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

const Hero = props => (
  <Heros>
    <TextContainer>
      <Fade duration={800} delay={600}>
        <Img
          className="mt-12"
          title={props.heading}
          alt={props.heading}
          fixed={props.logo}
        />
      </Fade>
    </TextContainer>
    <ImgContainer>
      <Fade duration={1200}>
        <Img title={props.heading} alt={props.heading} fixed={props.image} />
      </Fade>
    </ImgContainer>
  </Heros>
)

export default Hero

const Heros = styled.div`
  ${tw`relative overflow-hidden`}
  min-height: 50vh
`
const TextContainer = styled.header`
  ${tw`absolute inset-0 z-50 flex flex-col items-center justify-center`}
  h1 {
    ${tw`m-0 text-4xl text-center text-white`}
  }
`
const ImgContainer = styled.div`
  ${tw`overflow-hidden `}
  max-height: 50vh;
  img {
    height: 200px;
    object-fit: cover;
    object-position: center;
  }
`
