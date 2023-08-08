import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { MeshStandardMaterial, TextureLoader } from 'three'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'

interface BoxProps {
  position: any[]
  png: string
}

const Box: React.FC<BoxProps> = ({ position, png }) => {
  const ref = useRef()
  const [val, setVal] = useState(false)
  // const texture = new TextureLoader().load('../public/pizza.png')
  // const f = new TextureLoader().load('../public/pizza.png')
  const texturecf = useLoader(TextureLoader, png)
  // console.log(texture)
  useFrame(() => {
    if (!val) {
      ref.current.rotation.y += 0.008
    }
  }, [])
  return (
    <mesh
      onPointerOver={() => setVal(true)}
      onPointerLeave={() => setVal(false)}
      position={position}
      ref={ref}
      scale={3.5}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texturecf} />
    </mesh>
  )
}

export default Box
