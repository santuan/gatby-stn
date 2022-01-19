import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress } from "@react-three/drei"
import { a, useTransition } from "react-spring"
import Stn from "./Stn"
import { ResizeObserver } from "@juggle/resize-observer"

function Loader() {
  const { active, progress } = useProgress()
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  })
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  )
}

const IntroThree = () => (
  <div className="fixed inset-0 min-h-screen bg-gray-900">
    <Canvas
      camera={{ fov: 70, position: [5, 5, 0] }}
      resize={{ polyfill: ResizeObserver }}
    >
      <Suspense fallback={null}>
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
    <Loader />
  </div>
)

export default IntroThree
