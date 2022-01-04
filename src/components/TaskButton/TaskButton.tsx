import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type TaskButtonProps = {
  id?: string
  name: string
}

function TaskButton({ id, name }: TaskButtonProps) {
  const { setToggleCreate, setToggleTaskView, setTaskId, storage, setStorage } =
    useContext(TaskContext)

  const handleClick = () => {
    if (name === 'New Task') {
      setToggleCreate!(true)
      setToggleTaskView!(false)
    } else {
      setToggleCreate!(false)
      setToggleTaskView!(true)
      setTaskId!(id!)
    }
    // if (id) {
    //   setStorage!({
    //     ...storage,
    //     [id]: {
    //       ...storage![id],
    //       timer: {
    //         ...storage![id].timer,
    //         savedTime: remainingTime
    //       }
    //     },
    //   })
    // }
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
