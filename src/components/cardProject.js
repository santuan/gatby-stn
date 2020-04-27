import React from "react"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

export default ({ card }) => (
  <CardItemProject>
    <Link to={`/proyectos/${card.slug}`} className="block p-0">
      <Fade bottom cascade duration={500} delay={250}>
        <h1 css={tw`relative z-50 px-8 m-0 font-mono text-3xl text-white`}>
          {card.title}
        </h1>
      </Fade>
      <Img
        className="absolute inset-0 z-10 w-full work-image"
        alt={card.title}
        fixed={card.backgroundImage.fixed}
      />
    </Link>
  </CardItemProject>
)

const CardItemProject = styled.div`
  ${tw`relative flex items-center justify-center h-64 max-w-md overflow-hidden rounded shadow-lg`}
  transition: all .2s;
  transform: translateY(0.5rem);

  &:hover {
    ${tw`shadow-xl `}
    transform: translateY(0);
  }

  .absolute {
    position: absolute !important;
    transition: all 0.2s;
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:hover {
    .absolute {
      opacity: 1;
      transform: scale(1);
    }
  }

  a {
    padding: 0 !important;
  }
`
