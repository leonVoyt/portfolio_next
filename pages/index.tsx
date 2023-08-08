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
import { Suspense, useEffect, useRef, useState } from 'react'
import Box from '../components/Box'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useAction } from '../hooks/useAction'

const Index = () => {
  const { theme, loading, error } = useTypeSelector((state) => state.theme)
  const { setTheme } = useAction()

  console.log(theme)

  return (
    <RootLayout>
      <div className="index ">
        <div className="index__text">
          <h1>
            Hi my name is <strong>Leon</strong>{' '}
          </h1>
          <p>a frontend developer</p>
          <span>with passion for learning and creating.</span>
          <button>Download CV</button>
        </div>
      </div>
      <div className={`projects ${!theme ? 'dark' : ''}`}>
        <div className="container">
          <h1>Projects</h1>
          <div className="projects__list">
            <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="pizza.png"
                    proj={'pizza'}
                  />
                </Canvas>
              </Suspense>
              <strong>Pizzeria</strong>
            </div>
            <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="port.png"
                    proj={'portfolio'}
                  />
                </Canvas>
              </Suspense>
              <strong>Portfolio</strong>
            </div>

            <div className="d">
              <Suspense fallback={null}>
                <Canvas>
                  <ambientLight intensity={5} />
                  <pointLight position={[10, 10, 10]} />
                  <DynamicThreeCanvas
                    position={[0, 0, 0]}
                    png="electronic.jpg"
                    proj={'electronics_store'}
                  />
                </Canvas>
              </Suspense>
              <strong>Electronics store</strong>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Index
