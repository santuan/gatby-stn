import React from "react"
import { Highlight } from "react-instantsearch-dom"
import "../styles/algolia.css"
const PostPreview = ({ hit }) => {
  return (
    <>
      {/* <div className="relative flex overflow-hidden text-left text-gray-100 bg-gray-900 rounded-md bg-gradient-to-l from-gray-800 ">
        <div className="relative z-40 w-full p-6 text-left">
          <a
            href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-lg font-bold text-yellow-500 duration-700 hover:text-white"
          >
            <Highlight hit={hit} attribute="title" tagName="mark" />
            <GoLinkExternal className="inline-block ml-2" />
          </a>
          <p className="mt-1 font-sans text-lg line-clamp-2">
            <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
          </p>
        </div>
        <a
          href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-64 h-40 duration-700 opacity-80 hover:opacity-50"
        >
          <img
            className="block object-cover w-full h-full"
            alt={hit.title}
            src={`https:${hit.featuredImg.file.url}?w=220&h=220&fm=png&q=80`}
          />
        </a>
      </div> */}
      <div className="relative flex flex-col w-full overflow-hidden duration-700 bg-gray-900 border-2 border-transparent rounded-lg shadow-sm hover:shadow-lg from-gray-800 via-gray-800 bg-gradient-to-br group lg:h-64 lg:flex-row hover:shadow-amber-400/50 hover:border-amber-400">
        <div className="relative inset-0 z-0 block w-full overflow-hidden duration-700 rounded-t-md lg:rounded-l-md lg:rounded-r-none h-44 opacity-10 group-hover:opacity-60 lg:h-64">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
          >
            <img
              className="object-cover w-full h-full pb-0 mb-0 cardImage"
              alt={hit.title}
              src={`https:${hit.featuredImg.file.url}?w=400&h=400&fm=png&q=70`}
            />
          </a>
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start w-full px-6 py-2 pb-6">
          <div className="flex items-baseline justify-between w-full mt-2 mb-1">
            <a
              rel="noopener noreferrer"
              href={`https://www.cooparaje.com.ar/recursos/${hit.slug}`}
              target="_blank"
              className="block w-full mb-2 font-serif text-3xl font-bold text-left text-yellow-500 capitalize duration-700 group-hover:opacity-0 "
            >
              {hit.title}
            </a>
          </div>
          <p className="mb-1 font-sans text-xl text-left text-gray-100 duration-700 group-hover:opacity-0 md:line-clamp-2 lg:line-clamp-3">
            <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
          </p>
          <div className="absolute duration-700 opacity-0 bottom-4 right-4 group-hover:opacity-100">
            <a
              rel="noopener noreferrer"
              href={hit.url}
              target="_blank"
              className="btn yellow !text-xs "
            >
              Ver {hit.title}
            </a>
          </div>

          {/* {card.espacio && (
            <div className="z-50 flex items-start justify-start w-full mt-2 space-x-0.5">
              {card.espacio.map((espacio, i) => [
                <Link
                  to={`/espacios/${kebabCase(espacio.slug)}/`}
                  className="flex flex-wrap items-center justify-center px-2 py-2 mr-1 text-gray-100 bg-gray-900 rounded-lg shadow-xl bg-opacity-70 lg:flex-row btnCategory "
                  activeClassName="active"
                  key={i}
                >
                  <span className="inline-block w-6 text-xs text-left lg:text-sm ">
                    {espacio.icono}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase lg:text-xs hover:text-amber-400">
                    {espacio.title}
                  </span>
                </Link>,
              ])}
            </div>
          )}

          <b className="hidden py-2 font-mono text-sm font-bold ">
            {card.category}
          </b>
          <ReactTooltip
            place="right"
            type="dark"
            effect="solid"
            className="bg-red-500 shadow"
          /> */}
        </div>
      </div>
    </>
  )
}

export default PostPreview
