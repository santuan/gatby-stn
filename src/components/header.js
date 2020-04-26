import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import SVGLogo from "../assets/trinomia.svg"
import "./header.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <Link to="/">
          <SVGLogo className="w-full" />
        </Link>
      </Logo>
      <Nav className="menu menu--alonso ">
        <InnerNav className="menu__list">
          <Link
            className=" menu__item"
            activeClassName="menu__item--current text-red-500"
            to="/proyectos/"
          >
            <span className="menu__link">Proyectos</span>
          </Link>
          <Link
            className=" menu__item"
            activeClassName="menu__item--current text-blue-500"
            to="/blog/"
          >
            <span className="menu__link">Blog</span>
          </Link>
          <Link
            className=" menu__item"
            activeClassName="menu__item--current text-yellow-600"
            to="/contacto/"
          >
            <span className="menu__link">Contacto</span>
          </Link>
          <span className="menu__line"></span>
        </InnerNav>
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
  ${tw`flex items-center justify-between max-w-6xl px-3 py-0 m-auto `}
`

const Logo = styled.div`
  ${tw`font-mono text-xl font-bold tracking-wider uppercase`}
  width: 240px;
`

const Nav = styled.nav`
  ${tw`hidden text-right md:block`}

  a {
    ${tw`inline-block w-32 font-mono text-xl text-center text-white`}
  }
`

const InnerNav = styled.div`
  ${tw`relative`}
`

export default Header
