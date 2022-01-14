import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import responsiveWidth from '../../lib/responsiveWidth'
import LapseBar from '../LapseBar/LapseBar'

export type CircularBarProps = {
  timeElapsed: number
  minutes: number
  // viewPortX: number
}

function CircularBar({
  timeElapsed,
  minutes,
}: /*viewPortX */
CircularBarProps) {
  const [color, setColor] = useState('')

  const getProgress = () => {
    return Number(((timeElapsed / minutes) * 100).toFixed(2))
  }

  useEffect(() => {
    switch (minutes / 60) {
      case 25:
        setColor('#ff5c58')
        break
      case 10:
        setColor('#93b5c6')
        break
      case 5:
        setColor('#97bfb4')
        break
    }
  }, [setColor, minutes])

  return (
    <div className='relative'>
      <CircularProgress
        variant='determinate'
        value={100}
        style={{ width: '450px', height: 'auto' }}
        thickness={1.5}
        sx={{
          color: '#343a40',
          position: 'absolute',
          left: 0,
        }}
      />
      <CircularProgress
        variant='determinate'
        value={getProgress()}
        style={{ width: '450px', height: 'auto' }}
        sx={{ color }}
        thickness={1.5}
      />
    </div>
  )
}

export default CircularBar
