import RootLayout from '../src/app/MainLatout'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
const DynamicThreeCanvas = dynamic(() => import('../components/Box'), {
  ssr: false, // Disable server-side rendering
})
import { Suspense } from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector'
const Index = () => {
  const { theme, loading, error } = useTypeSelector((state) => state.theme)

  return (
    <RootLayout>
      <div className="index ">
        <div className="index__text">
          <h1 className="_active__animation">
            Hi my name is <strong>Leon</strong>{' '}
          </h1>
          <p className="_active__animation">a frontend developer</p>
          <span className="_active__animation">
            with passion for learning and creating.
          </span>
          <a href="https://robota.ua/candidates/22003575" target="_blank">
            <button className="index__button _active__animation">
              Open CV
            </button>
          </a>
        </div>
      </div>
      <div className={`projects ${!theme ? 'dark' : ''} `}>
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
