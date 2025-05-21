'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import MacBook from './Macbook'
import Car from './Car'
import Desk from './Desk'
import Lamp from './Lamp'

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [5, 3, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[10, 10, 5]}
          intensity={1}
          shadow-mapSize={{ width: 2048, height: 2048 }}
        />
          <Desk position={[-2, 0, 0]} />
          <MacBook position={[-2, 0.8, 0.5]} rotation={[0, Math.PI / 2, 0]} />
          <Car position={[1.5, 0, 0]} scale={0.8} />
          <Lamp position={[4, 0, 0]} scale={1.2} rotation={[0, Math.PI / 4, 0]} />
          <Floor />
          <Environment preset="sunset" />
      </Suspense>
  <OrbitControls />
</Canvas>
  )
}
