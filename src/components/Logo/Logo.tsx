import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type LogoProps = {}

function Logo({}: LogoProps) {
  const { setToggleCreate, setToggleTaskView } = useContext(TaskContext)
  const handleLogoClick = () => {
    setToggleCreate!(false)
    setToggleTaskView!(false)
  }
  return (
    <div
      className='text-2xl font-logo text-ivory mt-2 tracking-wide cursor-pointer'
      onClick={handleLogoClick}
    >
      PomoDo
    </div>
  )
}

export default Logo
