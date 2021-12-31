import ControllerButton from '../ControllerButton/ControllerButton'

export type ControllerProps = {}

function Controller({}: ControllerProps) {
  return (
    <div className='mt-20 w-[400px] flex justify-between'>
      <ControllerButton name='Focus' />
      <ControllerButton name='Short Break' />
      <ControllerButton name='Long Break' />
    </div>
  )
}

export default Controller
