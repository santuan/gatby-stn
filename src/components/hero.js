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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
      <path
        fill="#2d3748"
        fill-opacity="1"
        d="M0,192L40,165.3C80,139,160,85,240,101.3C320,117,400,203,480,229.3C560,256,640,224,720,218.7C800,213,880,235,960,213.3C1040,192,1120,128,1200,122.7C1280,117,1360,171,1400,197.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
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
