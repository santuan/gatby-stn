/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { TiHeartFullOutline } from "react-icons/ti"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Realizado en Gatsby + Contentful +
          Netlify{" "}
          <div className="mt-2 opacity-75">
            Hecho con
            <TiHeartFullOutline className="inline-block mx-1 mb-1 text-lg text-red-600" />
            por
            <span className="ml-1 border-b border-gray-600 hover:text-red-600 hover:border-red-600">
              santuan
            </span>
          </div>
        </Footer>
      </App>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = styled.div`
  ${tw`block min-h-screen`}
`

const Main = styled.main`
  ${tw`px-0`}
  a {
    ${tw`pb-1 text-blue-500`}
  }
`

const Footer = styled.footer`
  ${tw`relative z-50 py-12 text-center text-white bg-gray-900 `}
`

export default Layout
