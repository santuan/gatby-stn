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
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Realizado en Gatsby + Contentful +
          Netlify{" "}
          <div className="mt-2 opacity-75">
            <span className="block mx-1 mb-2">Hecho con</span>
            <HiCode className="inline-block mx-1 mb-1 text-lg text-white" />
            <span className="mx-1">&</span>
            <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg text-white" />
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
`

const Footer = styled.footer`
  ${tw`relative z-50 py-12 font-mono text-center text-white bg-gray-900`}
`

export default Layout
