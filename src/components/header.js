import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import IsoStn from "../animations/isoWelcome"
import "../styles/header.css"

const Header = () => (
  <Headroom disableInlineStyles>
    <div className="flex items-center justify-between w-full max-w-5xl px-3 py-3 mx-auto">
      <div className="w-64 font-mono text-xl font-bold tracking-wider uppercase">
        <Link
          to="/"
          aria-label="Santuan - Volver al inicio"
          className="block max-w-md transition-all duration-700 ease-in-out transform hover:scale-105"
        >
          <IsoStn />
        </Link>
      </div>
      <div className="hidden w-full text-right md:block">
        <nav className="relative flex items-center justify-end md:space-x-8">
          <Link
            to="/colaboraciones/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Colaboraciones</span>
          </Link>
          <Link
            to="/recursos/"
            className="relative font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Recursos</span>
          </Link>
          <Link
            to="/blog/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Blog</span>
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
