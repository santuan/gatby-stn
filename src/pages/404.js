import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGTaken from "../assets/svgs/taken.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex flex-col justify-end w-full min-h-screen pt-12 m-auto text-center text-white bg-indigo-900">
      <h1 className="mt-24 mb-3 font-mono text-2xl font-bold md:text-6xl">
        Miauuu!! <span  className="text-6xl" role="img" aria-label="Gato dice Miau">🙀</span>
      </h1>
      <p className="py-12 font-mono">404: es decirq que arribaste a una ruta que no existe...</p>
      <SVGTaken className="h-auto max-w-md mx-auto mt-6" />
    </div>
  </Layout>
)

export default NotFoundPage
