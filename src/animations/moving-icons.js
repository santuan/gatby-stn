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
      <Moving>
        <div id="moving-icons" style={{ width: "100%", height: "100%" }} />
      </Moving>
    </>
  )
}

export default MovingIconsCompoent

const Moving = styled.div`
  ${tw`fixed inset-0 flex items-center justify-center w-screen h-screen `}

  svg {
    ${tw`w-auto h-auto`}
    width: auto !important;
    height: auto !important;

    @screen md {
      width: 100% !important;
    }
  }
`
