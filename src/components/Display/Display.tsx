import { useEffect, useState } from 'react'

export type TimerProps = {
  timeRemaining: number
  minutes: number
}

function Timer({ timeRemaining, minutes }: TimerProps) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tempTime = new Date(1000 * timeRemaining).toISOString()
    setTime(tempTime.substring(tempTime.length - 10, tempTime.length - 10 + 5))
  }, [time, setTime, timeRemaining])

  return (
    <div className='mt-10 relative top-[-350px] w-22 text-center text-[#ff5c58] text-7xl tracking-wider'>
      {time}
    </div>
  )
}

export default Timer
