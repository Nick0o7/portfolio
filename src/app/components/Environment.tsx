'use client'

import { useEnvironmentStore } from '@/app/store/useEnvironmentStore'
import { useMemo } from 'react'

export default function Environment() {
  const { weather } = useEnvironmentStore()

  // Choose tree color based on weather
  const treeColor = useMemo(() => {
    switch (weather) {
      case 'snow':
        return '#e0e0e0' // snowy white
      case 'rain':
        return '#556B2F' // dark green
      case 'sun':
      default:
        return '#228B22' // fresh green
    }
  }, [weather])

  return (
    <>
      {/* Tree 1 */}
      <mesh position={[-2, 0.75, -7]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>
      <mesh position={[-2, 1.75, -7]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color={treeColor} />
      </mesh>

      {/* Tree 2 */}
      <mesh position={[2, 0.75, -7]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>
      <mesh position={[2, 1.75, -7]}>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial color={treeColor} />
      </mesh>

      {/* Ground plane (optional grass) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -7]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#3e7f3e" />
      </mesh>
    </>
  )
}
