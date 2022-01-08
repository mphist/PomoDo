import { useContext, useEffect, useRef, useState } from 'react'
import { TaskContext, TaskContextType } from '../../contexts/TaskContext'
import generateId from '../../lib/generateId'
import getSavedTasks from '../../lib/getSavedTasks'
import InputController from '../InputController/InputController'
import SubtaskList from '../SubtaskList/SubtaskList'

export type CreateTaskProps = {}

function CreateTask({}: CreateTaskProps) {
  const [toggleList, setToggleList] = useState(false)
  const { toggleCreate, setToggleCreate, setToggleTaskView, setTaskId } =
    useContext(TaskContext)
  const ref = useRef<HTMLInputElement>(null)
  const [uniqueId, setUniqueId] = useState('')
  const [subtaskId, setSubtaskId] = useState('')
  const [showSubtaskInputController, setShowSubtaskInputController] =
    useState(false)
  // const [inputTaskName, setInputTaskName] = useState('')
  const [localTask, setLocalTask] = useState<TaskContextType | null>(null)

  const savedTasks = getSavedTasks()

  useEffect(() => {
    //create a uniqueId for main task
    setUniqueId(generateId())

    ref.current?.focus()
    if (ref.current && ref.current.value) {
      ref.current.value = ''
    }
  }, [toggleCreate, setUniqueId])

  useEffect(() => {
    const btn = document.querySelector('.createBtn') as HTMLElement
    if (btn) {
      btn.style.opacity = '1'
      setToggleList(false)
    }
  }, [toggleList])

  if (!toggleCreate) {
    return <div className='opacity-0'></div>
  }

  const mergeTasks = (
    localTask: TaskContextType | null,
    savedTasks: TaskContextType | null
  ) => {
    return {
      ...savedTasks,
      ...localTask,
    }
  }

  const handleCreateTask = (inputTaskName: string) => {
    const el = document.querySelector('.taskList') as HTMLElement
    if (el) {
      el.style.opacity = '1'
    }
    //saving the task locally
    setLocalTask({
      [uniqueId]: {
        name: inputTaskName,
        subtask: {},
        timer: { mode: 'focus', time: 25 },
      },
    })
    setToggleList(true)
  }

  const handleCreateClick = () => {
    //merge tasks and save in localStorage
    const mergedTasks = mergeTasks(localTask, savedTasks)
    localStorage.setItem('task', JSON.stringify(mergedTasks))

    setToggleCreate!(false)
    setToggleTaskView!(true)
    setTaskId!(uniqueId)
  }

  const handleCreateSubtask = (subtaskName: string) => {
    setLocalTask({
      ...localTask,
      [uniqueId]: {
        ...localTask![uniqueId],
        subtask: {
          ...localTask![uniqueId].subtask,
          [subtaskId]: { name: subtaskName, checked: false },
        },
      },
    })
    setShowSubtaskInputController(false)
  }

  const taskNameInput = {
    taskId: uniqueId,
    className: 'taskNameInput',
    style:
      'p-2 focus:outline-none font-bold text-gray tracking-wide sm:w-50 md:w-80 lg:w-96 xl:w-[500px]',
    placeholder: 'Enter task name',
    onKeyDownFunc: handleCreateTask,
    buttonClick: handleCreateTask,
  }

  const subtaskNameInput = {
    taskId: subtaskId,
    className: 'subtaskNameInput opacity-0 transition-effect',
    style:
      'p-2 focus:outline-none font-bold text-gray tracking-wide sm:w-40 sm:text-sm md:text-base md:w-64 lg:w-86 xl:w-[400px]',
    placeholder: 'Enter subtask name',
    onKeyDownFunc: handleCreateSubtask,
    buttonClick: handleCreateSubtask,
  }

  return (
    <div className='my-40 mx-auto opacity-1 transition-effect'>
      <InputController props={taskNameInput} />
      <section className='py-20 taskList opacity-0 transition-effect'>
        <div className='subtaskInputController'>
          <div className='subTaskForm my-4 text-center'>
            {!showSubtaskInputController && (
              <button
                className='bg-burgundy text-white p-2 rounded-md text-sm'
                onClick={() => {
                  setSubtaskId(generateId())
                  setShowSubtaskInputController(true)
                }}
              >
                Add a subtask
              </button>
            )}
            {showSubtaskInputController && (
              <InputController props={subtaskNameInput} />
            )}
          </div>
        </div>
        <h2 className='bg-tomato w-72 rounded-md text-center p-2 mx-auto my-0 text-white'>
          {localTask?.[uniqueId]?.name}
        </h2>
        <SubtaskList subtasks={localTask?.[uniqueId]?.subtask} />
      </section>
      <button
        className='button-style createBtn opacity-0 transition-effect flex mx-auto'
        onClick={handleCreateClick}
      >
        Create
      </button>
    </div>
  )
}

export default CreateTask
