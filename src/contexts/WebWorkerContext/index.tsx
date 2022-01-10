import { createContext } from 'react'

type WebWorkerContextProviderProps = {
  children: React.ReactNode
}

export const WebWorkerContext = createContext<Worker | null>(null)

export const WebWorkerContextProvider = ({
  children,
}: WebWorkerContextProviderProps) => {
  const timerWorker = new Worker('./workers/timerWorker.js')
  return (
    <WebWorkerContext.Provider value={timerWorker}>
      {children}
    </WebWorkerContext.Provider>
  )
}
