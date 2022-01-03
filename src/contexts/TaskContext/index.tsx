import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type TaskContextProviderProps = {
  children: ReactNode
}

export type TaskContextType = {
  [id: string]: {
    name: string
    subtask: {
      [id: string]: string
    } | null
  }
}

export const TaskContext = createContext<
  { task: TaskContextType | null } & {
    setTask: Dispatch<SetStateAction<TaskContextType>> | null
  } & { toggleCreate: boolean } & {
    setToggleCreate: Dispatch<SetStateAction<boolean>> | null
  }
>({ task: null, setTask: null, toggleCreate: false, setToggleCreate: null })

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [task, setTask] = useState({})
  const [toggleCreate, setToggleCreate] = useState(false)
  return (
    <TaskContext.Provider
      value={{ task, setTask, toggleCreate, setToggleCreate }}
    >
      {children}
    </TaskContext.Provider>
  )
}
