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
import "./layout.css"
import SimpleReactLightbox from "simple-react-lightbox"
import AnimatedCursor from "react-animated-cursor"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <div className="block min-h-screen">
        <AnimatedCursor
          innerSize={12}
          outerSize={18}
          color="255, 255, 255"
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={5}
        />
        <SimpleReactLightbox>
          <main className="px-0">{children}</main>
        </SimpleReactLightbox>
        <footer className="relative z-50 py-12 font-sans text-center text-white bg-gray-900">
          STN ©{new Date().getFullYear()}, Realizado en <br /> Gatsby +
          Contentful + Netlify{" "}
          <Link to="/404/" className="mt-2 font-mono opacity-75">
            <span className="block mx-1 mb-2">Hecho con</span>
            <HiCode className="inline-block mx-1 mb-1 text-lg text-white" />
            <span className="mx-1">&</span>
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg text-white" />
          </Link>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
