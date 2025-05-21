'use client'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

export default function Car() {
  const group = useRef<Group>(null!)
  const { scene } = useGLTF('/models/Car.glb')

  return (
    <group ref={group} scale={0.5} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}
