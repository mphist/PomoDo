import { useContext, useEffect, useState } from 'react'
import LinearBar from '../LinearBar/LinearBar'
import Display from '../Display/Display'
import Controller from '../Controller/Controller'
import { ControllerContext } from '../../contexts/ControllerContext'
import TimerButton from '../TimerButton/TimerButton'

export type PomodoroProps = {}

function Pomodoro({}: PomodoroProps) {
  const { controller } = useContext(ControllerContext)
  const timer = controller![''].timer
  const [timeRemaining, setTimeRemaining] = useState(timer * 60) // in seconds
  const [timeElapsed, setTimeElapsed] = useState(0) // in seconds
  const minutes = timer * 60
  const [viewPortX, setViewPortX] = useState(window.innerWidth)
  const [activeTimer, setActiveTimer] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()

  useEffect(() => {
    console.log(timeRemaining, activeTimer)
    if (activeTimer && timeElapsed < timer * 60 - 1) {
      const id = setTimeout(() => {
        setTimeRemaining((time) => time - 1)
        setTimeElapsed((timeElapsed) => timeElapsed + 1)
      }, 1000)
      setTimeoutId(id)
    } else {
      clearTimeout(timeoutId!)
    }

    window.addEventListener('resize', (e) => {
      const window = e.currentTarget as Window
      setViewPortX(window.innerWidth)
    })
  }, [timeRemaining, setTimeRemaining, activeTimer])

  useEffect(() => {
    if (activeTimer) {
      const pause = window.confirm('Do you wanna pause?')
      if (pause) {
        setTimeRemaining(timer * 60)
        setActiveTimer(true)
      }
    }
  }, [timer, setTimeRemaining, setActiveTimer])

  return (
    <div className='mt-20 flex flex-col items-center'>
      <LinearBar
        timeElapsed={timeElapsed}
        minutes={minutes}
        viewPortX={viewPortX}
      />
      <Display timeRemaining={timeRemaining} />
      <TimerButton activeTimer={activeTimer} setActiveTimer={setActiveTimer} />
      <Controller />
    </div>
  )
}

export default Pomodoro
