'use client'

import { useEnvironmentStore } from '@/app/store/useEnvironmentStore'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function Road() {
  const { time } = useEnvironmentStore()

  const [vehicles, setVehicles] = useState<{ id: number; x: number }[]>([])
  const vehicleTimer = useRef(0)

  const [people, setPeople] = useState<{ id: number; x: number }[]>([])
  const peopleTimer = useRef(0)

  // Spawn vehicles every 10 seconds
  useFrame((_, delta) => {
    vehicleTimer.current += delta
    if (vehicleTimer.current > 10) {
      setVehicles((v) => [...v, { id: Date.now(), x: -5 }])
      vehicleTimer.current = 0
    }

    // Move vehicles
    setVehicles((v) =>
      v
        .map((car) => ({ ...car, x: car.x + 0.03 }))
        .filter((car) => car.x < 5)
    )
  })

  useFrame((_, delta) => {
    // pedestrian spawn timer
    peopleTimer.current += delta
    if (peopleTimer.current > 12 && time === 'day') {
      setPeople((p) => [...p, { id: Date.now(), x: -5 }])
      peopleTimer.current = 0
    }
  
    // move pedestrians
    setPeople((p) =>
      p
        .map((person) => ({ ...person, x: person.x + 0.015 }))
        .filter((person) => person.x < 5)
    )
  })

  return (
    <>
      {/* Road */}
      <mesh position={[0, 0, -5]} receiveShadow>
        <boxGeometry args={[10, 0.05, 2]} />
        <meshStandardMaterial color="#333" />
      </mesh>

      {/* Footpath */}
      <mesh position={[0, 0.05, -3.5]} receiveShadow>
        <boxGeometry args={[10, 0.05, 1]} />
        <meshStandardMaterial color="#888" />
      </mesh>

      {/* Streetlights (only on at night) */}
      {[-3.5, 0, 3.5].map((x, i) => (
        <group key={i} position={[x, 0, -6]}>
          <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 3]} />
            <meshStandardMaterial color="gray" />
          </mesh>
          {time === 'night' && (
            <spotLight
              position={[0, 3, 0]}
              angle={0.4}
              distance={5}
              intensity={1.2}
              color="yellow"
              castShadow
            />
          )}
        </group>
      ))}

      {/* Vehicles */}
      {vehicles.map((car) => (
        <mesh key={car.id} position={[car.x, 0.15, -5]} castShadow>
          <boxGeometry args={[0.6, 0.3, 1.2]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}

        {people.map((person) => (
        <mesh key={person.id} position={[person.x, 0.25, -3.5]} castShadow>
            <boxGeometry args={[0.2, 0.5, 0.2]} />
            <meshStandardMaterial color={`hsl(${Math.random() * 360}, 60%, 70%)`} />
        </mesh>
        ))}
    </>
  )
}
