import React from "react"
import { Link } from "gatsby"

const CardPost = ({ title, slug, excerpt, featuredImg }) => (
  <div className="relative top-0 flex w-full overflow-hidden duration-700 translate-y-2 bg-gray-900 rounded-md shadow-lg hover:shadow-xl">
    <div className="relative z-10 w-full px-6 py-6 pb-4 text-left duration-700 bg-opacity-75 from-indigo-900 bg-gradient-to-br hover:bg-indigo-700">
      <span className="block mb-2 font-mono text-sm text-white uppercase opacity-90">
        blog
      </span>
      <Link
        to={`/blog/${slug}`}
        className="block mb-2 font-serif text-xl font-bold text-indigo-200 hover:text-white md:text-2xl"
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
      style={{ position: "absolute", margin: "0" }}
    >
      <img
        className="object-cover !m-0 w-full h-full"
        alt={title}
        src={featuredImg}
      />
    </Link>
  </div>
)

export default CardPost
