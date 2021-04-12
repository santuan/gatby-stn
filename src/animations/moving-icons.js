import lottie from "lottie-web"
import React, { useEffect } from "react"
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
      <div className="transform scale-125 opacity-40">
        <div id="moving-icons" className="w-auto h-screen" />
      </div>
    </>
  )
}

export default MovingIconsCompoent

