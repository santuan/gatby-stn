import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
  {
    title: "3D",
    slug: "/3d/",
    ariaLabel: "Ver renders en 3d",
  },
  {
    title: "Recursos",
    slug: "/recursos/",
    ariaLabel: "Ver recursos cooperativos",
  },
  {
    title: "Blog",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
  },

  {
    title: "Proyectos",
    slug: "/colaboraciones/",
    ariaLabel: "Ver los proyectos",
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
