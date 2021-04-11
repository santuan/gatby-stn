import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
  {
    title: "Colaboraciones",
    slug: "/colaboraciones/",
    ariaLabel: "Ver las colaboraciones",
  },
  {
    title: "Recursos",
    slug: "/recursos/",
    ariaLabel: "Ver repositorio y codigos en Github",
  },
  {
    title: "Blog",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
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
          className="my-2 font-mono text-white cursor-pointer hover:text-blue-100"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
