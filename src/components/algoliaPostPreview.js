import React from "react"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  return (
    <>
      <div className="relative flex w-full overflow-hidden duration-700 bg-gray-900 border-2 border-transparent rounded-lg shadow-sm hover:shadow-lg from-gray-800 via-gray-800 bg-gradient-to-br group hover:shadow-amber-400/50 hover:border-amber-400">
        <div className="relative inset-0 z-0 block w-40 h-40 overflow-hidden duration-700 md:w-64 rounded-t-md lg:rounded-l-md lg:rounded-r-none ">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={hit.url}
          >
            <img
              className="object-cover w-64 h-40 pb-0 mb-0 "
              alt={hit.title}
              src={`https:${hit.featuredImg.file.url}?w=450&h=450&fm=png&q=80`}
            />
          </a>
        </div>
        <div className="z-10 flex flex-col items-start justify-start w-full px-6 py-2">
          <div className="flex items-baseline justify-between w-full">
            <a
              rel="noopener noreferrer"
              href={hit.url}
              target="_blank"
              className="block w-full font-serif text-2xl text-left text-yellow-500 duration-700 group-hover:opacity-100 "
            >
              {hit.title}
            </a>
          </div>
          <p className="my-2 font-sans text-base text-left text-white line-clamp-2">
            <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
          </p>
        </div>
      </div>
    </>
  )
}

export default PostPreview
