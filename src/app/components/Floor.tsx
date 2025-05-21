import { usePlane } from '@react-three/cannon'

export function Floor() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
      <planeGeometry args={[50, 50]} />
      <shadowMaterial opacity={0.2} />
    </mesh>
  )
}
