import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const CardProject = ({ card }) => (
  <div className="relative flex items-center justify-center w-full h-64 m-auto overflow-hidden duration-1000 bg-gray-900 border border-gray-600 group hover:rounded-xl rounded-3xl">
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

      <div className="absolute inset-0 z-10 duration-700 opacity-40 group-hover:opacity-20 ">
        <Img
          className="object-cover w-full h-full duration-1000 transform work-image group-hover:scale-110"
          alt={card.title}
          fluid={card.backgroundImage.fluid}
        />
      </div>
    </Link>
    {card.techs && (
      <div className="absolute right-0 z-50 flex flex-row justify-center w-full px-0 py-2 mx-auto font-mono tracking-widest uppercase duration-1000 opacity-0 -bottom-4 group-hover:-bottom-2 group-hover:opacity-90">
        
        {card.techs.map((techs, i) => [
          <div
            className="inline-block px-1 py-1 text-xs font-semibold text-white transform scale-90 bg-gray-500 bg-opacity-40"
            key={i}
          >
            {techs.title}
          </div>,
        ])}
      </div>
    )}
  </div>
)

export default CardProject
