import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import getSavedTasks from '../../lib/getSavedTasks'

export type TaskButtonProps = {
  id?: string
  name: string
}

function TaskButton({ id, name }: TaskButtonProps) {
  const { setToggleCreate, setToggleTaskView, setTaskId, task, taskId } =
    useContext(TaskContext)
  const [showSubtasks, setShowSubtasks] = useState(false)
  const tasks = task && Object.keys(task).length > 0 ? task : getSavedTasks()
  const subtasks = tasks?.[id!]?.subtask

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (name === 'New Task') {
      setToggleCreate!(true)
      setToggleTaskView!(false)
    } else {
      setToggleCreate!(false)
      setToggleTaskView!(true)
      setTaskId!(id!)
      setShowSubtasks(!showSubtasks)
    }
  }

  return (
    <li
      id={id}
      className='border-[#000] border-[2px] mt-3 mx-auto w-60 bg-[#868e96] text-black text-[12px] font-bold py-3 px-2 
    tracking-wide cursor-pointer hover:brightness-95 overflow-hidden whitespace-nowrap text-ellipsis'
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ color: 'black' }} />
      <span className='ml-2'>{name}</span>
      <ul className='subtasks ml-7'>
        {showSubtasks &&
          subtasks &&
          Object.entries(subtasks).map((subtask, key) => (
            <li key={key}>{subtask[1].name}</li>
          ))}
      </ul>
    </li>
  )
}

export default TaskButton
