'use client'

import { Html } from '@react-three/drei'
import { useState, useEffect } from 'react'

export default function Laptop() {
  const [screenIndex, setScreenIndex] = useState(0)

  const screens = [
    <div key="1">
      <h2 style={{ margin: 0 }}>👋 Welcome</h2>
      <p>to my 3D Portfolio</p>
    </div>,
    <div key="2">
      <h2 style={{ margin: 0 }}>📂 Projects</h2>
      <p>UI • 3D • Code</p>
    </div>,
    <div key="3">
      <h2 style={{ margin: 0 }}>📫 Contact</h2>
      <p>nci@portfolio.dev</p>
    </div>,
  ]

  // Switch every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % screens.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Laptop Base */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial color="silver" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.9, -0.4]} rotation={[-Math.PI / 8, 0, 0]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshStandardMaterial color="black" />
        <Html center distanceFactor={1.5}>
          <div
            style={{
              width: 180,
              height: 110,
              background: '#111',
              color: 'white',
              fontFamily: 'sans-serif',
              padding: '10px',
              borderRadius: '6px',
              textAlign: 'center',
            }}
          >
            {screens[screenIndex]}
          </div>
        </Html>
      </mesh>
    </>
  )
}
