
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/stn.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        position={[-2.2454855, 2.421247, 0]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.003']}
        position={[0.0340226, 2.4609611, 0]}
      />
      <mesh
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.004']}
        position={[2.2568269, 0.9866526, 0]}
      />
    </group>
  )
}

useGLTF.preload('/stn.glb')

