export type ControllerButtonProps = {
  name: string
}

function ControllerButton({ name }: ControllerButtonProps) {
  return (
    <button className='p-2 bg-primary w-[118px] rounded-lg text-white text-sm  uppercase cursor-pointer tracking-wide hover:font-bold'>
      {name}
    </button>
  )
}

export default ControllerButton
