import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SVGTaken from "../assets/svgs/taken.svg"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="flex flex-col justify-end w-full min-h-screen px-4 pt-12 m-auto text-center text-white bg-indigo-900">
      <p className="py-12 font-mono">
        404
      </p>
      <SVGTaken className="h-auto max-w-md mx-auto mt-6" />
    </div>
  </Layout>
)

export default NotFoundPage
