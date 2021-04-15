import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Stars,
  OrbitControls,
  Stage,
  Html,
  useProgress,
} from "@react-three/drei"
import { ResizeObserver } from "@juggle/resize-observer"
import Stn from "./Stn"

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

const ThreeSky = () => (
  <div className="fixed inset-0 min-h-screen bg-gray-900 cursor-move">
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <OrbitControls adjustCamera autoRotate autoRotateSpeed={1} />
      <Stars
        radius={50}
        depth={50}
        count={800}
        factor={4}
        saturation={1}
        fade
      />
      <Suspense fallback={<Loader />}>
        <Stage castShadow contactShadow adjustCamera environment="night">
          <Stn />
        </Stage>
      </Suspense>
    </Canvas>
  </div>
)

export default ThreeSky
