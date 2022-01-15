import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'

export type SubtaskListProps = {
  subtasks:
    | {
        [subtaskId: string]: { name: string; checked: boolean }
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
              className='w-72 subtaskItem opacity-0 transition-effect my-2 bg-[#97bfb4] text-black p-2 mx-auto '
            >
              <div className='flex break-all'>
                <FontAwesomeIcon
                  id={subtask[0]}
                  icon={faTrashAlt}
                  className='cursor-pointer my-1'
                  onClick={deleteSubtask}
                />
                <span className='ml-2'>{subtask[1].name}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SubtaskList
