import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sphere.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.SphereAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Sphere"
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/sphere.glb')