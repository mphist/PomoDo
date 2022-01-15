import { useCallback, useContext, useEffect, useState } from 'react'
import LinearBar from '../LinearBar/LinearBar'
import Display from '../Display/Display'
import Controller from '../Controller/Controller'
import TimerButton from '../TimerButton/TimerButton'
import { TaskContext, TaskContextType } from '../../contexts/TaskContext'
import { SoundContext } from '../../contexts/SoundContext'
import { WebWorkerContext } from '../../contexts/WebWorkerContext'
import CircularBar from '../CircularBar/CircularBar'
import capitalizeFirstLetter from '../../lib/capitalizeFirstLetter'

export type PomodoroProps = {
  id: string
}

function Pomodoro({ id }: PomodoroProps) {
  const { task, taskId, setTask } = useContext(TaskContext)
  const audio = useContext(SoundContext)
  const local = localStorage.getItem('task')
  const savedTasks: TaskContextType = local && JSON.parse(local)
  // const timer = savedTasks?.[id]?.timer?.time || task![id]?.timer?.time
  const [timer, setTimer] = useState(
    savedTasks?.[id]?.timer?.time || task![id]?.timer?.time
  ) // in minutes
  const [timeRemaining, setTimeRemaining] = useState(timer * 60) // in seconds
  const [timeElapsed, setTimeElapsed] = useState(0) // in seconds
  const minutes = timer * 60
  const [viewPortX, setViewPortX] = useState(window.innerWidth)
  const [activeTimer, setActiveTimer] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>()
  const [done, setDone] = useState(false)
  const timerWorker = useContext(WebWorkerContext)

  const checkId = (el: HTMLElement | null | undefined) => {
    if (el && el.id === taskId) return true
    return false
  }

  const terminateWorker = (isCurrentId: boolean) => {
    if (!isCurrentId) {
      timerWorker?.terminate()
    }
  }

  const clickEventListener = (e: MouseEvent) => {
    const el = e.target as HTMLElement
    if (el.tagName === 'BUTTON') {
      if (el.id === 'modalYes') {
        terminateWorker(false)
      }
      return
    }
    if (el.tagName === 'LI') {
      if (!el.id) {
        const li = el.parentElement?.parentElement
        if (li && li.tagName === 'LI') {
          terminateWorker(checkId(li))
        }
      } else {
        terminateWorker(checkId(el))
      }
    } else if (el.tagName === 'path') {
      const li = el.parentElement?.parentElement
      if (li && li.tagName === 'LI') {
        terminateWorker(checkId(li))
      }
    } else {
      const li = el.parentElement
      if (li && li.tagName === 'LI') {
        terminateWorker(checkId(li))
      }
    }
  }

  useEffect(() => {
    window.addEventListener('click', clickEventListener)
    return () => window.removeEventListener('click', clickEventListener)
  })

  useEffect(() => {
    if (task && task[id]) {
      setTimer(task[id]?.timer?.time)
    } else {
      setTimer(savedTasks?.[id]?.timer?.time)
    }
  }, [task, savedTasks, id, setTimer])

  const tempTime = new Date(1000 * timeRemaining).toISOString()
  const titleTime = tempTime.substring(
    tempTime.length - 10,
    tempTime.length - 10 + 5
  )
  useEffect(() => {
    document.title = titleTime + " PomoDo - Let's Focus!"
    if (activeTimer) {
      if (timeElapsed < timer * 60 - 1) {
        if (timerWorker) {
          timerWorker.postMessage({
            msg: 'startTimer',
            timeElapsed,
            delay: process.env.NODE_ENV === 'production' ? 1000 : 1000,
          })
          timerWorker.onmessage = (e) => {
            if (e && e.data) {
              setTimeoutId(e.data)
              setTimeRemaining((timeRemaining) => timeRemaining - 1)
              setTimeElapsed((timeElapsed) => timeElapsed + 1)
            }
          }
        }
      } else if (!done) {
        // switch mode after current mode finishes and save to storage context
        const mode = task![id]?.timer?.mode
        if (task && Object.keys(task).length > 0) {
          setTask!({
            ...task,
            [id]: {
              ...task![id],
              timer:
                mode === 'focus'
                  ? {
                      mode: 'short break',
                      time: 5,
                    }
                  : { mode: 'focus', time: 25 },
            },
          })
          // save new task object in localStorage
          localStorage.setItem('task', JSON.stringify(task))
        } else {
          setTask!({
            ...savedTasks,
            [id]: {
              ...savedTasks![id],
              timer:
                mode === 'focus'
                  ? {
                      mode: 'short break',
                      time: 5,
                    }
                  : { mode: 'focus', time: 25 },
            },
          })
          // save new task object in localStorage
          localStorage.setItem('task', JSON.stringify(task))
        }
        // setDone(true)
        if (audio) {
          audio.volume = 0.3
          audio.play().then(() => true)
        }
      }
    } else {
      if (timerWorker) {
        timerWorker.onmessage = (e) => {
          if (e && e.data) {
            timeoutId && clearTimeout(timeoutId)
            clearTimeout(e.data)
          }
        }
      }
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
  }, [resetTime, id])

  return (
    <div className='mt-36 flex flex-col items-center'>
      {/* <LinearBar
        timeElapsed={timeElapsed}
        minutes={minutes}
        viewPortX={viewPortX}
      /> */}
      {savedTasks && (
        <h1 className='text-3xl mb-10 text-[#343a40]'>
          {capitalizeFirstLetter(savedTasks[id].timer.mode)}
        </h1>
      )}
      <CircularBar timeElapsed={timeElapsed} minutes={minutes} />
      <Display timeRemaining={timeRemaining} minutes={minutes} />
      <TimerButton
        doneState={{ done, setDone }}
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer!}
        resetTime={resetTime}
        audio={audio}
      />
      <Controller taskId={id} />
    </div>
  )
}

export default Pomodoro
