export type TimerProps = {
  timeRemaining: number
}

function Timer({ timeRemaining }: TimerProps) {
  const time = new Date(1000 * timeRemaining).toISOString().substring(15, 19)
  return (
    <div className='mt-10 w-20 text-center text-3xl tracking-wider font-timer'>
      {time}
    </div>
  )
}

export default Timer
