import responsiveWidth from '../../lib/responsiveWidth'

export type LapseBarProps = {
  width: number
  viewPortX: number
}

function LapseBar({ width, viewPortX }: LapseBarProps) {
  return (
    <div
      className='h-7 rounded-sm bg-white'
      style={{
        width: `${width < responsiveWidth(viewPortX) ? width : width - 4}px`,
      }}
    ></div>
  )
}

export default LapseBar
