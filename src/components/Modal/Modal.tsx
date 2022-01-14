import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import getSavedTasks from '../../lib/getSavedTasks'

export type ModalProps = {
  state: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  }
  id: string
  name: string
  time: number
}

function Modal({ state: { show, setShow }, id, name, time }: ModalProps) {
  const [changeMode, setChangeMode] = useState(false)
  const [message, setMessage] = useState('')
  const { task, setTask } = useContext(TaskContext)
  const savedTasks = getSavedTasks()

  useEffect(() => {
    const mode = task![id]?.timer?.mode || savedTasks?.[id]?.timer?.mode

    if (name.toLowerCase() === mode) {
      return
    }
    if (mode === 'focus') {
      setMessage('Would you like to take a break?')
    } else {
      setMessage('Would you like to end your break early?')
    }
    // save storage localStorage
    if (task && Object.keys(task).length > 0) {
      localStorage.setItem('task', JSON.stringify(task))
    } else if (savedTasks) {
      localStorage.setItem('task', JSON.stringify(savedTasks))
    }
  }, [task, setMessage, id, name, savedTasks])

  useEffect(() => {
    if (changeMode) {
      setTask!({
        ...savedTasks,
        [id]: {
          ...savedTasks![id],
          timer: {
            mode: name.toLowerCase(),
            time,
          },
        },
      })
      setChangeMode(false)
    }
  }, [changeMode])

  if (!show) return null

  const handleClick = (mode: boolean) => {
    setChangeMode(mode)
    setShow(false)
  }

  return (
    <div className='w-screen h-screen fixed top-0 left-0'>
      <div className='bg-white flex flex-col items-center rounded-md font-bold text-sm text-gray-dark w-[320px] h-28 fixed left-[100px] right-0 mx-auto top-[300px]'>
        <div className='h-[70%]'>
          <p className='p-6'>{message}</p>
        </div>
        <div className='flex h-[30%] w-full justify-between'>
          <button
            id='modalYes'
            className='w-[50%] bg-tomato text-white rounded-bl-md py-2 tracking-wide hover:brightness-95'
            onClick={() => handleClick(true)}
          >
            YES
          </button>
          <button
            className='w-[50%] bg-[#bdbbbb] text-white rounded-br-md py-2 tracking-wide hover:brightness-95'
            onClick={() => handleClick(false)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
