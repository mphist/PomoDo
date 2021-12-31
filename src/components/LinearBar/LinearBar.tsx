import LapseBar from '../LapseBar/LapseBar'

export type LinearBarProps = {
  timeElapsed: number
  minutes: number
}

function LinearBar({ timeElapsed, minutes }: LinearBarProps) {
  return (
    <div className='w-[500px] h-8 border-tomato border-2 rounded-sm bg-tomato'>
      <LapseBar width={Number(((timeElapsed * 500) / minutes).toFixed(2))} />
    </div>
  )
}

export default LinearBar
