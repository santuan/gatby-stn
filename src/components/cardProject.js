import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const CardProject = ({ card }) => (
  <div className="relative flex items-center justify-center w-full h-64 m-auto overflow-hidden duration-700 transform bg-gray-900 rounded shadow-lg group hover:shadow-xl hover:-translate-y-2">
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
      {card.techs && (
        <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-wrap justify-center w-full px-0 py-2 font-mono tracking-widest uppercase ">
          {card.techs.map((techs, i) => [
            <Link
              className="inline-block px-2 py-1 mr-1 text-xs font-semibold text-white bg-black bg-opacity-20"
              key={i}
            >
              {techs.title}
            </Link>
          ])}
        </div>
      )}
      <div className="absolute inset-0 z-10 duration-700 opacity-40 group-hover:opacity-70 ">
        <Img
          className="object-cover w-full h-full work-image group-hover:scale-110"
          alt={card.title}
          fluid={card.backgroundImage.fluid}
        />
      </div>
    </Link>
  </div>
)

export default CardProject
