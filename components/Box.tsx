import React, {
  useRef,
  useEffect,
  useState,
  Ref,
  MutableRefObject,
} from 'react'
import { Canvas, Vector3, useLoader } from '@react-three/fiber'
import { MeshStandardMaterial, TextureLoader, Mesh } from 'three'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'
import Link from 'next/link'
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
  // const texture = new TextureLoader().load('../public/pizza.png')
  // const f = new TextureLoader().load('../public/pizza.png')
  const texturecf = useLoader(TextureLoader, png)
  // console.log(texture)
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
