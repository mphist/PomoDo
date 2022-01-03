import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type LogoProps = {}

function Logo({}: LogoProps) {
  const { setToggleCreate } = useContext(TaskContext)
  return (
    <div
      className='text-2xl font-logo text-ivory mt-2 tracking-wide cursor-pointer'
      onClick={() => setToggleCreate!(false)}
    >
      PomoDo
    </div>
  )
}

export default Logo
