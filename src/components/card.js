import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem>
    <Link to={`/blog/${card.slug}`} className="hidden">
      <Img
        className="w-full h-56"
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
    <div className="px-6 py-6 pb-4 ">
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 font-serif text-3xl font-bold text-left text-indigo-200 "
      >
        {card.title}
       
      </Link>

      <p className="mt-2 font-sans text-2xl font-light text-left text-gray-300 ">
        {card.excerpt.excerpt}
      </p>
       <time className="block mt-3 font-mono text-base text-right text-white opacity-50">
          {card.createdAt}
        </time>
      <Tags>
        {card.tags.map((tag, i) => [
          <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </Tags>
    </div>
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative flex w-full overflow-hidden bg-gray-900 rounded shadow-lg`}
  transition: all .2s;
  top: 0;

  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`

const Tags = styled.div`
  ${tw`flex flex-wrap hidden px-0 py-4`}

  a {
    ${tw`inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full`}
  }
`
