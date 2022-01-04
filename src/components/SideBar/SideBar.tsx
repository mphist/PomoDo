import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import TaskButton from '../TaskButton/TaskButton'

export type SideBarProps = {}

function SideBar({}: SideBarProps) {
  const { storage } = useContext(TaskContext)
  const tasks = Object.entries(storage!)
  return (
    <div className='mt-10'>
      <ul>
        <TaskButton name='New Task' />
        {tasks.map((task, key) => (
          <TaskButton key={key} id={task[0]} name={task[1].name} />
        ))}
      </ul>
    </div>
  )
}

export default SideBar
