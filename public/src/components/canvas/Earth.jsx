import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('/lowild/scene.gltf')
  earth.scene.traverse((child) => {
  if (child.isMesh) {
    child.material.color.set(0xffffff); // Setați culoarea difuză la alb pentru o strălucire mai mare
  }
})

  return (
    <primitive 
      object={earth.scene}
      scale={2.5}
      position-y={-7.4}
      position-x={0.7}
    />
  )
}

const EarthCanvas = () => {

  return (
    <Canvas
  gl={{ preserveDrawingBuffer: true }}
  camera={{
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  }}
>
  <Suspense fallback={<CanvasLoader />}>
    <ambientLight intensity={0.5} /> {/* Add ambient light */}
    {/* Disable shadows temporarily */}
    { <OrbitControls
      autoRotate
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    /> }
    <Earth />
  </Suspense>
</Canvas>
  )
}

export default EarthCanvas