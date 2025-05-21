import { create } from 'zustand'

type State = {
  weather: 'sun' | 'rain' | 'snow'
  time: 'day' | 'night'
  setWeather: (w: State['weather']) => void
  setTime: (t: State['time']) => void
}

export const useEnvironmentStore = create<State>((set) => ({
  weather: 'sun',
  time: 'day',
  setWeather: (w) => set({ weather: w }),
  setTime: (t) => set({ time: t }),
}))
