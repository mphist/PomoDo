import { useState } from 'react'
import Modal from '../Modal/Modal'

export type ControllerButtonProps = {
  name: string
  time: number
  id: string
}

function ControllerButton({ name, time, id }: ControllerButtonProps) {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm font-bold uppercase cursor-pointer tracking-wide hover:brightness-95'
        onClick={() => setShow(true)}
      >
        {name}
      </button>
      <Modal state={{ show, setShow }} id={id} name={name} time={time} />
    </div>
  )
}

export default ControllerButton
