import lottie from "lottie-web"
import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import welcomeStn from "./santuan-logo.json"

const WelcomeStnCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#welcome-stn"),
      animationData: welcomeStn,
      loop: false,
    })
  }, [])
  return (
    <>
      <Fade delay={100}>
        <div className="flex justify-center opacity-100 ">
          <div id="welcome-stn" style={{ width: 200, height: 50 }} />
        </div>
      </Fade>
    </>
  )
}

export default WelcomeStnCompoent
