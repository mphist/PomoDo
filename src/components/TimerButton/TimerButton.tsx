export type TimerButtonProps = {
  activeTimer: boolean
  setActiveTimer: React.Dispatch<React.SetStateAction<boolean>>
}

function TimerButton({ activeTimer, setActiveTimer }: TimerButtonProps) {
  return (
    <button
      className='bg-burgundy w-16 text-white tracking-wide hover:brightness-95 mt-14 rounded-lg py-1 px-2'
      onClick={() => setActiveTimer(!activeTimer)}
    >
      {activeTimer ? 'Pause' : 'Start'}
    </button>
  )
}

export default TimerButton
