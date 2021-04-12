import styled from "@emotion/styled"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import tw from "tailwind.macro"
import MovingIcons from "./moving-icons.json"

const MovingIconsCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#moving-icons"),
      animationData: MovingIcons,
    })
  }, [])
  return (
    <>
      <Moving className="transform scale-125 opacity-40">
        <div id="moving-icons" className="w-auto h-screen" />
      </Moving>
    </>
  )
}

export default MovingIconsCompoent

const Moving = styled.div`

  svg {
    ${tw`w-screen h-screen mx-auto`}

    @screen md {
      width: 100% !important;
    }
  }
`
