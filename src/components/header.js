import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import IsoStn from "../animations/isoWelcome"
import "../styles/header.css"
import { GoLinkExternal } from "react-icons/go"
import { FiSend } from "react-icons/fi"
import { FaCog } from "react-icons/fa"

const Header = () => (
  <Headroom disableInlineStyles>
    <div className="flex items-center justify-between w-full px-3 py-3 mx-auto duration-1000 transform max-w-7xl inner-wrapper">
      <div className="w-40 font-mono text-xl font-bold tracking-wider uppercase logo md:w-64">
        <Link
          to="/"
          aria-label="Santuan - Volver al inicio"
          className="block pt-2 transition-all duration-700 ease-in-out transform motion-safe:hover:scale-105"
        >
          <IsoStn />
        </Link>
      </div>
      <div className="hidden w-full text-right md:block">
        <nav className="relative flex items-center justify-end md:space-x-8">
          <Link
            to="/galeria/"
            className="relative font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Galería</span>
          </Link>

          <Link
            to="/blog/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>Textos</span>
          </Link>
          <Link
            to="/colaboraciones/"
            className="font-mono text-lg font-bold tracking-widest text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>www</span>
          </Link>
          <Link
            to="/cooparaje/"
            className="relative font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <FaCog />
            <span className="hidden">Herramientas</span>
          </Link>
          <Link
            to="/contacto/"
            className="font-mono text-lg font-bold text-white uppercase hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>
              <FiSend />
            </span>
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
