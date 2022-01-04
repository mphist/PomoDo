import { faPause, faPlay, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export type TimerButtonProps = {
  activeTimer: boolean
  setActiveTimer: React.Dispatch<React.SetStateAction<boolean>>
  resetTime: () => void
  doneState: {
    done: boolean
    setDone: React.Dispatch<React.SetStateAction<boolean>>
  }
}

function TimerButton({
  activeTimer,
  setActiveTimer,
  resetTime,
  doneState: { done, setDone },
}: TimerButtonProps) {
  return (
    <div>
      {!done && (
        <button
          className='bg-burgundy w-10 mx-1  text-white tracking-wide hover:brightness-95 mt-14 rounded-lg py-1 px-2'
          onClick={() => setActiveTimer(!activeTimer)}
        >
          {activeTimer ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      )}
      <button
        className='bg-burgundy w-10 mx-1 text-white tracking-wide hover:brightness-95 mt-14 rounded-lg py-1 px-2'
        onClick={() => {
          resetTime()
          setDone(false)
        }}
      >
        {<FontAwesomeIcon icon={faUndoAlt} />}
      </button>
    </div>
  )
}

export default TimerButton
