import { useCallback, useContext, useEffect, useState } from 'react'
import LinearBar from '../LinearBar/LinearBar'
import Display from '../Display/Display'
import Controller from '../Controller/Controller'
import TimerButton from '../TimerButton/TimerButton'
import { TaskContext } from '../../contexts/TaskContext'
import { SoundContext } from '../../contexts/SoundContext'

export type PomodoroProps = {
  id: string
}

function Pomodoro({ id }: PomodoroProps) {
  const { storage, setStorage } = useContext(TaskContext)
  const audio = useContext(SoundContext)
  const timer = storage![id].timer.time
  const [timeRemaining, setTimeRemaining] = useState(timer * 60) // in seconds
  const [timeElapsed, setTimeElapsed] = useState(0) // in seconds
  const minutes = timer * 60
  const [viewPortX, setViewPortX] = useState(window.innerWidth)
  const [activeTimer, setActiveTimer] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (activeTimer) {
      if (timeElapsed < timer * 60 - 1) {
        const timeId = setTimeout(
          () => {
            setTimeRemaining((time) => time - 1)
            setTimeElapsed((timeElapsed) => timeElapsed + 1)
          },
          process.env.NODE_ENV === 'production' ? 1000 : 10
        )
        setTimeoutId(timeId)
      } else if (!done) {
        const mode = storage![id].timer.mode
        setStorage!({
          ...storage,
          [id]: {
            ...storage![id],
            timer:
              mode === 'focus'
                ? {
                    mode: 'short break',
                    time: 5,
                  }
                : { mode: 'focus', time: 25 },
          },
        })
        // setDone(true)
        if (audio) {
          audio.volume = 0.3
          audio.play().then(() => true)
        }
      }
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

  return (
    <div className='mt-20 flex flex-col items-center'>
      <LinearBar
        timeElapsed={timeElapsed}
        minutes={minutes}
        viewPortX={viewPortX}
      />
      <Display timeRemaining={timeRemaining} />
      <TimerButton
        doneState={{ done, setDone }}
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
        resetTime={resetTime}
        audio={audio}
      />
      <Controller taskId={id} />
    </div>
  )
}

export default Pomodoro
