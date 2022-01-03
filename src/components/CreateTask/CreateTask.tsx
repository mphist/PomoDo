import { useContext, useEffect, useRef, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type CreateTaskProps = {}

function CreateTask({}: CreateTaskProps) {
  const [inputTaskName, setInputTaskName] = useState('')
  const [displayTaskName, setDisplayTaskName] = useState('')
  const [toggleList, setToggleList] = useState(false)
  const { toggleCreate } = useContext(TaskContext)
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  })

  if (!toggleCreate) {
    return <div className='opacity-0'></div>
  }

  const handleChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskName(e.target.value)
  }

  const handleToggleList = () => {
    const el = document.querySelector('.taskList') as HTMLElement
    if (el) {
      // el.className = 'taskList visible'
      el.style.opacity = '1'
    }
    setToggleList(true)
    setDisplayTaskName(inputTaskName)
  }

  return (
    <div className='my-40 mx-auto opacity-1 transition opacity ease-in-out duration-1000'>
      <div className='taskNameInput'>
        <input
          className='p-2 focus:outline-none font-bold tracking-wide sm:w-50 md:w-80 lg:w-96 xl:w-[500px]'
          type='text'
          placeholder='Enter task name'
          value={inputTaskName}
          onChange={handleChangeTaskName}
          ref={ref}
        />
        <button
          className='bg-burgundy tracking-wide font-bold text-white p-2 hover:brightness-95'
          onClick={handleToggleList}
        >
          Enter
        </button>
      </div>
      <div className='taskList opacity-0 transition opacity duration-1000'>
        {displayTaskName}
      </div>
    </div>
  )
}

export default CreateTask
