import RootLayout from '../src/app/MainLatout'
import Image from 'next/image'
import pizza from '../assets/Desktop - 1 (2).png'
import electronic from '../assets/electronic.jpg'
import partfolio from '../assets/Main (3).png'
import dynamic from 'next/dynamic'
import { MeshStandardMaterial, TextureLoader } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'

const DynamicThreeCanvas = dynamic(() => import('../components/Box'), {
  ssr: false, // Disable server-side rendering
})
import { Suspense, useEffect, useRef } from 'react'
import Box from '../components/Box'

const Index = () => {
  const ref = useRef(null)

  // useEffect(() => {
  //   window.addEventListener('click', () => {
  //     if (ref !== null) {
  //       console.log(ref.current.offsetTop)
  //       console.log(window.scrollY)
  //     }
  //   })

  //   return function () {
  //     window.removeEventListener('click', () => {})
  //   }
  // }, [])
  // const [portfolio, pizza, electric] = useLoader(TextureLoader, [
  //   'port.png',
  //   'pizza.png',
  //   'electronic.jpg',
  // ])

  return (
    <RootLayout>
      <div className="index">
        <div className="index__text">
          <h1>
            Hi my name is <strong>Leon</strong>{' '}
          </h1>
          <p>a frontend developer</p>
          <span>with passion for learning and creating.</span>
          <button>Download CV</button>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          {/* <h1>Projects</h1> */}
          <div className="d">
            <Suspense fallback={null}>
              <Canvas>
                <ambientLight intensity={5} />
                <pointLight position={[10, 10, 10]} />
                <DynamicThreeCanvas position={[0, 0, 0]} png="pizza.png" />
              </Canvas>
            </Suspense>
          </div>
          <div className="d">
            <Suspense fallback={null}>
              <Canvas>
                <ambientLight intensity={5} />
                <pointLight position={[10, 10, 10]} />
                <DynamicThreeCanvas position={[0, 0, 0]} png="port.png" />
              </Canvas>
            </Suspense>
          </div>

          <div className="d">
            <Suspense fallback={null}>
              <Canvas>
                <ambientLight intensity={5} />
                <pointLight position={[10, 10, 10]} />
                <DynamicThreeCanvas position={[0, 0, 0]} png="electronic.jpg" />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Index
