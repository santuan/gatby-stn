import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem className="bg-gray-900">
    <Link to={`/blog/${card.slug}`} className="absolute inset-0 z-0 w-full opacity-10 md:opacity-100 md:w-64 md:relative">
      <Img
        className="object-cover w-full h-full"
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
    <div className="relative z-10 w-full px-6 py-6 pb-4 text-left">
      <time className="block mb-1 font-mono text-base text-white opacity-50">
        {card.createdAt}
      </time>
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 font-serif text-lg font-bold text-indigo-200 md:text-2xl"
      >
        {card.title}
      </Link>
      <p className="mt-2 font-sans text-xl text-gray-200 ">
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
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative top-0 flex w-full overflow-hidden rounded shadow-lg`}
  transition: all .2s;
  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`

const Tags = styled.div`
  ${tw`flex flex-wrap px-0 py-1`}

  a {
    ${tw`inline-block px-5 py-2 my-2 mr-2 font-sans text-xs font-bold text-white uppercase rounded-full`}
  }
`
