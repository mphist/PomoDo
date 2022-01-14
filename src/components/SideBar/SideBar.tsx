import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import { Task } from '../../types'
import TaskButton from '../TaskButton/TaskButton'

export type SideBarProps = {}

function SideBar({}: SideBarProps) {
  const { task } = useContext(TaskContext)
  const [savedTasks, setSavedTasks] = useState<[string, Task][] | null>(null)
  const local = localStorage.getItem('task')
  useEffect(() => {
    if (local) {
      setSavedTasks(Object.entries(JSON.parse(local)))
    } else {
      setSavedTasks(null)
    }
  }, [setSavedTasks, local])

  const tasks =
    task && Object.entries(task!).length > 0
      ? Object.entries(task!)
      : savedTasks

  return (
    <div className='mt-32'>
      <ul className=''>
        {/* <TaskButton name='New Task' /> */}
        <div className='px-6 flex items-center cursor-pointer w-max'>
          <FontAwesomeIcon icon={faPlus} />
          <span className='ml-3 text-lg'>New Task</span>
        </div>
        <div className='border-b-[1px] mt-4'></div>
        <div className='text-center mt-4 text-lg'>Tasks</div>
        {tasks?.map((task, key) => (
          <TaskButton key={key} id={task[0]} name={task[1].name} />
        ))}
      </ul>
    </div>
  )
}

export default SideBar
