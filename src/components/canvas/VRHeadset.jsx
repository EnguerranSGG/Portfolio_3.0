import React from 'react'
import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const VRHeadset = ({ isMobile }) => {
  const vrHeadset = useGLTF('./apple_vision_pro/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" /> 
      <pointLight intensity={1} />
      <spotLight position={[50, 10, 50]} angle={0.12} penumbra={2} intensity={15000} castShadow shadow-mapSize={1024} distance={100000}/>
      <primitive 
      object={vrHeadset.scene}
      scale={ isMobile ? 30 : 40}
      position={ isMobile ? [0, -3, -2] : [0, -1, -0.5]}
      rotation={[-0.1, -0.9, -0.2]}
      />
    </mesh>
  )
}

const VRHeadsetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
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
        <VRHeadset isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default VRHeadsetCanvas;