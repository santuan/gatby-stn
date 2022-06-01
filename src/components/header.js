import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import IsoStn from "../animations/isoWelcome"
import "../styles/header.css"
import { FiSend } from "react-icons/fi"

const routes = [
  /*
  {
    title: "3D",
    slug: "/lab/",
    ariaLabel: "Ver 3d ",
  },
  {
    title: "sonidos",
    slug: "/musica/",
    ariaLabel: "Escuchar sonidos en guitarra",
  },
  */
  {
    title: "Imágenes",
    slug: "/galeria/",
    ariaLabel: "Ver galeria de 3d",
  },
  {
    title: "Palabras",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },
  {
    title: "recursos",
    slug: "/cooparaje/",
    ariaLabel: "Ver recursos cooperativos",
  },
]

const Header = () => (
  <Headroom disableInlineStyles>
    <div className="flex items-center justify-between w-full px-3 mx-auto duration-1000 transform max-w-7xl inner-wrapper">
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
        <nav className="relative flex items-center justify-end space-x-8">
          <Link to="/lab/dall-e" className=" galleryOn">
            Dall-E
          </Link>
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                activeClassName="font-bold"
                alt={route.ariaLabel}
                title={route.ariaLabel}
                aria-label={route.ariaLabel}
                to={route.slug}
                className="relative flex items-center justify-center font-mono text-lg font-bold text-center text-gray-100 uppercase hover:opacity-100 opacity-80"
              >
                {route.title}
              </Link>
            )
          })}
          <Link
            to="/contacto/"
            className="relative flex items-center justify-center font-mono text-lg font-bold text-center text-gray-100 uppercase hover:opacity-100 opacity-80"
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
