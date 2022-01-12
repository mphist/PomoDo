import { useEffect, useState } from 'react'
import responsiveWidth from '../../lib/responsiveWidth'
import LapseBar from '../LapseBar/LapseBar'

export type LinearBarProps = {
  timeElapsed: number
  minutes: number
  viewPortX: number
}

function LinearBar({ timeElapsed, minutes, viewPortX }: LinearBarProps) {
  const [className, setClassName] = useState('')

  useEffect(() => {
    switch (minutes) {
      case 1500:
        setClassName(
          'md:w-[500px] h-8 border-tomato border-2 rounded-sm bg-tomato sm:w-[300px]'
        )
        break
      case 600:
        setClassName(
          'md:w-[500px] h-8 border-tortoise border-2 rounded-sm bg-tortoise sm:w-[300px]'
        )
        break
      case 300:
        setClassName(
          'md:w-[500px] h-8 border-pink border-2 rounded-sm bg-pink sm:w-[300px]'
        )
        break
    }
  }, [minutes, setClassName])
  return (
    <div className={className}>
      <LapseBar
        width={Number(
          ((timeElapsed * responsiveWidth(viewPortX)) / minutes).toFixed(2)
        )}
      />
    </div>
  )
}

export default LinearBar
