import { createContext } from 'react'

type SoundContextProviderProps = {
  children: React.ReactNode
}

export const SoundContext = createContext<HTMLAudioElement | null>(null)

export const SoundContextProvider = ({
  children,
}: SoundContextProviderProps) => {
  const sound = new Audio('/assets/sound/musicbox.mp3')
  return <SoundContext.Provider value={sound}>{children}</SoundContext.Provider>
}
