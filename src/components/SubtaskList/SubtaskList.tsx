import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

export type SubtaskListProps = {
  subtasks:
    | {
        [subtaskId: string]: string
      }
    | undefined
    | null
}

function SubtaskList({ subtasks }: SubtaskListProps) {
  const [, setReRender] = useState(false)

  useEffect(() => {
    const liArr = document.querySelectorAll('.subtaskItem')
    if (liArr) {
      liArr.forEach((li) => {
        ;(li as HTMLElement).style.opacity = '1'
      })
    }
  })

  if (subtasks && Object.keys(subtasks).length < 1) return null

  const deleteSubtask = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    delete subtasks?.[e.currentTarget.id]
    setReRender((r) => !r)
  }

  return (
    <div className='subtaskList'>
      <ul>
        {subtasks &&
          Object.entries(subtasks).map((subtask, key) => (
            <li
              key={key}
              className='w-72 subtaskItem opacity-0 transition-effect my-2 bg-primary rounded-md text-white p-2 mx-auto '
            >
              {subtasks && (
                <div className='p-1 flex break-all'>
                  {/* <input
                    className='form-checkbox w-6 h-6 mr-2 rounded-sm focus:ring-0 checked:bg-tomato checked:text-tomato'
                    id='substask'
                    name='subtask'
                    type='checkbox'
                    value='hi'
                  /> */}
                  <FontAwesomeIcon
                    id={subtask[0]}
                    icon={faTrashAlt}
                    className='cursor-pointer my-1'
                    onClick={deleteSubtask}
                  />
                  <span className='ml-2'>{subtask[1]}</span>
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SubtaskList
