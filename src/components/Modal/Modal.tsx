import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

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
  const { storage, setStorage } = useContext(TaskContext)

  useEffect(() => {
    const mode = storage![id].timer.mode
    if (name.toLowerCase() === mode) {
      return
    }
    if (mode === 'focus') {
      setMessage('Would you like to take a break?')
    } else {
      setMessage('Would you like to end your break early?')
    }
  }, [storage, setMessage, id, name])

  useEffect(() => {
    if (changeMode) {
      setStorage!({
        ...storage,
        [id]: {
          ...storage![id],
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
      <div className='bg-white flex flex-col items-center rounded-md w-[270px] h-32 fixed top-72 left-[56%] ml-[-135px]'>
        <div className='h-[70%]'>
          <p className='p-6'>{message}</p>
        </div>
        <div className='flex h-[30%] w-full justify-between'>
          <button
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
