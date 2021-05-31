import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ card }) => (
  <div className="relative top-0 flex w-full overflow-hidden duration-700 transform bg-indigo-900 rounded-md shadow-lg hover:-translate-y-2" style={{minHeight: "230px"}}>
    <div className="relative z-10 w-full px-6 py-6 pb-4 text-left duration-700 bg-opacity-75 sm:from-indigo-900 bg-gradient-to-br hover:bg-indigo-700">
      <time className="block mb-2 font-mono text-sm text-white uppercase opacity-90">
        {card.createdAt}
      </time>
      <Link
        to={`/blog/${card.slug}`}
        className="block pr-16 mb-2 font-serif text-2xl font-bold text-indigo-200 hover:text-white md:text-3xl"
      >
        {card.title}
      </Link>
      <p className="mt-2 font-sans text-xl text-gray-200 md:pr-16 ">
        {card.excerpt.excerpt}
      </p>
      <div className="flex-wrap hidden px-0 py-1 md:flex">
        {card.tags.map((tag, i) => [
          <Link
            to={`/etiquetas/${kebabCase(tag)}/`}
            key={i}
            className="inline-block px-2 py-1 my-2 mr-2 font-sans text-xs font-bold text-white uppercase bg-blue-700 rounded-full hover:bg-blue-800 hover:border-blue-900"
          >
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </div>
    </div>
    <Link to={`/blog/${card.slug}`} className="absolute inset-0 z-0 w-full opacity-20 md:opacity-30 ">
      <Img
        className="object-cover w-full h-full"
        alt={card.title}
        // fixed={card.featuredImg.fixed}
        fluid={card.featuredImg.fluid}
      />
    </Link>
  </div>
)

export default Card