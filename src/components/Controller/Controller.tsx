import ControllerButton from '../ControllerButton/ControllerButton'

export type ControllerProps = {
  taskId: string
}

export default function Controller({ taskId }: ControllerProps) {
  return (
    <div className='w-[400px] flex justify-between'>
      <ControllerButton name='Focus' time={25} id={taskId} />
      <ControllerButton name='Short Break' time={5} id={taskId} />
      <ControllerButton name='Long Break' time={10} id={taskId} />
    </div>
  )
}
