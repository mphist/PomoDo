import { useContext, useEffect } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import Pomodoro from '../Pomodoro/Pomodoro'

export type TaskViewProps = {
  taskId: string
}

function TaskView({ taskId }: TaskViewProps) {
  const { toggleTaskView } = useContext(TaskContext)
  useEffect(() => {
    const div = document.querySelector('.taskView') as HTMLElement
    if (div) {
      div.style.opacity = '1'
    }
  })
  if (!toggleTaskView) return null
  return (
    <div className='opacity-0 taskView transition-effect'>
      <Pomodoro id={taskId} />
    </div>
  )
}

export default TaskView