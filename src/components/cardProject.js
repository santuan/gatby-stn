import React from "react"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItemProject>
    <Link to={`/proyectos/${card.slug}`} className="block p-0">
      <Img className="w-full" alt={card.title} fixed={card.featuredImg.fixed} />
    </Link>
  </CardItemProject>
)

const CardItemProject = styled.div`
  ${tw`relative max-w-md overflow-hidden rounded shadow-lg`}
  transition: all .2s;
  top: 0;

  a {
    padding: 0 !important;
  }

  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`
