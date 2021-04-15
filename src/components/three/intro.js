import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei"
import Stn from "./Stn"
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
  <div className="fixed inset-0 min-h-screen bg-gray-900 cursor-move">
    <Canvas
      camera={{ fov: 70, position: [5, 5, 0] }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={<Loader />}>
        <Stn />
      </Suspense>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={3}
        minPolarAngle={1}
        minDistance={5}
        maxDistance={20}
      />
    </Canvas>
  </div>
)

export default IntroThree
