import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
  },
  {
    title: "Blog",
    slug: "/blog/",
  },
  {
    title: "Proyectos",
    slug: "/proyectos/",
  },

  {
    title: "Contacto",
    slug: "/contacto/",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="text-bold"
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
