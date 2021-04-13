import React, { useRef, Suspense, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Stars,
  OrbitControls,
  Stage,
  Html,
  useProgress,
} from "@react-three/drei"
import Cube from "./Cube"
import Triangle from "./Triangle"
import Sphere from "./Sphere"
import { ResizeObserver } from "@juggle/resize-observer"

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center className="text-white">
      <div className="loading">
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: progress }}></div>
        </div>
      </div>
    </Html>
  )
}

const IntroThree = () => (
  <div className="fixed inset-0 min-h-screen cursor-move">
    <Canvas
      camera={{ fov: 60, position: [0, 0, 0] }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={<Loader />}>
        <Stage adjustCamera environment="night">
          <Cube />
          <Triangle />
          <Sphere />
        </Stage>
      </Suspense>
      <OrbitControls
        maxPolarAngle={Math.PI / 1}
        minPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={1}
      />
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
    </Canvas>
  </div>
)

export default IntroThree
