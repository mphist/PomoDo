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
  const getProgress = () => {
    return Number(((timeElapsed / minutes) * 100).toFixed(2))
  }

  return (
    <div className='relative'>
      <CircularProgress
        variant='determinate'
        value={100}
        style={{ width: '450px', height: 'auto' }}
        thickness={1.5}
        sx={{
          color: '#d3c9c9',
          position: 'absolute',
          left: 0,
        }}
      />
      <CircularProgress
        variant='determinate'
        value={getProgress()}
        style={{ width: '450px', height: 'auto' }}
        thickness={1.5}
      />
    </div>
  )
}

export default CircularBar
