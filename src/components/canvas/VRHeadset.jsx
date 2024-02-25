import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const VRHeadset = ({ isMobile, isMobileLight, isUnderHeight735, isUnderHeight690, isUnderHeight640, isUnderHeight535, isUnderHeight500, isUnderHeight330 }) => {
  const vrHeadset = useGLTF('./apple_vision_pro/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" /> 
      <pointLight intensity={1} />
      <spotLight position={[50, 10, 50]} angle={0.12} penumbra={2} intensity={15000} castShadow shadow-mapSize={1024} distance={100000}/>
      <primitive 
      object={vrHeadset.scene}
      scale={ isUnderHeight330 ? 22 : isUnderHeight500 ? 30 : isUnderHeight535 ? 18 : isUnderHeight640 ? 18 : isMobileLight ? 14 : isMobile ? 14 : 30}
      position={ isUnderHeight330 ? [0, -2.95, 0] : isUnderHeight500 ? [0, -2.35, 0] : isUnderHeight535 ? [0, -2.6, 0] : isUnderHeight640 ? [-0.7, -2.3, 0] : isUnderHeight690 ? [0, -1, 0] : isUnderHeight735 ? [0, -0.85, 0] : isMobileLight ? [0, -0.75, 0] : isMobile ? [0, 0, 0] : [0, -1, -0.5]}
      rotation={[-0.1, -0.9, -0.2]}
      />
    </mesh>
  )
}

const VRHeadsetCanvas = () => {
  const [isMobileLight, setIsMobileLight] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [isUnderHeight735, setIsUnderHeight735] = useState(false)
  const [isUnderHeight690, setIsUnderHeight690] = useState(false)
  const [isUnderHeight640, setIsUnderHeight640] = useState(false)
  const [isUnderHeight535, setIsUnderHeight535] = useState(false)
  const [isUnderHeight500, setIsUnderHeight500] = useState(false)
  const [isUnderHeight330, setIsUnderHeight330] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(min-width: 401px) and (max-width: 800px)')
    const lightMobileMediaQuery = window.matchMedia('(max-width:400px)')

    const underHeight735 = window.matchMedia('(max-height: 735px)')
    const underHeight690 = window.matchMedia('(max-height: 690px)')
    const underHeight640 = window.matchMedia('(max-height: 640px)')
    const underHeight535 = window.matchMedia('(max-height: 535px)')
    const underHeight500 = window.matchMedia('(max-height: 500px)')
    const underHeight330 = window.matchMedia('(max-height: 330px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)
    setIsMobileLight(lightMobileMediaQuery.matches)

    setIsUnderHeight735(underHeight735.matches)
    setIsUnderHeight690(underHeight690.matches)
    setIsUnderHeight640(underHeight640.matches)
    setIsUnderHeight535(underHeight535.matches)
    setIsUnderHeight500(underHeight500.matches)
    setIsUnderHeight330(underHeight330.matches)

    // Define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
      setIsMobileLight(event.matches)

      setIsUnderHeight735(event.matches)
      setIsUnderHeight690(event.matches)
      setIsUnderHeight640(event.matches)
      setIsUnderHeight535(event.matches)
      setIsUnderHeight500(event.matches)
      setIsUnderHeight330(event.matches)
    }

    // Add the callback function as a listener for changes to the media query

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    lightMobileMediaQuery.addEventListener('change', handleMediaQueryChange)

    underHeight735.addEventListener('change', handleMediaQueryChange)
    underHeight690.addEventListener('change', handleMediaQueryChange)
    underHeight640.addEventListener('change', handleMediaQueryChange)
    underHeight535.addEventListener('change', handleMediaQueryChange)
    underHeight500.addEventListener('change', handleMediaQueryChange)
    underHeight330.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      lightMobileMediaQuery.removeEventListener('change', handleMediaQueryChange)

      underHeight735.removeEventListener('change', handleMediaQueryChange)
      underHeight690.removeEventListener('change', handleMediaQueryChange)
      underHeight640.removeEventListener('change', handleMediaQueryChange)
      underHeight535.removeEventListener('change', handleMediaQueryChange)
      underHeight500.removeEventListener('change', handleMediaQueryChange)
      underHeight330.removeEventListener('change', handleMediaQueryChange)
    }
  })

  return (
    <Canvas 
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}  />
        <VRHeadset isMobile={isMobile} isMobileLight={isMobileLight} isUnderHeight735={isUnderHeight735} isUnderHeight690={isUnderHeight690} isUnderHeight640={isUnderHeight640} isUnderHeight535={isUnderHeight535} isUnderHeight500={isUnderHeight500} isUnderHeight330={isUnderHeight330} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default VRHeadsetCanvas;