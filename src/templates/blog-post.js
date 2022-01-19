import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Hero from "../components/hero"
import Seo from "../components/seo"
//import FormatText from "../components/serializer"
import { Helmet } from "react-helmet"
import { SRLWrapper } from "simple-react-lightbox"
import { Player, BigPlayButton } from "video-react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Fade from "react-reveal/Fade"
import "../styles/awesomeButton.css"
import "../styles/VideoReact.css"
import "../styles/post.css"
import Card from "../components/cardPost"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlog
  const social = data.getSocialCard
  const { article } = data.contentfulBlog
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Helmet>
        <body className="project-post" />
      </Helmet>
      <Seo
        title={`${post.title}`}
        description={`${post.excerpt.excerpt}`}
        image={`${social.url}`}
        pathname={`/blog/${post.slug}`}
        article={true}
      />
      <div className="max-w-full m-auto">
        <div className="bg-blue-900">
          <Hero
            heading={post.title}
            date={post.createdAt}
            slug={post.slug}
            readtime={post.readTime}
            excerpt={post.excerpt.excerpt}
            image={post.featuredImg.gatsbyImageData}
          />
        </div>
        <div
          className="relative z-50 w-full px-2 m-auto mt-6 article"
          id={post.slug}
        >
          <SRLWrapper options={options}>
            <div className="max-w-6xl px-3 mx-auto font-sans prose prose-lg hyphens lg:prose-2xl ">
              {article && renderRichText(article, options)}
            </div>
          </SRLWrapper>
          <div className="relative flex items-baseline justify-between p-0">
            <div className="relative z-50 flex flex-wrap justify-start w-full max-w-3xl px-0 py-4 mx-auto mt-12 font-mono tracking-widest uppercase ">
              <span className="hidden px-3 py-1 mb-1 mr-2 font-semibold text-gray-300 md:inline-block text-md ">
                etiquetas
              </span>
              {post.tags.map((tag, i) => [
                <Link
                  to={`/etiquetas/${kebabCase(tag)}/`}
                  key={i}
                  className="inline-block px-3 py-1 mb-1 mr-2 font-semibold text-white bg-indigo-500 rounded-full text-md hover:bg-indigo-600"
                >
                  {tag}
                  {i < post.tags.length - 1 ? "" : ""}
                </Link>,
              ])}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full max-w-3xl px-3 py-6 mx-auto mt-3 font-mono font-bold border-t-2 border-gray-600 md:flex-row md:text-xl">
          <div className="pb-6 mb-6 duration-700 border-b border-gray-700 md:border-none md:max-w-xs md:mb-0 md:pb-0">
            {prev && (
              <Link
                to={`/blog/${kebabCase(prev.slug)}/`}
                rel="prev"
                className="flex items-center justify-center pr-6 text-white duration-700 transform md:items-start md:justify-start group hover:-translate-x-2"
              >
                <span className="block">
                  <HiOutlineChevronLeft className="text-5xl duration-700 transform -translate-x-2 translate-y-1 group-hover:text-gray-500" />
                </span>
                {prev.title}
              </Link>
            )}
          </div>

          <div
            style={{ justifySelf: "flex-end" }}
            className="pl-6 text-right duration-700 md:max-w-xs"
          >
            {next && (
              <Link
                to={`/blog/${kebabCase(next.slug)}/`}
                rel="next"
                className="flex items-center justify-center pl-6 text-white duration-700 transform md:items-start md:justify-end group hover:translate-x-2"
              >
                {next.title}
                <span className="block">
                  <HiOutlineChevronRight className="text-5xl duration-700 transform translate-x-2 translate-y-1" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!, $title: String!, $tagline: String) {
    getSocialCard(title: $title, tagline: $tagline) {
      url
    }
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      readTime
      createdAt(formatString: "MMMM YYYY", locale: "es")
      tags
      excerpt {
        excerpt
      }
      article {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            file {
              url
              contentType
            }
          }
          ... on ContentfulBlog {
            contentful_id
            __typename
            title
            slug
            excerpt {
              excerpt
            }
            featuredImg {
              file {
                url
              }
            }
          }
        }
      }
      featuredImg {
        gatsbyImageData(
          layout: FULL_WIDTH
          quality: 90
          formats: [AUTO, WEBP, AVIF]
          backgroundColor: "#ffffff"
          jpegProgressive: false
          placeholder: BLURRED
        )
      }
    }
  }
`

const Bold = ({ children }) => <span className="font-bold">{children}</span>

const Text = ({ children }) => <p className="px-2 text-white">{children}</p>

const website_url = "https://www.santuan.com.ar"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 id={`${kebabCase(children)}`}>{children}</h3>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.file.contentType === "video/mp4") {
          return (
            <div className="p-0 mx-auto my-6 mb-12 max-w-7xl ring-2 ring-green-600 aspect-h-9 aspect-w-16">
              <Player src={node.data.target.file.url} loop={true} autoPlay>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="relative flex items-center justify-center overflow-hidden rounded-md cursor-pointer post-image">
                <img
                  className="w-auto mx-auto"
                  alt={node.data.target.title}
                  src={node.data.target.file.url}
                />
              </div>
            </div>
          )
        }
      }
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.webUrl) {
          return (
            <div className="flex flex-col-reverse items-center justify-between w-full max-w-3xl p-4 mx-auto mb-6 duration-700 ease-in-out transform border border-gray-900 rounded-md shadow-xl md:flex-row from-gray-900 via-gray-900 bg-gradient-to-br hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-900">
              <div className="relative z-10 flex flex-col text-white">
                <Link
                  to={`/colaboraciones/${node.data.target.slug}`}
                  className="relative z-10 font-serif text-center text-white"
                >
                  <h3 style={{ margin: "0" }}>{node.data.target.title}</h3>
                </Link>
              </div>
              <div className="">
                <img
                  className="object-cover w-auto h-32 py-2 mx-auto"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  alt={node.data.target.title}
                  src={node.data.target.logo.file.url}
                />
              </div>
            </div>
          )
        } else {
          return (
            <div className="flex items-center justify-between w-full max-w-3xl mx-auto my-6 duration-700 transform scale-105 translate-y-2 rounded-md hover:scale-100">
              <Card
                title={node.data.target.title}
                slug={node.data.target.slug}
                excerpt={node.data.target.excerpt.excerpt}
                featuredImg={node.data.target.featuredImg.file.url}
              />
            </div>
          )
        }
      }
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.webUrl) {
          return (
            <Link to={`/colaboraciones/${node.data.target.slug}`} className="">
              {node.data.target.title} - proyecto
            </Link>
          )
        } else {
          return (
            <Link to={`/blog/${node.data.target.slug}`} className="">
              {node.data.target.title} - blog
            </Link>
          )
        }
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold text-white external-link hover:text-blue-200"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
  buttons: {
    iconPadding: "5px",
    showDownloadButton: false,
    backgroundColor: "rgba(0, 0, 0, .5)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    showNextButton: true,
    showPrevButton: true,
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
    autoplaySpeed: 4000,
    disablePanzoom: true,
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
    fillColor: "rgb(0, 0, 0)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  thumbnails: {
    showThumbnails: true,
  },
}
