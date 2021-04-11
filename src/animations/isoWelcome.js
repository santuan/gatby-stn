import lottie from "lottie-web"
import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import isoStn from "./iso-santuan.json"

const WelcomeStnCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#iso-stn"),
      animationData: isoStn,
    })
  }, [])
  return (
    <>
      <Fade delay={100}>
        <div className="flex justify-center opacity-100 ">
          <div id="iso-stn" style={{ width: 220, height: 70 }} />
        </div>
      </Fade>
    </>
  )
}

export default WelcomeStnCompoent
