import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ title, slug, excerpt, createdAt, featuredImg }) => (
  <CardItem className="bg-gray-900">
    <div className="relative z-10 w-full px-6 py-6 pb-4 text-left duration-700 bg-opacity-75 from-indigo-900 bg-gradient-to-br hover:bg-indigo-700">
      <span className="block mb-2 font-mono text-sm text-white uppercase opacity-90">
      blog
      </span>
      <Link
        to={`/blog/${slug}`}
        className="block mb-2 font-serif text-xl font-bold text-indigo-200 hover:text-white md:text-3xl"
      >
        {title}
      </Link>
      <p className="mt-2 font-sans text-xl text-gray-200 md:pr-16 ">
        {excerpt}
      </p>
    </div>
    <Link
      to={`/blog/${slug}`}
      className="!absolute inset-0 z-0 w-full opacity-5 md:opacity-30 "
      style={{position: "absolute", margin: "0"}}
    >
      <img
        className="object-cover w-full h-full"
        alt={title}
        src={featuredImg}
      />
    </Link>
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative top-0 flex w-full overflow-hidden rounded-md shadow-lg `}
  transition: all .2s;
  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`
