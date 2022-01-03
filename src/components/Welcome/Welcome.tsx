import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type WelcomeProps = {}

function Welcome({}: WelcomeProps) {
  const { toggleCreate } = useContext(TaskContext)
  if (toggleCreate) {
    return <div className='opacity-0'></div>
  }
  return (
    <div className='mx-auto transition opacity ease-in-out duration-1000 mt-56 text-center text-tomato font-bold'>
      <h1 className='text-3xl p-10 tracking-wide'>Welcome to PomoDo!</h1>
      <h3 className='text-xl'>Create a new task to get started.</h3>
    </div>
  )
}

export default Welcome
