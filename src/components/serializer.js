import React from "react"
import { Player, BigPlayButton } from "video-react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Fade from "react-reveal/Fade"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../styles/awesomeButton.css"
import "../styles/VideoReact.css"
import "../styles/post.css"

const Bold = ({ children }) => <span className="font-bold">{children}</span>

const Text = ({ children }) => (
  <p className="px-2 text-white">{children}</p>
)

const website_url = "https://www.santuan.com.ar"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div className="my-8 aspect-w-16 aspect-h-9" dangerouslySetInnerHTML={{ __html: embedded }} />
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
            <div className="p-0 mb-12 aspect-h-9 aspect-w-16">
              <Player src={node.data.target.fields.file["es-AR"].url} autoPlay >
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="relative overflow-hidden rounded-md post-image">
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
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold text-white hover:text-blue-200"
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