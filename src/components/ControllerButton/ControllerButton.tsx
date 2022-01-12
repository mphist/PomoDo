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

  console.log(name)
  useEffect(() => {
    switch (name) {
      case 'Focus':
        setClassName(
          'p-2 bg-[#F38181] relative top-[-150px] w-[125px] rounded-[2px] text-white text-sm font-bold uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
        break
      case 'Short Break':
        setClassName(
          'p-2 bg-[#A7BBC7] relative top-[-150px] w-[125px] rounded-[2px] text-white text-sm font-bold uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
        break
      case 'Long Break':
        setClassName(
          'p-2 bg-[#756C83] relative top-[-150px] w-[125px] rounded-[2px] text-white text-sm font-bold uppercase cursor-pointer shadow-sm shadow-[rgba(0,0,0,0.17)] hover:brightness-95'
        )
    }
  }, [setClassName, id, name])

  console.log(className)
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
