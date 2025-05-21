'use client'

import { useControls } from 'leva'
import { useEnvironmentStore } from '@/app/store/useEnvironmentStore'
import { useEffect } from 'react'

// Import literal types
type Weather = 'sun' | 'rain' | 'snow'
type Time = 'day' | 'night'

export default function EnvironmentController() {
  const { setWeather, setTime } = useEnvironmentStore()

  const controls = useControls('Environment', {
    weather: {
      options: ['sun', 'rain', 'snow'] as Weather[], // Assert literal type
      value: 'sun' as Weather, // optional: default value
    },
    time: {
      options: ['day', 'night'] as Time[], // Assert literal type
      value: 'day' as Time, // optional: default value
    },
  })

  useEffect(() => {
    // Explicitly cast to match the expected types
    setWeather(controls.weather as Weather)
    setTime(controls.time as Time)
  }, [controls.weather, controls.time, setWeather, setTime])

  return null
}
