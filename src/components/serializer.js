import React from "react"
import { Player, BigPlayButton } from "video-react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import "../styles/awesomeButton.css"
import "../styles/VideoReact.css"
import "../styles/post.css"
import Card from "./cardPost"

const Bold = ({ children }) => <span className="font-bold">{children}</span>

const Text = ({ children }) => <p className="px-2 text-white">{children}</p>

const website_url = "https://www.santuan.com.ar"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div
          className="my-8 aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{ __html: embedded }}
        />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.fields.file["es-AR"].contentType === "video/mp4") {
          return (
            <div className="max-w-6xl p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player
                src={node.data.target.fields.file["es-AR"].url}
                loop={true}
                autoPlay
              >
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="relative overflow-hidden rounded-md cursor-pointer post-image">
                <img
                  className="w-full mx-auto"
                  alt={node.data.target.fields.title["es-AR"]}
                  src={node.data.target.fields.file["es-AR"].url}
                />
              </div>
            </div>
          )
        }
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.fields.webUrl) {
          return (
            <div className="flex flex-col-reverse items-center justify-between w-full max-w-3xl p-4 mx-auto mb-3 duration-700 ease-in-out transform border border-gray-900 rounded-md shadow-xl md:flex-row from-gray-900 via-gray-900 bg-gradient-to-br hover:-translate-x-2 hover:bg-gray-900">
              <div className="relative z-10 flex flex-col text-white">
                <Link
                  to={`/colaboraciones/${node.data.target.fields.slug["es-AR"]}`}
                  className="relative z-10 text-white"
                >
                  <h3 style={{ margin: "0" }}>
                    {node.data.target.fields.title["es-AR"]}
                  </h3>

                  <span>Ver proyecto</span>
                </Link>
              </div>
              <div className="">
                <img
                  className="object-cover w-auto h-32 py-2 mx-auto"
                  style={{ marginTop: "0", marginBottom: "0" }}
                  alt={node.data.target.fields.title["es-AR"]}
                  src={
                    node.data.target.fields.logo["es-AR"].fields.file["es-AR"]
                      .url
                  }
                />
              </div>
            </div>
          )
        } else {
          return (
            <div className="flex items-center justify-between w-full max-w-3xl mx-auto my-6 duration-700 transform scale-105 translate-y-2 rounded-md hover:scale-100">
              <Card
                title={node.data.target.fields.title["es-AR"]}
                slug={node.data.target.fields.slug["es-AR"]}
                excerpt={node.data.target.fields.excerpt["es-AR"]}
                featuredImg={
                  node.data.target.fields.featuredImg["es-AR"].fields.file[
                    "es-AR"
                  ].url
                }
              />
            </div>
          )
        }
      }
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.fields.webUrl) {
          return (
            <Link
              to={`/colaboraciones/${node.data.target.fields.slug["es-AR"]}`}
              className=""
            >
              {node.data.target.fields.title["es-AR"]} - proyecto
            </Link>
          )
        } else {
          return (
            <Link
              to={`/blog/${node.data.target.fields.slug["es-AR"]}`}
              className=""
            >
              {node.data.target.fields.title["es-AR"]} - blog
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
}

export default ({ FormatText }) => (
  <div>{documentToReactComponents(FormatText.json, options)}</div>
)
