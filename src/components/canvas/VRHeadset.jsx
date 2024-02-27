import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const VRHeadset = ({ isMobile, isUnderHeight400, isTablet }) => {
  const vrHeadset = useGLTF('./apple_vision_pro/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" /> 
      <pointLight intensity={1} />
      <spotLight position={[50, 10, 50]} angle={0.12} penumbra={2} intensity={15000} castShadow shadow-mapSize={1024} distance={100000}/>
      <primitive 
      object={vrHeadset.scene}
      scale={ isUnderHeight400 ? 50 : isTablet ? 50 : isMobile ? 32 : 60}
      position={ isMobile ? [0, 0, 0] : [0, 0.5, -0.5]}
      rotation={[-0.1, -0.9, -0.2]}
      />
    </mesh>
  )
}

const VRHeadsetCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isUnderHeight400, setIsUnderHeight400] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {

    // Add a listener for changes to the screen size

    const mediaQuery = window.matchMedia('(max-width: 800px)')
    const underHeight400 = window.matchMedia('(max-height: 400px)')
    const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1290px)')

    // Set the initial value of the `isMobile` state variable

    setIsMobile(mediaQuery.matches)
    setIsUnderHeight400(underHeight400.matches)
    setIsTablet(tablet.matches)

    // Define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {

      setIsMobile(event.matches)
      setIsUnderHeight400(event.matches)
      setIsTablet(event.matches)

    }

    // Add the callback function as a listener for changes to the media query

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    underHeight400.addEventListener('change', handleMediaQueryChange)
    tablet.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted

    return () => {
    
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      underHeight400.removeEventListener('change', handleMediaQueryChange)
      tablet.removeEventListener('change', handleMediaQueryChange)

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
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <VRHeadset isMobile={isMobile} isUnderHeight400={isUnderHeight400} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default VRHeadsetCanvas;