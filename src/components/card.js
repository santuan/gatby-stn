import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem className="duration-700 bg-gray-900 hover:-translate-y-4" style={{minHeight: "260px"}}>
    <div className="relative z-10 w-full px-6 py-6 pb-4 text-left from-indigo-900 bg-gradient-to-br">
      <time className="block mb-2 font-mono text-sm text-white uppercase opacity-90">
        {card.createdAt}
      </time>
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 font-serif text-xl font-bold text-indigo-200 md:text-3xl"
      >
        {card.title}
      </Link>
      <p className="mt-2 font-sans text-xl text-gray-200 md:pr-16 ">
        {card.excerpt.excerpt}
      </p>
      <Tags className="hidden md:block">
        {card.tags.map((tag, i) => [
          <Link
            to={`/etiquetas/${kebabCase(tag)}/`}
            key={i}
            className="bg-blue-700 hover:bg-blue-800 hover:border-blue-900"
          >
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </Tags>
    </div>
    <Link to={`/blog/${card.slug}`} className="absolute inset-0 z-0 w-full opacity-5 md:opacity-10 ">
      <Img
        className="object-cover w-full h-full"
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative top-0 flex w-full overflow-hidden rounded-md shadow-lg`}
  transition: all .2s;
  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`

const Tags = styled.div`
  ${tw`flex flex-wrap px-0 py-1`}

  a {
    ${tw`inline-block px-2 py-1 my-2 mr-2 font-sans text-xs font-bold text-white uppercase rounded-full`}
  }
`
