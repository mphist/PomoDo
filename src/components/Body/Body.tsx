import { useContext } from 'react'
import { ControllerProvider } from '../../contexts/ControllerContext'
import { SoundContextProvider } from '../../contexts/SoundContext'
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
        <SoundContextProvider>
          <TaskView taskId={taskId} />
        </SoundContextProvider>
      </ControllerProvider>
    </div>
  )
}

export default Body
