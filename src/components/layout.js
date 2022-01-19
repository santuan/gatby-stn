/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import { FaBrain } from "react-icons/fa"

import "./layout.css"
import SimpleReactLightbox from "simple-react-lightbox"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="block min-h-screen">
        <SimpleReactLightbox>
          <main className="px-0 bg-gray-800">{children}</main>
        </SimpleReactLightbox>
        <footer className="relative z-40 py-12 font-mono text-center text-white bg-gray-900">
          <div>
            <Link to={`/blog/repositorio-de-este-sitio`} className="duration-300 hover:text-red-500">
              STN ©{new Date().getFullYear()}, Realizado en codigo abierto
            </Link>
          </div>
          <div className="block mt-6 space-x-3 font-mono opacity-80 hover:opacity-50">
            <FaBrain className="inline-block mx-1 mb-1 text-lg text-white" />
            <HiCode className="inline-block mx-1 mb-1 text-lg text-white" />
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg text-white" />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
