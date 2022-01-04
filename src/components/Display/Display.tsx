import { useEffect, useState } from 'react'

export type TimerProps = {
  timeRemaining: number
}

function Timer({ timeRemaining }: TimerProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tempTime = new Date(1000 * timeRemaining).toISOString()
    setTime(tempTime.substring(tempTime.length - 10, tempTime.length - 10 + 5))
  }, [time, setTime, timeRemaining])

  return (
    <div className='mt-10 w-22 text-center text-tomato text-3xl tracking-wider font-timer'>
      {time}
    </div>
  )
}

export default Timer
