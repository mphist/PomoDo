import Pomodoro from '../Pomodoro/Pomodoro'

export type BodyProps = {}

function Body({}: BodyProps) {
  return (
    <div className='h-full flex flex-col'>
      <Pomodoro />
    </div>
  )
}

export default Body
