import { useContext, useEffect, useRef, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import generateId from '../../lib/generateId'
import InputController from '../InputController/InputController'
import SubtaskList from '../SubtaskList/SubtaskList'

export type CreateTaskProps = {}

function CreateTask({}: CreateTaskProps) {
  const [toggleList, setToggleList] = useState(false)
  const { toggleCreate, task, setTask } = useContext(TaskContext)
  const ref = useRef<HTMLInputElement>(null)
  const [uniqueId, setUniqueId] = useState('')
  const [subtaskId, setSubtaskId] = useState('')
  const [showSubtaskInputController, setShowSubtaskInputController] =
    useState(false)

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

  const handleCreateTask = (inputTaskName: string) => {
    const el = document.querySelector('.taskList') as HTMLElement
    if (el) {
      el.style.opacity = '1'
    }
    //saving the task here
    setTask!({
      ...task,
      [uniqueId]: {
        name: inputTaskName,
        subtask: { ...task?.[uniqueId]?.subtask } || null,
      },
    })
    setToggleList(true)
  }

  const handleCreateSubtask = (subtaskName: string) => {
    setTask!({
      ...task,
      [uniqueId]: {
        ...task?.[uniqueId]!,
        subtask: {
          ...task?.[uniqueId]!.subtask,
          [subtaskId]: subtaskName,
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
          {task?.[uniqueId]?.name}
        </h2>
        <SubtaskList subtasks={task?.[uniqueId]?.subtask} />
      </section>
      <button className='button-style createBtn opacity-0 transition-effect flex mx-auto'>
        Create
      </button>
    </div>
  )
}

export default CreateTask
