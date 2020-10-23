/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import tw from "tailwind.macro"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <App>
        <Main>{children}</Main>
        <Footer>
          STN ©{new Date().getFullYear()}, Realizado en <br /> Gatsby +
          Contentful + Netlify{" "}
          <div className="mt-2 font-mono opacity-75">
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
  ${tw`relative z-50 py-12 font-sans text-center text-white bg-gray-900`}
`

export default Layout
