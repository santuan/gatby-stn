import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/logoanimation.gltf")
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.CubeAction.play()
    actions.SphereAction.play()
    actions.TriangleAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube"
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-2.2454855, 2.421247, 0]}
      />
      <mesh
        name="Sphere"
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        position={[0.0340226, 2.4609611, 0]}
        scale={[1, 1, 1]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Triangle.geometry}
        material={materials["Material.002"]}
        position={[2.2568269, 0.9866526, 0]}
      />
    </group>
  )
}

useGLTF.preload("/logoanimation.gltf")
