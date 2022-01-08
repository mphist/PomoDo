import { useContext, useEffect } from 'react'
import { TaskContext, TaskContextType } from '../../contexts/TaskContext'

export type TaskDisplayProps = {
  id: string
}

function TaskDisplay({ id }: TaskDisplayProps) {
  const { task, setTask } = useContext(TaskContext)
  const local = localStorage.getItem('task')
  const savedTasks: TaskContextType = local && JSON.parse(local)
  const subtasks = task![id]?.subtask || savedTasks[id]?.subtask

  useEffect(() => {
    const checkBoxes = document.querySelectorAll('.form-checkbox')
    let count = 0
    checkBoxes.forEach((box) => {
      if ((box as HTMLInputElement).checked) {
        return count++
      }
    })
    const btn = document.querySelector('.doneBtn') as HTMLButtonElement
    if (btn) {
      if (count === checkBoxes.length) {
        btn.style.opacity = '1'
        btn.disabled = false
      } else {
        btn.style.opacity = '0'
        btn.disabled = true
      }
    }
  })

  const handleClickCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (task && Object.keys(task).length > 0) {
      setTask!({
        ...task,
        [id]: {
          ...task![id],
          subtask: {
            ...task![id]?.subtask,
            [e.currentTarget.id]: {
              ...task![id]?.subtask![e.currentTarget.id],
              checked: e.currentTarget.checked,
            },
          },
        },
      })
    } else {
      setTask!({
        ...savedTasks,
        [id]: {
          ...savedTasks![id],
          subtask: {
            ...savedTasks![id]?.subtask,
            [e.currentTarget.id]: {
              ...savedTasks![id]?.subtask![e.currentTarget.id],
              checked: e.currentTarget.checked,
            },
          },
        },
      })
    }
  }

  return (
    <div className='flex flex-col justify-center mt-20'>
      <h2 className='bg-tomato w-72 rounded-md text-center p-2 mx-auto my-0 text-white'>
        {savedTasks?.[id]?.name || task![id]?.name}
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
                    className='form-checkbox w-6 h-6 mr-2 rounded-sm border-0 focus:ring-0 focus:outline-none focus:ring-offset-0 checked:bg-tomato checked:text-tomato'
                    id={subtask[0]}
                    name='subtask'
                    type='checkbox'
                    onChange={handleClickCheckbox}
                    checked={subtask[1].checked}
                  />
                  <span className='ml-2'>{subtask[1].name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <button className='doneBtn mx-auto mt-6 tracking-wide opacity-0 transition-effect bg-[#ff6c6c] text-white p-2 rounded-md hover:brightness-95'>
        DONE
      </button>
    </div>
  )
}

export default TaskDisplay
