export type ControllerButtonProps = {
  name: string
}

function ControllerButton({ name }: ControllerButtonProps) {
  return (
    <button className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm font-bold uppercase cursor-pointer tracking-wide hover:brightness-95'>
      {name}
    </button>
  )
}

export default ControllerButton
