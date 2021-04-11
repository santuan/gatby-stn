import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "react-three-fiber";
import {a, useSpring} from "react-spring/three";
import {useHover} from "react-use-gesture";

const Logo = ({ children, size = 55, ...props }) => {
  const geometry = useRef();
  const material = useRef();
  const logo = useLoader(THREE.TextureLoader, process.env.NODE_ENV === "production" ? "/logo.png" : "/logo.png");
  const scaleX = 0.05 * size;
  const scaleY = 0.015 * size;
  const scaleZ = 0.05;

    const [spring, setSpring] = useSpring(() => ({
        scale: [scaleX, scaleY, scaleZ],
        config: { mass: 3, friction: 40, tension: 800 }
    }));

    const bindHover = useHover(
        ({ hovering }) =>
            setSpring({ scale: hovering ? [1.1 * scaleX, 1.1 * scaleY, 1.1 * scaleZ] : [scaleX, scaleY, scaleZ] }),
        {
            pointerEvents: true
        }
    );

  return (
    <a.group className="select-none link" {...props} scale={[0.1 * size, 0.04 * size, 0.1]} {...spring} {...bindHover()} >
      <mesh
        args={[geometry, material]}
        position={[0, 1, -20]}
        receiveShadow
        castShadow
      >
        <planeGeometry ref={geometry} attach="geometry" />
        <meshPhongMaterial
          transparent
          ref={material}
          attach="material"
          map={logo}
        />
      </mesh>
    </a.group>
  );
};

export { Logo };