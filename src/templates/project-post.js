import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SRLWrapper } from "simple-react-lightbox"

import { Link, navigate } from "gatsby"
import { kebabCase } from "lodash"
import { AwesomeButton } from "react-awesome-button"
import styled from "@emotion/styled"
import { GoLinkExternal } from "react-icons/go"
import SEO from "../components/seo"
import Hero from "../components/heroProject"
import tw from "tailwind.macro"
import FormatText from "../components/serializer"

const options = {
  buttons: {
    iconPadding: "5px",
    showDownloadButton: false,
    backgroundColor: "rgba(0, 0, 0, .5)",
    iconColor: "rgb(255, 255, 255)",
  },
  caption: {
    captionFontSize: "15px",
    captionAlignment: "center",
    captionColor: "#a7825f",
    captionFontWeight: 300,
    showCaption: false,
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, .9)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    disablePanzoom: true,
    autoplaySpeed: 4000,
    hideControlsAfter: true,
  },
  translations: {
    autoplayText: "Play",
    closeText: "Cerrar",
    downloadText: "Descargar",
    fullscreenText: "Pantalla completa",
    nextText: "Siguiente",
    pauseText: "Pausa",
    previousText: "Anterior",
    thumbnailsText: "Miniaturas",
    zoomOutText: "Zoom Out",
  },
  progressBar: {
    height: "4px",
    fillColor: "rgb(151, 90, 22)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  thumbnails: {
    showThumbnails: true,
  },
}

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulWorks
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={`${post.title}`} />
      <Helmet>
        <body className="project-post" />
      </Helmet>
      <Hero image={post.backgroundImage.fluid} logo={post.logo.fixed} />
      <div className="py-3 mx-auto ">
        <div className="relative z-50 flex items-center justify-center mb-12 -mt-20 text-4xl md:-mt-24 hover:text-blue-400">
          <p className="hidden text-white">{post.title}</p>
          <AwesomeButton
            action={() => {
              navigate(`/colaboraciones/`)
            }}
            className="mt-5 mr-6"
          >
            volver
          </AwesomeButton>
          <AwesomeButton
            href={post.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
            type="secondary"
          >
            web <GoLinkExternal className="inline-block ml-2" />
          </AwesomeButton>
        </div>
        <SRLWrapper options={options}>
          <div className="max-w-full px-3 font-sans prose prose-xl ">
            <FormatText
              FormatText={post.childContentfulWorksArticleRichTextNode}
            />
          </div>
        </SRLWrapper>
        <PageNav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {prev && (
              <Link
                to={`/colaboraciones/${kebabCase(prev.slug)}/`}
                rel="prev"
                className="pr-6 "
              >
                <span className="block">←</span> {prev.title}
              </Link>
            )}
          </div>
          <div style={{ justifySelf: "flex-end" }} className="pl-6 text-right">
            {next && (
              <Link to={`/colaboraciones/${kebabCase(next.slug)}/`} rel="next">
                <span className="block">→</span>
                {next.title}
              </Link>
            )}
          </div>
        </PageNav>
      </div>
    </Layout>
  )
}

const PageNav = styled.nav`
  ${tw`flex justify-between w-full px-3 py-6 mt-12 border-t-2 border-gray-600`}

  div {
    ${tw`max-w-xs`}
    transition: all 1s;
    flex: 1;

    &:hover {
      ${tw`px-2`}
    }
  }

  a {
    ${tw`block font-mono text-xl text-white`}
  }
`

export default ProjectPostTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    contentfulWorks(slug: { eq: $slug }) {
      id
      slug
      title
      webUrl
      childContentfulWorksArticleRichTextNode {
        json
      }
      logo {
        fixed(width: 320, height: 170) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 500) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      backgroundImage {
        fixed(width: 2000, height: 1000) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 2000) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
