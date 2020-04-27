import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
  {
    title: "Proyectos",
    slug: "/proyectos/",
    ariaLabel: "Ver los proyectos",
  },
  {
    title: "Blog",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },

  {
    title: "Contacto",
    slug: "/contacto/",
    ariaLabel: "Ver formas de contacto",
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
          aria-label={route.ariaLabel}
          to={route.slug}
          className="my-2 font-mono text-white cursor-pointer hover:text-blue-100"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
