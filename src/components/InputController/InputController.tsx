import React, { useContext, useEffect, useRef, useState } from 'react'
import { TaskContext } from '../../contexts/TaskContext'
import generateId from '../../lib/generateId'

export type InputControllerProps = {
  props: {
    taskId: string
    className: string
    style: string
    placeholder: string
    onKeyDownFunc: (inputTaskName: string) => void
    buttonClick: (subtaskName: string) => void
  }
}

function InputController({
  props: { taskId, className, style, placeholder, onKeyDownFunc, buttonClick },
}: InputControllerProps) {
  const [inputTaskName, setInputTaskName] = useState('')
  const [uniqueId, setUniqueId] = useState('')
  const { toggleCreate, task, setTask } = useContext(TaskContext)
  const ref = useRef<HTMLInputElement>(null)

  const handleChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTaskName(e.target.value)
  }

  useEffect(() => {
    const div = document.querySelector('.subtaskNameInput') as HTMLElement
    if (div) {
      div.style.opacity = '1'
    }
    //create a uniqueId for main task
    setUniqueId(generateId())

    ref.current?.focus()
    if (ref.current && ref.current.value) {
      ref.current.value = ''
    }
  }, [toggleCreate, setUniqueId])
  return (
    <div className={className}>
      <input
        className={style}
        type='text'
        placeholder={placeholder}
        value={inputTaskName}
        onChange={handleChangeTaskName}
        onKeyDown={(e) =>
          e.key === 'Enter' && `${onKeyDownFunc(inputTaskName)}`
        }
        ref={ref}
      />
      <button
        className='bg-[#93b5c6] tracking-wide text-black p-2 hover:brightness-95'
        onClick={() => buttonClick(inputTaskName)}
      >
        Enter
      </button>
    </div>
  )
}

export default InputController
