import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import tw from "tailwind.macro"
import WelcomeStn from "../animations/welcome"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <Link
          to="/"
          aria-label="Santuan - Volver al inicio"
          className="block max-w-md"
        >
          {/*<SVGLogo className="w-full transform scale-50 -translate-x-16" />*/}
          <WelcomeStn />
        </Link>
      </Logo>
      <Nav>
        <div className="relative hidden md:flex">
          <Link to="/blog/" className="opacity-75" activeClassName="opacity-100">
            <span>Blog</span>
          </Link>
          <Link to="/colaboraciones/" className="opacity-75" activeClassName="opacity-100">
            <span>Colaboraciones</span>
          </Link>
          <Link to="/recursos/" className="opacity-75" activeClassName="opacity-100">
            <span>Recursos</span>
          </Link>
        </div>
      </Nav>
    </InnerWrapper>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const InnerWrapper = styled.div`
  ${tw`flex items-center justify-center px-3 py-3 m-auto`}
`

const Logo = styled.div`
  ${tw`w-full font-mono text-xl font-bold tracking-wider uppercase`}
`

const Nav = styled.nav`
  ${tw`text-right `}

  a {
    ${tw`inline-block w-full mb-3 mr-6 font-mono text-lg font-bold text-right text-white uppercase font-italic`}
  }
`

export default Header
