import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

const Hero = (props) => (
  <Heros>
    <TextContainer>
      <Fade bottom duration={800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="font-serif text-4xl ">{props.heading}</h1>
        </AnchorLink>
      </Fade>
    </TextContainer>
    <ImgContainer>
      <Fade duration={1200}>
        <Img title={props.heading} alt={props.heading} fixed={props.image} />
      </Fade>
    </ImgContainer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute bottom-0 w-full"
    >
      <path
        fill="#2d3748"
        fill-opacity="1"
        d="M0,192L80,213.3C160,235,320,277,480,293.3C640,309,800,299,960,266.7C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </Heros>
)

export default Hero

const Heros = styled.div`
  ${tw`relative `}
`
const TextContainer = styled.header`
  ${tw`absolute inset-0 z-50 flex flex-col items-center justify-center px-3`}
  h1 {
    ${tw`m-0 text-4xl text-white md:text-center`}
  }
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
