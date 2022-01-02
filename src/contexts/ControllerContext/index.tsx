import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import generateId from '../../lib/generateId'

type ControllerContextProviderProps = {
  children: ReactNode
}

export type ControllerContextType = {
  [id: string]: {
    mode: string
    timer: number
  }
}

export const ControllerContext = createContext<
  { controller: ControllerContextType | null } & {
    setController: Dispatch<SetStateAction<ControllerContextType>> | null
  }
>({ controller: null, setController: null })

export const ControllerProvider = ({
  children,
}: ControllerContextProviderProps) => {
  const [controller, setController] = useState({
    [generateId()]: { mode: 'focus', timer: 25 },
  })
  return (
    <ControllerContext.Provider value={{ controller, setController }}>
      {children}
    </ControllerContext.Provider>
  )
}
