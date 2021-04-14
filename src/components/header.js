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
            to="/experimentos/"
            className="relative font-mono text-lg font-bold text-white uppercase group hover:opacity-100 opacity-80"
            activeClassName="opacity-100"
          >
            <span>3D</span>
            <span class="absolute left-0 top-0  -translate-x-5 transform flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full group-hover:bg-yellow-400 duration-700 bg-white opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-white group-hover:bg-yellow-400 duration-700"></span>
            </span>
          </Link>
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
