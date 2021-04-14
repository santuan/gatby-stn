import React from "react"
import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { ResizeObserver } from "@juggle/resize-observer"

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
    </Canvas>
  </div>
)

export default ThreeSky
