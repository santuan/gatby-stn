import React from "react"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItemProject>
    <Link to={`/colaboraciones/${card.slug}`} className="block p-0">
      <h1 css={tw`relative z-50 px-8 m-0 font-serif text-3xl text-white opacity-50 hover:opacity-100`}>
        {card.title}
      </h1>
      <Img
        className="absolute inset-0 z-10 w-full work-image"
        alt={card.title}
        fixed={card.backgroundImage.fixed}
      />
    </Link>
  </CardItemProject>
)

const CardItemProject = styled.div`
  ${tw`relative flex items-center justify-center h-64 max-w-md m-auto overflow-hidden bg-gray-900 rounded shadow-lg`}
  transition: all .8s;
  transform: translateY(0.5rem);

  &:hover {
    ${tw`shadow-xl `}
    transform: translateY(0);
  }

  .absolute {
    position: absolute !important;
    transition: all 0.8s;
    opacity: 0.6;
    transform: scale(1.05);
  }

  &:hover {
    .absolute {
      opacity: 0.3;
      transform: scale(1);
    }
  }

  a {
    padding: 0 !important;
  }
`
