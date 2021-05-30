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

const Layout = ({ children }) => {
  return (
    <>
      <div className="block min-h-screen">
        <SimpleReactLightbox>
          <main className="px-0 bg-gray-800">{children}</main>
        </SimpleReactLightbox>
        <footer className="relative z-50 py-12 font-mono text-center text-white bg-gray-900">
          STN ©{new Date().getFullYear()}, Realizado en <br /> Gatsby +
          Contentful + Netlify{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/santuan/gatby-stn"
            className="mt-2 font-mono opacity-90 hover:opacity-50"
          >
            <span className="block mx-1 mb-2">Hecho con</span>
            <HiCode className="inline-block mx-1 mb-1 text-lg text-white" />
            <span className="mx-1">&</span>
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg text-white" />
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
