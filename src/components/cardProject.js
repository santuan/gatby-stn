import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const CardProject = ({ card }) => (
  <div className="relative flex items-center justify-center w-full h-64 m-auto overflow-hidden duration-700 transform bg-gray-900 rounded shadow-lg hover:shadow-xl hover:translate-y-1">
    <Link
      to={`/colaboraciones/${card.slug}`}
      className="flex items-center justify-center h-32 md:h-56"
    >
      <Img
        className="relative z-20 object-contain w-full "
        alt={card.title}
        fixed={card.logo.fixed}
      />
    </Link>
    <Link to={`/colaboraciones/${card.slug}`} className="p-0 ">
      <h1 className="relative z-50 hidden px-8 m-0 font-serif text-3xl text-white opacity-50 group hover:opacity-100">
        {card.title}
      </h1>
      <div className="absolute inset-0 z-10 opacity-50">
        <Img
          className="object-cover w-full h-full work-image"
          alt={card.title}
          fluid={card.backgroundImage.fluid}
        />
      </div>
    </Link>
  </div>
)

export default CardProject
