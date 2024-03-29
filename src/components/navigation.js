import { Link } from "gatsby"
import React from "react"

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
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
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
    title: "Recursos",
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
          className="my-4 font-mono tracking-widest text-white cursor-pointer hover:text-blue-100"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
