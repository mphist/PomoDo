import ControllerButton from '../ControllerButton/ControllerButton'

export type ControllerProps = {}

export default function Controller({}: ControllerProps) {
  return (
    <div className='mt-16 w-[400px] flex justify-between'>
      <ControllerButton name='Focus' timer={25} />
      <ControllerButton name='Short Break' timer={5} />
      <ControllerButton name='Long Break' timer={10} />
    </div>
  )
}
