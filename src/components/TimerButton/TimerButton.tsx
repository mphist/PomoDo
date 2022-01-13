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
  audio: HTMLAudioElement | null
}

function TimerButton({
  activeTimer,
  setActiveTimer,
  resetTime,
  doneState: { done, setDone },
  audio,
}: TimerButtonProps) {
  return (
    <div className='relative top-[-340px]'>
      {!done && (
        <button
          className='bg-[#ff5c58] border-[1px] w-10 mx-1 text-[#000] tracking-wide hover:brightness-95 mt-14 rounded-lg pt-2 pb-1 px-2'
          onClick={() => {
            // if (audio) {
            //   audio.pause()
            //   // audio.currentTime = 0
            // }
            setActiveTimer(!activeTimer)
          }}
        >
          {activeTimer ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
      )}
      <button
        className='bg-[#93b5c6] border-[1px] w-10 mx-1 text-[#000] tracking-wide hover:brightness-95 mt-14 rounded-lg pt-2 pb-1 px-2'
        onClick={() => {
          resetTime()
          // setDone(false)
        }}
      >
        {<FontAwesomeIcon icon={faUndoAlt} />}
      </button>
    </div>
  )
}

export default TimerButton
