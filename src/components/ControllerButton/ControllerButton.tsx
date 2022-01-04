import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import Modal from '../Modal/Modal'

export type ControllerButtonProps = {
  name: string
  time: number
  id: string
}

function ControllerButton({ name, time, id }: ControllerButtonProps) {
  const [show, setShow] = useState(false)
  const { storage } = useContext(TaskContext)
  return (
    <div>
      <button
        className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm font-bold uppercase cursor-pointer tracking-wide hover:brightness-95'
        onClick={() => {
          if (name.toLowerCase() !== storage![id].timer.mode) {
            setShow(true)
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
