import React, { useRef , useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cube.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.CubeAction.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube"
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Cube}
        position={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/cube.glb')