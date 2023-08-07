import { useFrame } from '@react-three/fiber'
import { StaticImageData } from 'next/image'
import React, { useRef, useState } from 'react'
import pizzaa from '../public/pizza.png'
import * as THREE from 'three'
interface BoxProps {
  position: any[]
  create?: StaticImageData
}
const Box: React.FC<BoxProps> = ({ position = [], create }) => {
  const ref = useRef()
  const [val, setVal] = useState(false)
  useFrame(() => {
    if (!val && ref.current) {
      ref.current.rotation.y += 0.01
    }
  }, [])
  return (
    <mesh
      position={position}
      ref={ref}
      scale={val ? 2.4 : 2}
      onPointerOver={() => setVal(!val)}
      onPointerLeave={() => setVal(!val)}
    >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box
