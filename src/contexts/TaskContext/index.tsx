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
      [id: string]: { name: string; checked: boolean }
    } | null
    timer: {
      mode: string
      time: number
    }
  }
}

export const TaskContext = createContext<
  { storage: TaskContextType | null } & {
    setStorage: Dispatch<SetStateAction<TaskContextType>> | null
  } & { task: TaskContextType | null } & {
    setTask: Dispatch<SetStateAction<TaskContextType>> | null
  } & { toggleCreate: boolean } & {
    setToggleCreate: Dispatch<SetStateAction<boolean>> | null
  } & { toggleTaskView: boolean } & {
    setToggleTaskView: Dispatch<SetStateAction<boolean>> | null
  } & { taskId: string } & {
    setTaskId: Dispatch<SetStateAction<string>> | null
  }
>({
  storage: null,
  setStorage: null,
  task: null,
  setTask: null,
  toggleCreate: false,
  setToggleCreate: null,
  toggleTaskView: false,
  setToggleTaskView: null,
  taskId: '',
  setTaskId: null,
})

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [task, setTask] = useState({})
  const [storage, setStorage] = useState({})
  const [toggleCreate, setToggleCreate] = useState(false)
  const [toggleTaskView, setToggleTaskView] = useState(false)
  const [taskId, setTaskId] = useState('')
  return (
    <TaskContext.Provider
      value={{
        storage,
        setStorage,
        task,
        setTask,
        toggleCreate,
        setToggleCreate,
        toggleTaskView,
        setToggleTaskView,
        taskId,
        setTaskId,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
