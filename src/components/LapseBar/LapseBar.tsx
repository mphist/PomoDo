export type LapseBarProps = { width: number }

function LapseBar({ width }: LapseBarProps) {
  return (
    <div
      className='h-7 rounded-sm bg-white'
      style={{ width: `${width < 500 ? width : width - 4}px` }}
    ></div>
  )
}

export default LapseBar
