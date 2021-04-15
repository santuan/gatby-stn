import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import IsoStn from "../animations/isoWelcome"
import "../styles/header.css"

const Header = () => (
  <Headroom disableInlineStyles>
    <div className="flex items-center justify-between w-full max-w-5xl px-3 py-3 mx-auto duration-1000 transform inner-wrapper">
      <div className="w-40 font-mono text-xl font-bold tracking-wider uppercase logo md:w-64">
        <Link
          to="/"
          aria-label="Santuan - Volver al inicio"
          className="block transition-all duration-700 ease-in-out transform motion-safe:hover:scale-105"
        >
          <IsoStn />
        </Link>
      </div>
      <div className="hidden w-full text-right md:block">
        <nav className="relative flex items-center justify-end md:space-x-8">

          <Link
            to="/blog/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Blog</span>
          </Link>
          <Link
            to="/colaboraciones/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Proyectos</span>
          </Link>
          <Link
            to="/recursos/"
            className="relative font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Recursos</span>
          </Link>
          <Link
            to="/lab/"
            className="relative font-mono text-lg font-bold text-white uppercase group hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>LAB</span>
            {/* <span className="absolute flex w-3 h-3 ml-1 -top-3 left-2">
              <span className="absolute inline-flex w-full h-full duration-700 bg-yellow-500 rounded-full opacity-75 animate-ping group-hover:bg-yellow-400"></span>
              <span className="relative inline-flex w-3 h-3 duration-700 bg-yellow-500 rounded-full group-hover:bg-yellow-400"></span>
            </span> */}
          </Link>
          <Link
            to="/contacto/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Contacto</span>
          </Link>
        </nav>
      </div>
    </div>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
