import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { Lights } from "./r3f/Lights"
import { Logo } from "./r3f/Logo"
import { Stars } from "./r3f/Stars"

const SantuanIntro = () => {
  return (
    <>
      <div className="fixed inset-0 z-10">
        <Canvas camera={{ position: [0, 5, 5.5] }}>
          {/* <Controls /> */}
          <Suspense fallback={null}>
            <Logo />
          </Suspense>
          <Lights />
          <Stars />
        </Canvas>
      </div>
    </>
  )
}

export default SantuanIntro
