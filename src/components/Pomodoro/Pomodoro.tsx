import { useEffect, useState } from 'react'
import LinearBar from '../LinearBar/LinearBar'
import Timer from '../Timer/Timer'

export type PomodoroProps = {}

function Pomodoro({}: PomodoroProps) {
  const [timeRemaining, setTimeRemaining] = useState(60) // in seconds
  const [timeElapsed, setTimeElapsed] = useState(0) // in seconds
  const [minutes, setMinutes] = useState(1 * 60) // in seconds

  useEffect(() => {
    if (timeElapsed < 59)
      setTimeout(() => {
        setTimeRemaining((time) => time - 1)
        setTimeElapsed((timeElapsed) => timeElapsed + 1)
      }, 1000)
  }, [timeRemaining, setTimeRemaining])

  return (
    <div className='mt-20 flex flex-col items-center'>
      <LinearBar timeElapsed={timeElapsed} minutes={minutes} />
      <Timer timeRemaining={timeRemaining} />
    </div>
  )
}

export default Pomodoro
