import React, { useRef, useEffect  } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cubeloading.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.CubeAction.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Cube"
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 2.6, 0]}
      />
    </group>
  )
}

useGLTF.preload('/cubeloading.glb')