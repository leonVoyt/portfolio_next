import React, { useRef, useState } from 'react'
import { Vector3, useLoader } from '@react-three/fiber'
import { TextureLoader, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'
import { useRouter } from 'next/router'

interface BoxProps {
  position: Vector3 | undefined
  png: string
  proj: string
}

const Box: React.FC<BoxProps> = ({ position, png, proj }) => {
  const ref = useRef<Mesh>(null)
  const [val, setVal] = useState(false)
  const router = useRouter()

  const texturecf = useLoader(TextureLoader, png)
  useFrame(() => {
    if (!val && ref.current) {
      ref.current.rotation.y += 0.008
    }
  })
  return (
    <mesh
      ref={ref}
      onPointerOver={() => setVal(true)}
      onPointerLeave={() => setVal(false)}
      onClick={() => router.push(`/projects/${proj}`)}
      position={position}
      scale={val ? 3.7 : 3.5}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texturecf} />
    </mesh>
  )
}

export default Box
