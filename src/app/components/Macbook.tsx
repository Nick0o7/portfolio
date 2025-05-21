'use client'

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

export default function MacBook() {
  const group = useRef<Group>(null!)
  const { scene } = useGLTF('/models/Macbook Pro.glb')
  const halfTurn = Math.PI;

  return (
    <group ref={group} position={[0, 0, 0]} scale={0.6} rotation={[0, halfTurn, 0]}>
        <primitive object={scene} />
    </group>

  )
}
