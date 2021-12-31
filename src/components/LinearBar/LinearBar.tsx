import responsiveWidth from '../../lib/responsiveWidth'
import LapseBar from '../LapseBar/LapseBar'

export type LinearBarProps = {
  timeElapsed: number
  minutes: number
  viewPortX: number
}

function LinearBar({ timeElapsed, minutes, viewPortX }: LinearBarProps) {
  return (
    <div className='md:w-[500px] h-8 border-tomato border-2 rounded-sm bg-tomato sm:w-[300px]'>
      <LapseBar
        width={Number(
          ((timeElapsed * responsiveWidth(viewPortX)) / minutes).toFixed(2)
        )}
        viewPortX={viewPortX}
      />
    </div>
  )
}

export default LinearBar
