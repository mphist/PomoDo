import { useEffect, useState } from 'react'

export type TimerProps = {
  timeRemaining: number
  minutes: number
}

function Timer({ timeRemaining, minutes }: TimerProps) {
  const [time, setTime] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => {
    switch (minutes) {
      case 1500:
        setClassName(
          'mt-10 relative top-[-350px] w-22 text-center text-tomato text-7xl tracking-wider'
        )
        break
      case 600:
        setClassName(
          'mt-10 relative top-[-350px] w-22 text-center text-tortoise text-7xl tracking-wider'
        )
        break
      case 300:
        setClassName(
          'mt-10 relative top-[-350px] w-22 text-center text-pink text-7xl tracking-wider'
        )
        break
    }
  }, [minutes, setClassName])

  useEffect(() => {
    const tempTime = new Date(1000 * timeRemaining).toISOString()
    setTime(tempTime.substring(tempTime.length - 10, tempTime.length - 10 + 5))
  }, [time, setTime, timeRemaining])

  return <div className={className}>{time}</div>
}

export default Timer
