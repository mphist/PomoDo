import { useViewState, viewState } from '../../atoms/viewState'

export type AlertBoxProps = {}

function AlertBox({}: AlertBoxProps) {
  const [, setViewState] = useViewState()
  const handleClick = (confirm: boolean) => {
    setViewState({ ...viewState, showAlert: false })
  }
  return (
    <div className='bg-white flex flex-col items-center rounded-md font-bold text-sm text-gray-dark w-[320px] h-36 fixed left-[270px] right-0 mx-auto top-[320px]'>
      <div className='h-[70%]'>
        <p className='p-6'>
          Are you sure you want to work on a different task? The timer for the
          current task will stop.
        </p>
      </div>
      <div className='flex h-[30%] w-full justify-between'>
        <button
          className='w-[50%] bg-tomato text-white rounded-bl-md py-2 tracking-wide hover:brightness-95'
          onClick={() => handleClick(true)}
        >
          YES
        </button>
        <button
          className='w-[50%] bg-[#bdbbbb] text-white rounded-br-md py-2 tracking-wide hover:brightness-95'
          onClick={() => handleClick(false)}
        >
          NO
        </button>
      </div>
    </div>
  )
}

export default AlertBox
