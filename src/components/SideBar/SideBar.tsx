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
    }
  }, [setSavedTasks, local])

  const tasks =
    Object.entries(task!).length > 0 ? Object.entries(task!) : savedTasks

  return (
    <div className='mt-10'>
      <ul>
        <TaskButton name='New Task' />
        {tasks?.map((task, key) => (
          <TaskButton key={key} id={task[0]} name={task[1].name} />
        ))}
      </ul>
    </div>
  )
}

export default SideBar
