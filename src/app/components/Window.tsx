'use client'

export default function Window() {
  return (
    <>
      {/* Window frame */}
      <mesh position={[0, 1.5, -2.9]}>
        <boxGeometry args={[3, 2, 0.05]} />
        <meshStandardMaterial color="#222" />
      </mesh>

      {/* Optional: glass effect */}
      <mesh position={[0, 1.5, -2.88]}>
        <planeGeometry args={[2.9, 1.9]} />
        <meshPhysicalMaterial
          transmission={0.9}
          transparent
          roughness={0.1}
          thickness={0.1}
          color="white"
        />
      </mesh>

      <mesh position={[0, 1.5, -2.87]}>
        <boxGeometry args={[2.9, 0.05, 0.01]} />
        <meshStandardMaterial color="#111" />
      </mesh>

        <mesh position={[0, 1.5, -2.87]}>
            <boxGeometry args={[0.05, 1.9, 0.01]} />
            <meshStandardMaterial color="#111" />
        </mesh>
    </>
  )
}
