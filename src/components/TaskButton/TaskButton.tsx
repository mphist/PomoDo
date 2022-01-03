import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type TaskButtonProps = {
  name: string
}

function TaskButton({ name }: TaskButtonProps) {
  const { toggleCreate, setToggleCreate, setToggleTaskView } =
    useContext(TaskContext)

  const handleClick = () => {
    if (name === 'New Task') {
      setToggleCreate!(true)
      setToggleTaskView!(false)
    }
  }

  return (
    <li
      className='mt-3 w-20 bg-tomato text-center text-white text-[12px] font-bold py-1 px-2 
    tracking-wide rounded-md cursor-pointer hover:brightness-95 overflow-hidden whitespace-nowrap text-ellipsis'
      style={{
        background: `${name === 'New Task' && 'var(--color-bg-burgundy'}`,
      }}
      onClick={handleClick}
    >
      {name}
    </li>
  )
}

export default TaskButton
