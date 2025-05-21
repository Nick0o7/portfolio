'use client'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

export default function Lamp() {
  const group = useRef<Group>(null!)
  const { scene } = useGLTF('/models/Desk Lamp.glb')

  return (
    <group ref={group} scale={0.8} position={[-2, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}
