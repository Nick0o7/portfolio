'use client'
import dynamic from 'next/dynamic'

// 👇 Load only on client side — this is crucial
const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false,
  loading: () => <div>Loading 3D scene...</div>,
})

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Scene />
    </main>
  )
}
