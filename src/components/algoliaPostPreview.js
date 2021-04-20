import React from "react"
import { Highlight } from "react-instantsearch-dom"
import "../styles/algolia.css"

const PostPreview = ({ hit }) => {
  return (
    <div className="relative flex overflow-hidden text-left text-gray-100 bg-gray-900 rounded-md bg-gradient-to-br from-indigo-900 ">
      <div className="relative z-40 w-full p-6 text-left">
        <a
          href={`https://www.cooparaje.com.ar${(hit.url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-xl font-bold text-yellow-500 duration-700 hover:text-white"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </a>
        <p className="mt-1 font-sans text-lg line-clamp-2">
          <Highlight hit={hit} attribute="description" tagName="mark" />
        </p>
      </div>
      <a
        href={`https://www.cooparaje.com.ar${(hit.url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-64 h-40 duration-700 opacity-80 hover:opacity-50"
      >
        <img
          className="block object-cover w-full h-full"
          alt={hit.title}
          src={hit.image}
        />
      </a>
    </div>
  )
}

export default PostPreview
