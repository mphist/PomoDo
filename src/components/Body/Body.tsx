import { useContext } from 'react'
import { ControllerProvider } from '../../contexts/ControllerContext'
import { TaskContext } from '../../contexts/TaskContext'
import CreateTask from '../CreateTask/CreateTask'
import Pomodoro from '../Pomodoro/Pomodoro'
import Welcome from '../Welcome/Welcome'

export type BodyProps = {}

function Body({}: BodyProps) {
  const { toggleCreate } = useContext(TaskContext)
  return (
    <div className='h-full flex flex-col'>
      <ControllerProvider>
        {/* {!toggleCreate && <Welcome />} */}
        <Welcome />
        <CreateTask />
        {/* <Pomodoro /> */}
      </ControllerProvider>
    </div>
  )
}

export default Body