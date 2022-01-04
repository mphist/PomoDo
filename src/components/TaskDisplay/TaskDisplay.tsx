import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

export type TaskDisplayProps = {
  id: string
}

function TaskDisplay({ id }: TaskDisplayProps) {
  const { storage } = useContext(TaskContext)
  const subtasks = storage![id].subtask
  return (
    <div className='flex flex-col justify-center mt-20'>
      <h2 className='bg-tomato w-72 rounded-md text-center p-2 mx-auto my-0 text-white'>
        {storage![id].name}
      </h2>
      <div className='subtaskList'>
        <ul>
          {subtasks &&
            Object.entries(subtasks).map((subtask, key) => (
              <li
                key={key}
                className='w-72 subtaskItem my-2 bg-primary rounded-md text-white p-2 mx-auto '
              >
                <div className='flex break-all'>
                  <input
                    className='form-checkbox w-6 h-6 mr-2 rounded-sm focus:ring-0 checked:bg-tomato checked:text-tomato'
                    id='substask'
                    name='subtask'
                    type='checkbox'
                  />
                  <span className='ml-2'>{subtask[1]}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskDisplay
