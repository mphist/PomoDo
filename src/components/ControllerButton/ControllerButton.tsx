import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import getSavedTasks from '../../lib/getSavedTasks'
import Modal from '../Modal/Modal'

export type ControllerButtonProps = {
  name: string
  time: number
  id: string
}

function ControllerButton({ name, time, id }: ControllerButtonProps) {
  const [show, setShow] = useState(false)
  const { task } = useContext(TaskContext)
  const [className, setClassName] = useState('')
  const savedTasks = getSavedTasks()
  const tasks = task && Object.keys(task).length > 0 ? task : savedTasks

  useEffect(() => {
    switch (name) {
      case 'Focus':
        setClassName(
          'p-2 bg-[#ff5c58] border-[1px] relative top-[-150px] w-[125px] rounded-[2px] text-black text-sm uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
        break
      case 'Short Break':
        setClassName(
          'p-2 bg-[#97bfb4] border-[1px] relative top-[-150px] w-[125px] rounded-[2px] text-black text-sm uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
        break
      case 'Long Break':
        setClassName(
          'p-2 bg-[#93b5c6] border-[1px] relative top-[-150px] w-[125px] rounded-[2px] text-black text-sm uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
    }
  }, [setClassName, id, name])

  return (
    <div>
      <button
        className={className}
        onClick={() => {
          // if (task && Object.keys(task).length > 0) {
          //   if (name.toLowerCase() !== task![id]?.timer?.mode) {
          //     setShow(true)
          //   }
          // } else {
          //   if (name.toLowerCase() !== savedTasks![id]?.timer.mode) {
          //     setShow(true)
          //   }
          // }
          if (tasks) {
            if (name.toLowerCase() !== tasks[id]?.timer?.mode) {
              setShow(true)
            }
          }
        }}
      >
        {name}
      </button>
      <Modal state={{ show, setShow }} id={id} name={name} time={time} />
    </div>
  )
}

export default ControllerButton
