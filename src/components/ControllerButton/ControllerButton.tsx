import { useContext } from 'react'
import { ControllerContext } from '../../contexts/ControllerContext'

export type ControllerButtonProps = {
  name: string
  timer: number
  id?: string
}

function ControllerButton({ name, timer, id }: ControllerButtonProps) {
  const { controller, setController } = useContext(ControllerContext)
  return (
    <button
      className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm font-bold uppercase cursor-pointer tracking-wide hover:brightness-95'
      onClick={() =>
        setController!({
          ...controller!,
          [id!]: { mode: name.toLowerCase(), timer: timer },
        })
      }
    >
      {name}
    </button>
  )
}

export default ControllerButton
