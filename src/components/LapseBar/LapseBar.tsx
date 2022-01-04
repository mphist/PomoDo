export type LapseBarProps = {
  width: number
}

function LapseBar({ width }: LapseBarProps) {
  return (
    <div
      className='h-7 rounded-sm bg-white'
      style={{
        width: `${width}px`,
      }}
    ></div>
  )
}

export default LapseBar
