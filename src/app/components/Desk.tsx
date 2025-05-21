'use client'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

export default function Desk() {
  const group = useRef<Group>(null!)
  const { scene } = useGLTF('/models/Desk.glb')

  return (
    <group ref={group} scale={1} position={[2, 0, 0]}>
      <primitive object={scene} />
    </group>
  )
}
