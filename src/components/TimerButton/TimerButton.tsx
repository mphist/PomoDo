import { faPause, faPlay, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type TimerButtonProps = {
  activeTimer: boolean
  setActiveTimer: React.Dispatch<React.SetStateAction<boolean>>
  resetTime: () => void
}

function TimerButton({
  activeTimer,
  setActiveTimer,
  resetTime,
}: TimerButtonProps) {
  return (
    <div>
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
      <button
        className='bg-burgundy w-10 mx-1 text-white tracking-wide hover:brightness-95 mt-14 rounded-lg py-1 px-2'
        onClick={() => resetTime()}
      >
        {<FontAwesomeIcon icon={faUndoAlt} />}
      </button>
    </div>
  )
}

export default TimerButton
