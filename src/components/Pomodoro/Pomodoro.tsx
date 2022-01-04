import { useCallback, useContext, useEffect, useState } from 'react'
import LinearBar from '../LinearBar/LinearBar'
import Display from '../Display/Display'
import Controller from '../Controller/Controller'
import TimerButton from '../TimerButton/TimerButton'
import { TaskContext } from '../../contexts/TaskContext'

export type PomodoroProps = {
  id: string
}

function Pomodoro({ id }: PomodoroProps) {
  const { storage } = useContext(TaskContext)
  const timer = storage![id].timer.time
  const [timeRemaining, setTimeRemaining] = useState(timer * 60) // in seconds
  const [timeElapsed, setTimeElapsed] = useState(0) // in seconds
  const minutes = timer * 60
  const [viewPortX, setViewPortX] = useState(window.innerWidth)
  const [activeTimer, setActiveTimer] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

  useEffect(() => {
    if (activeTimer && timeElapsed < timer * 60 - 1) {
      const id = setTimeout(() => {
        setTimeRemaining((time) => time - 1)
        setTimeElapsed((timeElapsed) => timeElapsed + 1)
      }, 10)
      setTimeoutId(id)
    } else {
      clearTimeout(timeoutId!)
    }

    window.addEventListener('resize', (e) => {
      const window = e.currentTarget as Window
      setViewPortX(window.innerWidth)
    })
  }, [timeRemaining, setTimeRemaining, activeTimer])

  const resetTime = useCallback(() => {
    setActiveTimer(false)
    setTimeRemaining(timer * 60)
    setTimeElapsed(0)
  }, [timer])

  useEffect(() => {
    resetTime()
  }, [storage, resetTime])

  // useEffect(() => {
  //   if (activeTimer) {
  //     const pause = window.confirm('Do you wanna pause?')
  //     if (pause) {
  //       setTimeRemaining(timer * 60)
  //       setActiveTimer(true)
  //     }
  //   }
  // }, [timer, setTimeRemaining, setActiveTimer])

  return (
    <div className='mt-20 flex flex-col items-center'>
      <LinearBar
        timeElapsed={timeElapsed}
        minutes={minutes}
        viewPortX={viewPortX}
      />
      <Display timeRemaining={timeRemaining} />
      <TimerButton
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
        resetTime={resetTime}
      />
      <Controller taskId={id} />
    </div>
  )
}

export default Pomodoro
