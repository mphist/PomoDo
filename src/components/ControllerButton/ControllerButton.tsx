import { useContext, useState } from 'react'
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
  const savedTasks = getSavedTasks()
  return (
    <div>
      <button
        className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm font-bold uppercase cursor-pointer tracking-wide hover:brightness-95'
        onClick={() => {
          if (task && Object.keys(task).length > 0) {
            if (name.toLowerCase() !== task![id]?.timer?.mode) {
              setShow(true)
            }
          } else {
            if (name.toLowerCase() !== savedTasks![id]?.timer.mode) {
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
