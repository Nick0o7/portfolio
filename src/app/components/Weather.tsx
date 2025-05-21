'use client'

import { useEnvironmentStore } from '@/app/store/useEnvironmentStore'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Stars, Sky } from '@react-three/drei'
import * as THREE from 'three'

export default function Weather() {
  const { weather, time } = useEnvironmentStore()

  const rainGroup = useRef<THREE.Group>(null)
  const snowGroup = useRef<THREE.Group>(null)

  // Animate rain/snow particles
  useFrame(() => {
    if (rainGroup.current) {
      rainGroup.current.children.forEach((drop) => {
        drop.position.y -= 0.2
        if (drop.position.y < 0) drop.position.y = 5
      })
    }
    if (snowGroup.current) {
      snowGroup.current.children.forEach((flake) => {
        flake.position.y -= 0.05
        flake.position.x += (Math.random() - 0.5) * 0.01
        if (flake.position.y < 0) flake.position.y = 5
      })
    }
  })

  // Generate rain particles
  const rainParticles = Array.from({ length: 100 }).map((_, i) => (
    <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5]}>
      <cylinderGeometry args={[0.01, 0.01, 0.3]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  ))

  // Generate snow particles
  const snowParticles = Array.from({ length: 100 }).map((_, i) => (
    <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5]}>
      <sphereGeometry args={[0.03, 6, 6]} />
      <meshStandardMaterial color="white" />
    </mesh>
  ))

  return (
    <>
      {/* Day or Night Sky */}
      <Sky sunPosition={time === 'day' ? [100, 20, 100] : [0, -10, 0]} />
      {time === 'night' && (
        <>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          {/* Moon */}
          <mesh position={[5, 5, -5]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial emissive="white" emissiveIntensity={0.8} color="gray" />
          </mesh>
        </>
      )}

      {/* Weather Effects */}
      {weather === 'rain' && <group ref={rainGroup}>{rainParticles}</group>}
      {weather === 'snow' && <group ref={snowGroup}>{snowParticles}</group>}
    </>
  )
}
