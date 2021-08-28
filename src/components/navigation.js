import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
  {
    title: "Galeria",
    slug: "/galeria/",
    ariaLabel: "Ver galeria de 3d",
  },
  {
    title: "Textos",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },

  {
    title: "www",
    slug: "/colaboraciones/",
    ariaLabel: "Ver colaboraciones ",
  },
  {
    title: "Cooparaje",
    slug: "/cooparaje/",
    ariaLabel: "Ver recursos cooperativos",
  },
  {
    title: "Contacto",
    slug: "/contacto/",
    ariaLabel: "Ver como contactar",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="font-bold"
          alt={route.ariaLabel}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
          to={route.slug}
          className="my-4 font-mono text-white cursor-pointer hover:text-blue-100"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
