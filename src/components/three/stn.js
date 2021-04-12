import React from "react"
import { Canvas } from "react-three-fiber"
import { Lights } from "./r3f/Lights"
import { Stars } from "./r3f/Stars"

const SantuanIntro = () => {
  return (
    <>
      <div className="fixed inset-0 z-10">
        <Canvas camera={{ position: [0, 5, 5.5] }}>
          <Lights />
          <Stars />
        </Canvas>
      </div>
    </>
  )
}

export default SantuanIntro
