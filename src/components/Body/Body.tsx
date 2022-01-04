import { useContext } from 'react'
import { ControllerProvider } from '../../contexts/ControllerContext'
import { TaskContext } from '../../contexts/TaskContext'
import CreateTask from '../CreateTask/CreateTask'
import TaskView from '../TaskView/TaskView'
import Welcome from '../Welcome/Welcome'

export type BodyProps = {}

function Body({}: BodyProps) {
  const { taskId } = useContext(TaskContext)
  return (
    <div className='h-full flex flex-col'>
      <ControllerProvider>
        <Welcome />
        <CreateTask />
        <TaskView taskId={taskId} />
      </ControllerProvider>
    </div>
  )
}

export default Body
